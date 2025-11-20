// Define the categories for FAQs
export type FaqCategory = "all" | "templates" | "components" | "licensing" | "support";

// Define the structure for FAQ items
export interface FaqItem {
  question: string;
  answer: string;
  category: Exclude<FaqCategory, "all">;
}

// Define the FAQ data
export const faqData: FaqItem[] = [
  {
    question: "How do I download the templates after purchase?",
    answer: "After completing your purchase, you'll receive an email with download instructions. You can also access your purchases through your account dashboard where you'll find download links for all your purchased templates and components.",
    category: "templates"
  },
  {
    question: "Are updates included in the price?",
    answer: "Yes! All our packages include updates for the specified period in the plan details. Templates & Components plan includes 1 year of updates, while the Commercial License includes lifetime updates.",
    category: "licensing"
  },
  {
    question: "Can I use the templates for client projects?",
    answer: "Yes, with our Templates & Components plan or Commercial License, you can use the templates for client projects. The basic Components plan is restricted to personal projects only.",
    category: "licensing"
  },
  {
    question: "Are the components compatible with my framework?",
    answer: "Our components are primarily built for React and Next.js applications. We provide TypeScript support out of the box, and the components can be easily adapted to work with other React-based frameworks.",
    category: "components"
  },
  {
    question: "Is there technical support available if I need help?",
    answer: "Yes! We offer email support for all paid plans. The response time varies depending on your plan, with Commercial License holders receiving priority support. We also have extensive documentation and a community forum for common questions.",
    category: "support"
  },
  {
    question: "Can I request custom modifications to the templates?",
    answer: "Yes, custom modifications are available for an additional fee. Please contact our support team with your requirements, and we'll provide a quote based on the complexity of the requested changes.",
    category: "templates"
  },
  {
    question: "What does the Commercial License allow me to do?",
    answer: "The Commercial License allows you to use our templates and components in products that you sell to customers. This includes SaaS applications, themes, templates, or any other product where the UI is part of what you're selling. You also get white-labeling rights to remove our branding.",
    category: "licensing"
  },
  {
    question: "Do the templates work on mobile devices?",
    answer: "Yes, all our templates are fully responsive and work seamlessly on mobile, tablet, and desktop devices. We thoroughly test each template on multiple screen sizes to ensure a great user experience across all devices.",
    category: "templates"
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee for all our plans. If you're not satisfied with our products, simply contact our support team within 30 days of purchase for a full refund.",
    category: "support"
  },
  {
    question: "How do I import the components into my project?",
    answer: "Our components can be easily imported using standard import statements in your JavaScript or TypeScript files. We provide detailed documentation with examples for each component to help you get started quickly.",
    category: "components"
  },
];
