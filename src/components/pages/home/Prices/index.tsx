"use client";

import { useState, useEffect } from "react";
// import { motion } from "motion/react";
// import { Button } from "@/components/ui/button";
import { GridBg } from "@/components/ui/GridBg";
// import { FeatureCategory } from "./types";
import { testimonials } from "./data";
// import { PlanCard } from "./PlanCard";
// import { FeatureFilter } from "./FeatureFilter";
import { TestimonialsSection } from "./TestimonialsSection";
 
export default function PricesSection() {
    // const [selectedCategory, setSelectedCategory] = useState<FeatureCategory | null>(null);
    const [, setScrollPosition] = useState(0);

    // Listen for scroll position to trigger header styling
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Get all unique categories from features
    // const allCategories = Array.from(
    //     new Set(
    //         plans.flatMap(plan =>
    //             plan.features.map(feature => feature.category)
    //         )
    //     )
    // ) as FeatureCategory[];

    return (
        <section className="relative z-10 overflow-hidden flex flex-col items-center justify-center w-full py-6 sm:py-10 md:py-15 px-4 sm:px-6 md:px-10 mx-auto dark:bg-neutral-900/50  ">
            
                <GridBg
                            pattern_type="grid"
                            pattern_size={90}
                            mask_size={2000}
                            opacity={0.6}
                            top="-1px"
                        />
 
            {/* Section content */}
            {/* <div className="relative z-10 container mx-auto max-w-6xl"> */}
                {/* Header */}
                {/* <div className="mb-8 sm:mb-12 md:mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    > */}
                        {/* <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full inline-block mb-4">
                            One-time Purchase
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3 md:mb-4 tracking-tight">
                            Simple <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-black dark:from-neutral-200 dark:to-white">Pricing</span> Options
                        </h2>
                        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Choose the perfect package for your project. Pay once and get immediate access to our premium UI resources.
                        </p> */}
                    {/* </motion.div> */}

                    {/* Feature filter */}
                    {/* <FeatureFilter
                        allCategories={allCategories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    /> */}
                {/* </div> */}

                {/* Pricing grid */}
                {/* <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-5 md:grid-cols-2  lg:grid-cols-3 mx-auto">
                    {plans.map((plan, index) => (
                        <PlanCard
                            key={plan.name}
                            plan={plan}
                            index={index}
                            testimonials={testimonials}
                            selectedCategory={selectedCategory}
                        />
                    ))}
                </div> */}

                {/* Testimonials section */}
                <TestimonialsSection testimonials={testimonials} />

                {/* FAQ link and support info */}
                {/* <div className="mt-10 sm:mt-16 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
                    <div>
                        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                            Need more information?
                        </h4>
                        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                            Check our <a href="#faq" className="text-blue-600 dark:text-blue-400 hover:underline">licensing FAQ</a> or contact our team for custom requirements.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        className="border-neutral-300 dark:border-neutral-700 w-full sm:w-auto mt-4 md:mt-0"
                        href="#contact"
                     >
                        Contact Us
                    </Button>
                </div> */}
            {/* </div> */}
        </section>
    );
}
