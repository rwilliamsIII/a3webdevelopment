"use client";
import React, { useRef } from "react";
import { motion } from "motion/react";
import { BenefitCard } from "./BenefitCard";
import { benefits } from "./data";
import { Button } from "@/components/ui/button";
import { GridBg } from "@/components/ui/GridBg";

// Modern grid container for cards with staggered animation
const CardGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="relative z-10">
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 xs:gap-6 sm:gap-8">
      {children}
    </div>
  </div>
);

export default function Benefits() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef} id="our-services"
      className="py-16 sm:py-20 md:py-28 mt-[-550px] sm:mt-[-200px] px-4 xs:px-6 sm:px-10 md:px-16 relative bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-black border-t border-neutral-100 dark:border-neutral-900 overflow-hidden"
    >
      <GridBg
        pattern_type="grid"
        pattern_size={90}
        mask_size={1200}
        opacity={0.05}
        top="-1px"
      />

      {/* Additional subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-neutral-100/50 to-transparent dark:from-neutral-900/30 dark:to-transparent" />
      <div className="absolute -left-10 top-40 w-40 h-40 rounded-full bg-neutral-200/40 dark:bg-neutral-800/20 blur-3xl" />
      <div className="absolute -right-20 top-60 w-60 h-60 rounded-full bg-neutral-200/30 dark:bg-neutral-800/10 blur-3xl" />

      {/* Section header with animations */}
      <div className="text-center mb-14 sm:mb-20 relative z-10">
        <span 
          className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full inline-block mb-4 sm:mb-6 shadow-sm"
        >
          Why Choose Us
        </span>

        <h2
          
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-4 sm:mb-6 tracking-tight"
        >
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-black dark:from-neutral-200 dark:to-white">
            A3 Marketing?
          </span>
          ?
        </h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm xs:text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
        >
         Because we combine proven strategies with personalized service to help your business grow.
        </motion.p>
      </div>

      {/* Card grid with staggered animations */}
      <div className="container mx-auto px-0 xs:px-2">
        <div className="w-full relative">
          <CardGrid>
            {benefits &&
              benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.1,
                  }}
                >
                  <BenefitCard benefit={benefit} />
                </motion.div>
              ))}
          </CardGrid>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-10 sm:mt-14 ">
          <Button
            variant="default"
            size="lg"
            className="w-full sm:w-auto max-w-xs"
          >
            View Our Work
          </Button>
          {/* <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto max-w-xs"
          >
            Request a Custom Component
          </Button> */}
        </div>
      </div>
    </section>
  );
}
