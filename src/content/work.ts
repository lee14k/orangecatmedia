export type Work = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  where?: string;
  href?: string;
  tone?: "pink" | "teal" | "orange";
};

export const featuredWork = {
  title: "Hospitality reservation platforms",
  years: "2022–24",
  stat: "$130K+",
  statLabel: "in combined yearly revenue for hospitality clients",
  summary:
    "Full-stack booking and reservation systems, designed, built and deployed on AWS, that have brought in more than $130K a year combined for our hospitality clients.",
  tags: ["Next.js", "React", "Node", "C#", "Prisma", "PostgreSQL", "AWS"],
};

export const clientWork: Work[] = [
  {
    id: "wisconsin-vintners",
    title: "Wisconsin Vintners Association",
    where: "Wisconsin · Membership",
    summary:
      "Membership site for a Wisconsin winemaking association, with member login, joining and renewal, events and a photo gallery.",
    tags: ["Membership", "Events", "Web"],
    href: "https://www.wihomewinemakers.com/",
    tone: "pink",
  },
  {
    id: "pinecrest",
    title: "Pinecrest of Lake Geneva",
    where: "Lake Geneva, WI · Healthcare",
    summary:
      "Website for a state-licensed assisted living community, introducing families to its care and community.",
    tags: ["Healthcare", "Web"],
    href: "https://www.pinecrestoflakegeneva.com/",
    tone: "teal",
  },
  {
    id: "falling-rock",
    title: "Falling Rock Café & Bookstore",
    where: "Munising, MI · Retail",
    summary:
      "Website for a café, bookstore and gallery in Michigan’s Upper Peninsula, with the menu, events and storefront in one place.",
    tags: ["Retail", "Events", "Web"],
    tone: "orange",
  },
];

export const studioApps = {
  title: "Orange Cat Media apps",
  status: "In development · 2026",
  summary:
    "Our own apps, designed, built and published under the Orange Cat Media name. First releases are headed to the App Store, built on the same stack we use for clients.",
  tags: ["iPhone", "iPad", "React Native"],
};
