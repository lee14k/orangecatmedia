export type Service = {
  id: string;
  title: string;
  summary: string;
  badges: string[];
};

export const services: Service[] = [
  {
    id: "mobile",
    title: "Mobile apps",
    summary:
      "iPhone, iPad and Android apps in React Native and TypeScript. Accessible, fast to load, and ready for App Store and Google Play review from the first commit.",
    badges: ["React Native", "TypeScript", "App Store", "Google Play"],
  },
  {
    id: "web",
    title: "Web platforms",
    summary:
      "Booking and reservation systems, membership portals, dashboards and marketing sites. Quick for customers and easy for your team to run.",
    badges: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "backend",
    title: "APIs & data",
    summary:
      "Auth, payments, background jobs and third-party integrations on Node, C#/.NET and Python, backed by PostgreSQL and Redis.",
    badges: ["Node", ".NET", "Python", "PostgreSQL", "Redis"],
  },
  {
    id: "cloud",
    title: "Cloud & delivery",
    summary:
      "Deploy pipelines, monitoring and infrastructure on AWS and Railway, sized to your traffic and your budget.",
    badges: ["AWS", "Railway", "CI/CD"],
  },
  {
    id: "design",
    title: "Product & interface design",
    summary:
      "User flows, prototypes and interface design, so what we build is something people want to use.",
    badges: ["UX", "Prototyping", "Accessibility"],
  },
  {
    id: "care",
    title: "Maintenance & support",
    summary:
      "Dependency and OS updates, store resubmissions, bug fixes and new features after launch. Inheriting a codebase? We start with a short audit and a clear plan.",
    badges: ["Updates", "Monitoring", "Audits"],
  },
];
