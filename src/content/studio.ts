export type RoleStackItem = {
  label: string;
  color: "orange" | "teal" | "pink";
};

export const studio = {
  name: "Orange Cat Media",
  // Must match the legal entity name on your D-U-N-S record for Apple Developer enrollment.
  legalName: "Orange Cat Media Company",
  siteUrl: "https://orangecatmedia.dev",
  location: "Stevens Point, WI",
  origin: "Michigan's Upper Peninsula",
  email: "hello@orangecatmedia.dev",
  github: "https://github.com/lee14k",
  founder: "Kailee Hamre",
  description:
    "Orange Cat Media is an independent software studio building mobile apps, web platforms, and the systems behind them.",
  specialty:
    "Mobile apps for iPhone, iPad, and Android, booking and membership platforms for the web, and the APIs, data, and cloud infrastructure that keep them running.",
  tagline:
    "We take products from first sketch to store release — then stay on to keep them healthy as they grow.",
  roles: [
    { label: "MOBILE APPS", color: "orange" },
    { label: "WEB PLATFORMS", color: "teal" },
    { label: "THE WHOLE STACK", color: "pink" },
  ] as RoleStackItem[],
  stats: [
    { value: "$130K+", label: "Yearly client revenue on platforms we built" },
    { value: "4+ yrs", label: "Shipping production software" },
    { value: "End to end", label: "Design, build, deploy, support" },
    { value: "1:1", label: "Work directly with the engineer" },
  ],
  contactLede:
    "Tell us what you’re making — an app idea, a platform that’s outgrown its spreadsheets, or a codebase that needs a new home. We read every message and reply personally.",
};
