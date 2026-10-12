export type Service = {
  id: string;
  number: string;
  kind: string;
  title: string;
  summary: string;
  badges: string[];
};

export const services: Service[] = [
  {
    id: "mobile",
    number: "01",
    kind: "Mobile",
    title: "Mobile apps",
    summary:
      "Apps for iPhone, iPad, and Android built with React Native and TypeScript — accessible, fast to load, and prepared for App Store and Google Play review from the first commit.",
    badges: ["React Native", "TypeScript", "App Store", "Google Play"],
  },
  {
    id: "web",
    number: "02",
    kind: "Web",
    title: "Web platforms",
    summary:
      "Booking and reservation systems, membership portals, dashboards, and marketing sites in React and Next.js — quick for customers, easy for your team to run.",
    badges: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "backend",
    number: "03",
    kind: "Backend",
    title: "APIs & data",
    summary:
      "Auth, payments, background jobs, and third-party integrations on Node, C#/.NET, and Python, backed by PostgreSQL and Redis.",
    badges: ["Node", ".NET", "Python", "PostgreSQL", "Redis"],
  },
  {
    id: "cloud",
    number: "04",
    kind: "Cloud",
    title: "Cloud & delivery",
    summary:
      "Deploy pipelines, monitoring, and infrastructure on AWS and Railway, sized to your traffic and your budget.",
    badges: ["AWS", "Railway", "CI/CD"],
  },
  {
    id: "design",
    number: "05",
    kind: "Product",
    title: "Product & interface design",
    summary:
      "User flows, prototypes, and interface design, so what we build is something people actually want to use.",
    badges: ["UX", "Prototyping", "Accessibility"],
  },
  {
    id: "care",
    number: "06",
    kind: "Care",
    title: "Maintenance & support",
    summary:
      "Dependency and OS updates, store resubmissions, bug fixes, and new features after launch.",
    badges: ["Updates", "Monitoring", "Support"],
  },
];
