// Define feature categories
export type FeatureCategory = "Core" | "Support" | "Customization" | "License";

// Define feature with category and tooltip
export type PlanFeature = {
  text: string;
  category: FeatureCategory;
  tooltip?: string;
  highlighted?: boolean;
};

// Define testimonial type
export type Testimonial = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

// Define pricing plan type (simplified for one-time purchase)
export type PricingPlan = {
  name: string;
  description: string;
  price: number;
  features: PlanFeature[];
  featured: boolean;
  cta: string;
  badge: string | null;
  accentColor: string;
  companies: string;
};
