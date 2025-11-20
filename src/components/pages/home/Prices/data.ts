import { PricingPlan, Testimonial } from './types';

// Testimonials for social proof
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Johnson",
    designation: "Frontend Developer",
    image: "/assets/images/avatar/1.webp",
  }, 
  {
    id: 2,
    name: "Michael Chen",
    designation: "UI/UX Designer",
    image: "/assets/images/avatar/2.webp",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "Creative Director",
    image: "/assets/images/avatar/3.webp",
  },
  {
    id: 4,
    name: "David Smith",
    designation: "Product Manager",
    image: "/assets/images/avatar/4.webp",
  },
  {
    id: 5,
    name: "Jessica Lee",
    designation: "Software Engineer",
    image: "/assets/images/avatar/5.webp",
  },
  {
    id: 6,
    name: "Daniel Kim",
    designation: "Data Scientist",
    image: "/assets/images/avatar/6.webp",
  },
];

// Define pricing plans with categorized features
export const plans: PricingPlan[] = [
    {
        name: "Components",
        description: "Access to our premium UI components library",
        price: 49,
        features: [
            { text: "80+ UI Components", category: "Core", tooltip: "Access to our essential UI component library" },
            { text: "Responsive Designs", category: "Core" },
            { text: "Dark/Light Modes", category: "Core" },
            { text: "Component Documentation", category: "Support" },
            { text: "Community Support", category: "Support" },
            { text: "Personal Projects Only", category: "License" },
            { text: "6 Months Updates", category: "Support" },
        ],
        featured: false,
        cta: "Purchase Components",
        badge: null,
        accentColor: "from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900",
        companies: "950+",
    },
    {
        name: "Templates & Components",
        description: "Complete collection of templates and components",
        price: 129,
        features: [
            { text: "Everything in Components", category: "Core", highlighted: true },
            { text: "20+ Premium Templates", category: "Core", highlighted: true },
            { text: "Advanced Theme Customization", category: "Customization" },
            { text: "Priority Email Support", category: "Support", highlighted: true },
            { text: "One-click Template Installation", category: "Core" },
            { text: "Personal & Client Projects", category: "License", tooltip: "Use in projects for yourself and your clients" },
            { text: "Remove Attribution", category: "License" },
            { text: "1 Year of Updates", category: "Support", highlighted: true },
        ],
        featured: true,
        cta: "Get Complete Package",
        badge: "Best Value",
        accentColor: "from-blue-500 to-violet-500 dark:from-blue-600 dark:to-violet-600",
        companies: "5,000+",
    },
    {
        name: "Commercial License",
        description: "For companies and commercial products",
        price: 349,
        features: [
            { text: "All Templates & Components", category: "Core", highlighted: true },
            { text: "Commercial Product Usage", category: "License", highlighted: true, tooltip: "Include in products you sell to customers" },
            { text: "White-labeling", category: "License", tooltip: "Remove all Aniq-UI branding and add your own" },
            { text: "Extended Documentation", category: "Support" },
            { text: "Premium Email Support", category: "Support", highlighted: true },
            { text: "Unlimited Projects", category: "License", highlighted: true },
            { text: "Source Files Included", category: "Core", highlighted: true },
            { text: "Lifetime Updates", category: "Support", highlighted: true },
        ],
        featured: false,
        cta: "Purchase Commercial",
        badge: "Unlimited",
        accentColor: "from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600",
        companies: "350+",
    }
];
