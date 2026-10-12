// Options for the multi-step project brief in the "Tell us about your project" section.
export const projectTypes = [
  "Mobile app",
  "Web platform or portal",
  "Booking or reservations",
  "Membership site",
  "Business website",
  "Take over an existing codebase",
  "Something else",
];

export const stages = [
  "Just an idea",
  "Sketches or a spec",
  "Running on spreadsheets",
  "Live, needs work",
  "Live, needs to scale",
];

export const budgets = [
  "Under $10K",
  "$10K–$25K",
  "$25K–$50K",
  "$50K–$100K",
  "$100K+",
  "Not sure yet",
];

export const budgetHints: Record<string, string> = {
  "Not sure yet":
    "No problem. We’ll help you scope a first phase and quote it up front, so you can decide with real numbers.",
  "Under $10K":
    "Good to know. We’ll suggest the version that fits this budget best, and phase the rest for later.",
};

export const defaultBudgetHint =
  "Thanks. Knowing this up front lets us shape a plan that fits it, phased if needed.";

export const timelines = ["As soon as possible", "1–3 months", "3–6 months", "6+ months", "Flexible"];

export const referralSources = [
  "A referral or past client",
  "Search",
  "GitHub",
  "Social media",
  "Somewhere else",
];

export const fitChecklist = [
  "You’re a small or mid-sized business that needs dependable software without hiring an in-house team",
  "Your bookings, members or orders have outgrown spreadsheets and email",
  "You have an app idea you want in the App Store and Google Play",
  "You’ve inherited a codebase that needs a new home",
];
