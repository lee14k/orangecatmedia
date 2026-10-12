import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { stickers } from "@/assets/stickers";
import {
  budgetHints,
  budgets,
  defaultBudgetHint,
  fitChecklist,
  projectTypes,
  referralSources,
  stages,
  timelines,
} from "@/content/brief";
import { studio } from "@/content/studio";
import styles from "./Brief.module.css";

type BriefData = {
  types: string[];
  stage: string;
  description: string;
  users: string;
  mustHaves: string;
  links: string;
  budget: string;
  timeline: string;
  deadline: string;
  name: string;
  email: string;
  company: string;
  role: string;
  heard: string;
  // Honeypot: hidden from people, filled in by naive bots.
  website: string;
};

type TextField = Exclude<keyof BriefData, "types">;

const EMPTY: BriefData = {
  types: [],
  stage: "",
  description: "",
  users: "",
  mustHaves: "",
  links: "",
  budget: "",
  timeline: "",
  deadline: "",
  name: "",
  email: "",
  company: "",
  role: "",
  heard: "",
  website: "",
};

const STEP_LABELS = ["Project", "Details", "Budget", "You"];
const DRAFT_KEY = "ocm-brief-draft";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(step: number, brief: BriefData): string {
  switch (step) {
    case 0:
      if (!brief.types.length) return "Pick at least one thing you’re building.";
      return brief.stage ? "" : "Tell us where the project is today.";
    case 1:
      return brief.description.trim().length < 20
        ? "Add a sentence or two about the project (at least 20 characters)."
        : "";
    case 2:
      if (!brief.budget) return "Pick a budget range, or “Not sure yet”.";
      return brief.timeline ? "" : "Pick a timeline, or “Flexible”.";
    default:
      if (!brief.name.trim()) return "Add your name so Kailee knows who to reply to.";
      return EMAIL_PATTERN.test(brief.email.trim())
        ? ""
        : "Add a valid email address, like you@business.com.";
  }
}

function readDraft(): BriefData | null {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(DRAFT_KEY) ?? "null");
    if (!raw || typeof raw !== "object") return null;
    const record = raw as Record<string, unknown>;
    const draft = { ...EMPTY };
    for (const key of Object.keys(EMPTY) as (keyof BriefData)[]) {
      const value = record[key];
      if (key === "types") {
        if (Array.isArray(value)) {
          draft.types = value.filter(
            (v): v is string => typeof v === "string" && projectTypes.includes(v),
          );
        }
      } else if (typeof value === "string") {
        draft[key as TextField] = value;
      }
    }
    return draft;
  } catch {
    return null;
  }
}

function writeDraft(brief: BriefData | null) {
  try {
    if (brief) localStorage.setItem(DRAFT_KEY, JSON.stringify({ ...brief, website: "" }));
    else localStorage.removeItem(DRAFT_KEY);
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the form still works.
  }
}

function recapRows(brief: BriefData): [string, string][] {
  const rows: [string, string][] = [
    ["Building", brief.types.join(", ")],
    ["Today", brief.stage],
    ["About it", brief.description.trim()],
    ["Users", brief.users.trim()],
    ["Must-haves", brief.mustHaves.trim()],
    ["Budget", brief.budget],
    ["Timeline", [brief.timeline, brief.deadline.trim()].filter(Boolean).join(" · ")],
    ["Contact", [brief.name, brief.role, brief.company].map((v) => v.trim()).filter(Boolean).join(", ")],
  ];
  return rows.filter(([, value]) => value);
}

function Chip({
  type,
  name,
  value,
  checked,
  onChange,
}: {
  type: "checkbox" | "radio";
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className={styles.chip}>
      <input type={type} name={name} value={value} checked={checked} onChange={onChange} />
      <span>{value}</span>
    </label>
  );
}

export function Brief() {
  const [brief, setBrief] = useState<BriefData>(EMPTY);
  const [hydrated, setHydrated] = useState(false);
  const [step, setStep] = useState(0);
  const [reached, setReached] = useState(0);
  const [error, setError] = useState("");
  // Only a failed send offers the email fallback, not a validation message.
  const [sendFailed, setSendFailed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [sent, setSent] = useState<BriefData | null>(null);
  const [copyLabel, setCopyLabel] = useState("Copy");
  const doneTitle = useRef<HTMLHeadingElement>(null);
  const mailRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const draft = readDraft();
    if (draft) setBrief(draft);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated && status !== "sent") writeDraft(brief);
  }, [brief, hydrated, status]);

  useEffect(() => {
    if (status === "sent") doneTitle.current?.focus();
  }, [status]);

  useEffect(() => {
    if (copyLabel === "Copy") return;
    const timer = setTimeout(() => setCopyLabel("Copy"), 2200);
    return () => clearTimeout(timer);
  }, [copyLabel]);

  function set(field: TextField) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setBrief((prev) => ({ ...prev, [field]: event.target.value }));
  }

  function choose(field: TextField, value: string) {
    setBrief((prev) => ({ ...prev, [field]: value }));
  }

  function toggleType(value: string) {
    setBrief((prev) => ({
      ...prev,
      types: prev.types.includes(value)
        ? prev.types.filter((t) => t !== value)
        : [...prev.types, value],
    }));
  }

  function go(next: number) {
    setStep(next);
    setReached((prev) => Math.max(prev, next));
    setError("");
    setSendFailed(false);
  }

  function scrollToForm() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("start")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  }

  async function send() {
    setStatus("sending");
    setError("");
    setSendFailed(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...brief, message: brief.description }),
      });
      if (!response.ok) {
        setError(
          response.status === 429
            ? "That’s a lot of briefs. Try again in a bit, or email us directly."
            : "Something went wrong sending that. Try again, or email us directly.",
        );
        setSendFailed(true);
        setStatus("idle");
        return;
      }
      setSent(brief);
      setStatus("sent");
      writeDraft(null);
    } catch {
      setError("Couldn’t reach the server. Try again, or email us directly.");
      setSendFailed(true);
      setStatus("idle");
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = validate(step, brief);
    if (message) {
      setError(message);
      setSendFailed(false);
      return;
    }
    if (step < STEP_LABELS.length - 1) {
      go(step + 1);
      scrollToForm();
      return;
    }
    void send();
  }

  function startOver() {
    setBrief(EMPTY);
    setSent(null);
    setStep(0);
    setReached(0);
    setError("");
    setSendFailed(false);
    setStatus("idle");
  }

  function copyEmail() {
    const selectIt = () => {
      const node = mailRef.current;
      if (!node) return;
      const range = document.createRange();
      range.selectNodeContents(node);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      setCopyLabel("Selected");
    };
    if (!navigator.clipboard) {
      selectIt();
      return;
    }
    navigator.clipboard.writeText(studio.email).then(() => setCopyLabel("Copied"), selectIt);
  }

  const isLast = step === STEP_LABELS.length - 1;
  const progress = status === "sent" ? 100 : ((step + 1) / STEP_LABELS.length) * 100;

  return (
    <section className={`section ${styles.intake}`} id="start">
      <div className="wrap">
        <div className={`section-head ${styles.head}`}>
          <h2>Tell us about your project</h2>
          <p className="lead">
            We want to learn as much as we can about what you’re building, so we both know quickly
            whether we’re a fit. If we are, you get a clear plan, a quote up front, and a build that
            lands on time and on budget.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.formCard}>
            {status !== "sent" ? (
              <ol className={styles.stepper} aria-label="Project brief steps">
                {STEP_LABELS.map((label, index) => (
                  <li key={label}>
                    <button
                      type="button"
                      aria-current={index === step ? "step" : undefined}
                      className={index < reached && index !== step ? styles.done : undefined}
                      disabled={index > reached}
                      onClick={() => go(index)}
                    >
                      <span className={styles.n}>{index + 1}</span>
                      <span className={styles.lbl}>{label}</span>
                    </button>
                  </li>
                ))}
              </ol>
            ) : null}
            <div className={styles.progress} aria-hidden="true">
              <i style={{ width: `${progress}%` }} />
            </div>

            {status === "sent" && sent ? (
              <div className={`${styles.body} ${styles.donePanel}`}>
                <Image className={styles.kit} src={stickers.kitty} alt="" sizes="120px" />
                <h3 tabIndex={-1} ref={doneTitle}>
                  Got it. Thanks for the brief
                </h3>
                <p>
                  Kailee reads every brief personally and will reply to <b>{sent.email.trim()}</b>{" "}
                  with next steps, usually a short call to dig into the details.
                </p>
                <dl className={styles.recap}>
                  {recapRows(sent).map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <div>
                  <button type="button" className="btn btn-sm" onClick={startOver}>
                    Start a new brief
                  </button>
                </div>
              </div>
            ) : (
              <form className={styles.body} onSubmit={onSubmit} noValidate>
                {step === 0 ? (
                  <fieldset>
                    <legend className="visually-hidden">Project</legend>
                    <div className={styles.q}>
                      <div className={styles.qLabel} id="q-type">
                        What are you building?
                      </div>
                      <p className={styles.qHelp}>Pick everything that applies.</p>
                      <div className={styles.chips} role="group" aria-labelledby="q-type">
                        {projectTypes.map((value) => (
                          <Chip
                            key={value}
                            type="checkbox"
                            name="types"
                            value={value}
                            checked={brief.types.includes(value)}
                            onChange={() => toggleType(value)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className={styles.q}>
                      <div className={styles.qLabel} id="q-stage">
                        Where is it today?
                      </div>
                      <div className={styles.chips} role="radiogroup" aria-labelledby="q-stage">
                        {stages.map((value) => (
                          <Chip
                            key={value}
                            type="radio"
                            name="stage"
                            value={value}
                            checked={brief.stage === value}
                            onChange={() => choose("stage", value)}
                          />
                        ))}
                      </div>
                    </div>
                  </fieldset>
                ) : null}

                {step === 1 ? (
                  <fieldset>
                    <legend className="visually-hidden">Details</legend>
                    <div className={styles.field}>
                      <label htmlFor="f-desc" className={styles.qLabel}>
                        Describe it in a few sentences
                      </label>
                      <p className={styles.qHelp}>
                        What it does, who it’s for, and the problem it solves.
                      </p>
                      <textarea
                        id="f-desc"
                        maxLength={2000}
                        value={brief.description}
                        onChange={set("description")}
                        placeholder="We run three lakeside cabins and take bookings by phone and email. We want guests to see availability, book and pay online, and we want one calendar for our staff."
                      />
                      <span className={styles.count}>{brief.description.length} / 2000</span>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="f-users">
                        Who will use it? <span className={styles.opt}>optional</span>
                      </label>
                      <input
                        type="text"
                        id="f-users"
                        maxLength={300}
                        value={brief.users}
                        onChange={set("users")}
                        placeholder="Guests on their phones, plus two staff on a desktop"
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="f-must">
                        Must-have features <span className={styles.opt}>optional</span>
                      </label>
                      <textarea
                        id="f-must"
                        className={styles.short}
                        maxLength={1000}
                        value={brief.mustHaves}
                        onChange={set("mustHaves")}
                        placeholder="Online payments, deposit rules, automatic reminder emails…"
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="f-links">
                        Links we should see <span className={styles.opt}>optional</span>
                      </label>
                      <input
                        type="text"
                        id="f-links"
                        maxLength={500}
                        value={brief.links}
                        onChange={set("links")}
                        placeholder="Your current site, a competitor you like, designs, a repo"
                      />
                    </div>
                  </fieldset>
                ) : null}

                {step === 2 ? (
                  <fieldset>
                    <legend className="visually-hidden">Budget</legend>
                    <div className={styles.q}>
                      <div className={styles.qLabel} id="q-budget">
                        What’s your budget?
                      </div>
                      <p className={styles.qHelp}>
                        A range is fine. It helps us shape a plan that fits, phased if needed.
                      </p>
                      <div
                        className={`${styles.chips} ${styles.budget}`}
                        role="radiogroup"
                        aria-labelledby="q-budget"
                      >
                        {budgets.map((value) => (
                          <Chip
                            key={value}
                            type="radio"
                            name="budget"
                            value={value}
                            checked={brief.budget === value}
                            onChange={() => choose("budget", value)}
                          />
                        ))}
                      </div>
                      {brief.budget ? (
                        <p className={styles.hint}>
                          {budgetHints[brief.budget] ?? defaultBudgetHint}
                        </p>
                      ) : null}
                    </div>
                    <div className={styles.q}>
                      <div className={styles.qLabel} id="q-when">
                        When do you need it?
                      </div>
                      <div className={styles.chips} role="radiogroup" aria-labelledby="q-when">
                        {timelines.map((value) => (
                          <Chip
                            key={value}
                            type="radio"
                            name="timeline"
                            value={value}
                            checked={brief.timeline === value}
                            onChange={() => choose("timeline", value)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="f-deadline">
                        Is there a date it has to be live by?{" "}
                        <span className={styles.opt}>optional</span>
                      </label>
                      <input
                        type="text"
                        id="f-deadline"
                        maxLength={200}
                        value={brief.deadline}
                        onChange={set("deadline")}
                        placeholder="Before the summer booking season opens in May"
                      />
                    </div>
                  </fieldset>
                ) : null}

                {step === 3 ? (
                  <fieldset>
                    <legend className="visually-hidden">You</legend>
                    <div className={styles.fields2}>
                      <div className={styles.field}>
                        <label htmlFor="f-name">Your name</label>
                        <input
                          type="text"
                          id="f-name"
                          autoComplete="name"
                          maxLength={100}
                          value={brief.name}
                          onChange={set("name")}
                        />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="f-email">Email</label>
                        <input
                          type="email"
                          id="f-email"
                          autoComplete="email"
                          maxLength={254}
                          value={brief.email}
                          onChange={set("email")}
                          placeholder="you@business.com"
                        />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="f-company">
                          Company <span className={styles.opt}>optional</span>
                        </label>
                        <input
                          type="text"
                          id="f-company"
                          autoComplete="organization"
                          maxLength={200}
                          value={brief.company}
                          onChange={set("company")}
                        />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="f-role">
                          Your role <span className={styles.opt}>optional</span>
                        </label>
                        <input
                          type="text"
                          id="f-role"
                          maxLength={200}
                          value={brief.role}
                          onChange={set("role")}
                          placeholder="Owner, operations lead…"
                        />
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="f-heard">
                        How did you hear about us? <span className={styles.opt}>optional</span>
                      </label>
                      <select id="f-heard" value={brief.heard} onChange={set("heard")}>
                        <option value="">Choose one</option>
                        {referralSources.map((source) => (
                          <option key={source}>{source}</option>
                        ))}
                      </select>
                    </div>
                    <label className={styles.honeypot} aria-hidden="true">
                      Website
                      <input
                        tabIndex={-1}
                        autoComplete="off"
                        value={brief.website}
                        onChange={set("website")}
                      />
                    </label>
                  </fieldset>
                ) : null}

                <p className={styles.err} aria-live="polite">
                  {error}
                  {sendFailed ? (
                    <>
                      {" "}
                      <a href={`mailto:${studio.email}`}>{studio.email}</a>
                    </>
                  ) : null}
                </p>

                <div className={styles.formNav}>
                  {step > 0 ? (
                    <button type="button" className="btn btn-sm" onClick={() => go(step - 1)}>
                      ← Back
                    </button>
                  ) : null}
                  <span className={styles.stepcount}>
                    Step {step + 1} of {STEP_LABELS.length}
                  </span>
                  <span className={styles.spacer} />
                  <button
                    type="submit"
                    className="btn btn-orange"
                    disabled={status === "sending"}
                  >
                    {status === "sending"
                      ? "Sending…"
                      : isLast
                        ? "Send project brief"
                        : "Continue"}{" "}
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside className={styles.side}>
            <div className={`${styles.sideCard} ${styles.ink}`}>
              <h3>What happens next</h3>
              <ol className={styles.next}>
                <li>
                  <span>
                    <b>Kailee reads your brief</b> and replies personally.
                  </span>
                </li>
                <li>
                  <span>
                    <b>A short call</b> to dig into the people, the data and the riskiest parts.
                  </span>
                </li>
                <li>
                  <span>
                    <b>A written quote,</b> phased for bigger builds, before any work starts.
                  </span>
                </li>
              </ol>
            </div>
            <div className={styles.sideCard}>
              <h3>We’re a great fit if</h3>
              <ul className={styles.ticks}>
                {fitChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.sideCard}>
              <h3>Rather just email?</h3>
              <div className={styles.mailRow}>
                <a className={styles.mail} href={`mailto:${studio.email}`}>
                  <span ref={mailRef}>{studio.email}</span>
                </a>
                <button type="button" className={styles.copy} onClick={copyEmail}>
                  {copyLabel}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
