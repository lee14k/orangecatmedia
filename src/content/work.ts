export type Work = {
  id: string;
  title: string;
  year?: string;
  tags: string[];
  summary: string;
  href?: string;
  featured?: boolean;
  status?: string;
  kind: "client" | "studio";
};

export const work: Work[] = [
  {
    id: "studio-apps",
    title: "Orange Cat Media apps",
    year: "2026–",
    tags: ["iPhone", "iPad", "React Native"],
    summary:
      "Our own apps, designed, built, and published under the Orange Cat Media name. First releases are in development for the App Store.",
    status: "In development",
    kind: "studio",
  },
  {
    id: "reservation-platforms",
    title: "Hospitality reservation platforms",
    year: "2022–24",
    tags: ["Next.js", "React", "Node", "C#", "Prisma", "PostgreSQL", "AWS"],
    summary:
      "Fullstack booking and reservation systems, architected and deployed on AWS, generating $130K+ in combined annual revenue for hospitality clients.",
    featured: true,
    kind: "client",
  },
  {
    id: "wisconsin-vintners",
    title: "Wisconsin Vintners Association",
    tags: ["Membership", "Events", "Web"],
    summary:
      "Membership site for a Wisconsin winemaking association, with member login, join and renewal, events, and a photo gallery.",
    href: "https://www.wihomewinemakers.com/",
    kind: "client",
  },
  {
    id: "pinecrest",
    title: "Pinecrest of Lake Geneva",
    tags: ["Healthcare", "Web"],
    summary:
      "Website for a state-licensed assisted living community in Lake Geneva, Wisconsin, introducing families to its care and community.",
    href: "https://www.pinecrestoflakegeneva.com/",
    kind: "client",
  },
  {
    id: "falling-rock",
    title: "Falling Rock Café & Bookstore",
    tags: ["Retail", "Events", "Web"],
    summary:
      "Website for a café, bookstore, and gallery in Munising, Michigan, with the menu, events, and storefront in one place.",
    kind: "client",
  },
];
