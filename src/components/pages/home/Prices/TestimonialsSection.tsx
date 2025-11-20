"use client";

import { motion } from "motion/react";
// import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { Testimonial } from "./types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  // testimonials,
}: TestimonialsSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-2 sm:mt-16 md:mt-6 p-4 sm:p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50"
    >
      <div className="flex flex-col items-center text-center mb-6 md:mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2 md:mb-3">
          Trusted by Hundreds of Clients
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Join the growing number of businesses partnering with A3 Web Development to create fast, modern, and responsive websites that elevate their online presence.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-center">
        {/* Testimonial */}
        <div className="flex-1 w-full p-4 sm:p-6 flex flex-col justify-center bg-neutral-50 dark:bg-neutral-800/50 rounded-xl">
          <div className="flex items-center flex-col sm:flex-row sm:items-center mb-4">
            {/* <div className="flex -space-x-2 mb-3 sm:mb-0 mr-0 sm:mr-4 w-10">
              <AnimatedTooltip items={testimonials.slice(0, 1)} />
            </div> */}
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-neutral-900 dark:text-white">
                Regina Moore
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Hertz Asphalt and Concrete Services
              </p>
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm italic">
            {`"A3 Web Development transformed our outdated website into a sleek, modern platform that truly represents our brand. Their attention to detail and commitment to quality is unmatched."`}
          </p>
        </div>

        {/* Companies & stats */}
        <div className="flex-1 w-full grid grid-cols-2 gap-3 sm:gap-6">
          <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 sm:p-5 text-center">
            <h4 className="text-2xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
              10,000+
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Hours of Development
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 sm:p-5 text-center">
            <h4 className="text-2xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
              98%
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Satisfaction
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 sm:p-5 text-center">
            <h4 className="text-2xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
              200+
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Successful Deployments
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 sm:p-5 text-center">
            <h4 className="text-2xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
              24/7
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Support
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
