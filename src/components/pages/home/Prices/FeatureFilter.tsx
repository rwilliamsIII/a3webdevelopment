"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FeatureCategory } from "./types";
import { Tabs, TabItem } from "@/components/ui/Tabs";

interface FeatureFilterProps {
  allCategories: FeatureCategory[];
  selectedCategory: FeatureCategory | null;
  setSelectedCategory: (category: FeatureCategory | null) => void;
}

export function FeatureFilter({ 
  allCategories,
  selectedCategory,
  setSelectedCategory
}: FeatureFilterProps) {
  const [showCategories, setShowCategories] = useState(false);
  
  // Fixed: Use the correct generic type notation for TabItem
  const tabItems: TabItem[] = [
    { id: "null", label: "All Features" },
    ...allCategories.map(category => ({
      id: category,
      label: category
    }))
  ];
  
  // Handler to convert between TabItem value and FeatureCategory
  const handleValueChange = (value: string) => {
    setSelectedCategory(value === "null" ? null : value as FeatureCategory);
  };
  
  return (
    <motion.div 
      className="mt-8 flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Tabs
        items={tabItems}
        value={selectedCategory === null ? "null" : selectedCategory}
        onValueChange={handleValueChange}
        showToggleButton={true}
        toggleButtonText={{
          show: "Filter features by category",
          hide: "Hide feature categories"
        }}
        isToggled={showCategories}
        onToggle={() => setShowCategories(!showCategories)}
        animate={true}
        className="mb-6"
      />
    </motion.div>
  );
}
