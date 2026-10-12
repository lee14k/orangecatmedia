export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What kinds of projects do you take on?",
    answer:
      "Mobile apps, web platforms, and the backends behind them — usually for small and mid-sized businesses that need dependable software without building an in-house team. If you’re not sure your idea fits, ask anyway.",
  },
  {
    question: "Do you publish your own apps?",
    answer:
      "Yes. Alongside client work, we’re developing our own apps, which will be published on the App Store under the Orange Cat Media name.",
  },
  {
    question: "Can you take over an existing codebase?",
    answer:
      "Often, yes. We start with a short audit — architecture, dependencies, deploys, and the riskiest areas — and give you a clear plan before changing anything.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. A focused website can take a few weeks; apps and platforms are planned in phases, with something usable shipped early.",
  },
  {
    question: "How is pricing handled?",
    answer:
      "Pricing depends on scope. We quote each project up front — in phases for larger builds — so you know what you’re paying for before work starts.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, OS and dependency updates, store resubmissions, and new features to keep your product running smoothly.",
  },
];
