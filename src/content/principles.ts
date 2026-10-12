export type Principle = {
  id: string;
  number: string;
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    id: "scoped",
    number: "01",
    title: "Scoped like a product",
    body: "Every project starts with the problem, not a feature list. We map the people, the data, and the riskiest assumptions first, so the first build is the right one.",
  },
  {
    id: "shipped",
    number: "02",
    title: "Built to ship",
    body: "Typed end to end, tested where it matters, and deployed from week one. You see working software early and often — never a big reveal at the end.",
  },
  {
    id: "supported",
    number: "03",
    title: "Looked after",
    body: "OS updates, store reviews, monitoring, and new features. We stay on after launch so the product keeps working as your business changes.",
  },
];
