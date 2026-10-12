export type Reason = {
  id: string;
  chip: string;
  title: string;
  body: string;
  feature?: boolean;
};

export const reasons: Reason[] = [
  {
    id: "earns",
    chip: "$",
    title: "Software that earns its keep",
    body: "The reservation platforms we built for hospitality clients bring in more than $130K a year combined. We build for the business result, not for a feature list.",
    feature: true,
  },
  {
    id: "engineer",
    chip: "1:1",
    title: "You talk to the engineer",
    body: "No account managers and no hand-offs. The person on your first call is the person writing your code, through launch day and after it.",
  },
  {
    id: "budget",
    chip: "✓",
    title: "On time and on budget, in writing",
    body: "Every project is quoted up front, in phases for bigger builds, so you know what you’re paying for before work starts. Then we ship to that plan.",
  },
  {
    id: "experience",
    chip: "★",
    title: "Enterprise experience, studio overhead",
    body: "Kailee has built multi-tenant insurance portals, enterprise scheduling platforms and finance-system integrations, and taken a consumer app all the way through App Store release.",
  },
  {
    id: "week-one",
    chip: "wk1",
    title: "Working software from week one",
    body: "Typed end to end, tested where it matters and deployed early. You see real progress early and often, never a big reveal at the end.",
  },
  {
    id: "after-launch",
    chip: "♥",
    title: "We stay after launch",
    body: "OS and dependency updates, App Store and Google Play resubmissions, monitoring and new features, so the product keeps working as your business changes.",
  },
];
