"use client";

import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/LampContainer";
import { RetroGrid } from "@/components/ui/RetroGrid";
import { useRef } from "react";
// import { Button } from "@/components/ui/button";
import Image from "next/image";

// Extract static content configuration to improve rendering
const features = [
    "Automatically adapts to any screen size",
    "Touch-friendly interactive elements",
    "Optimized for both portrait and landscape orientation"
];

export default function ResponsiveTemplatesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section ref={sectionRef} className="relative  ">
                <RetroGrid />

            <LampContainer className="p-0 sm:p-12 md:p-16 lg:p-24 border-0">
                <div className="mx-auto px-4 sm:px-6 md:px-8 relative z-50 flex flex-col md:flex-row items-center md:justify-between gap-8 sm:gap-10 md:gap-12 mt-2 sm:mt-3">
                    <div className="w-full md:w-1/2 max-w-md mx-auto">
                        {/* Replace img with Next.js Image component */}
                        <Image
                            src="/assets/images/responsiveDesign.png"
                            alt="Responsive design illustration"
                            className="w-full h-auto object-contain"
                            width={500}
                            height={350}
                            priority={false}
                            loading="lazy"
                            fetchPriority="low"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Text & CTA */}
                    <div className="w-full md:w-1/2 text-center md:text-left md:pl-4 lg:pl-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold py-2 text-neutral-900 dark:text-[var(--white)]">
                            Fully Responsive Designs
                        </h2>

                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "60px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="h-1 bg-neutral-400 dark:bg-gray-400 mt-2 sm:mt-3 mb-3 sm:mb-5 md:mb-6 mx-auto md:mx-0"
                            style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
                        />

                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
                            Our websites are meticulously crafted to deliver a stunning visual experience
                            across every device. From desktop screens to the smallest smartphones,
                            your content will shine with pixel-perfect precision.
                        </p>

                        {/* Feature points */}
                        <motion.ul
                            className="flex flex-col mt-4 sm:mt-6 gap-2 sm:gap-3 text-left max-w-md mx-auto md:mx-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center text-neutral-600 dark:text-gray-300"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                >
                                    <span className="flex items-center justify-center h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-neutral-200/50 dark:bg-gray-500/20 mr-2 sm:mr-3">
                                        <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-neutral-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-xs sm:text-sm">{feature}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                         {/* CTA Button */}
                        {/* <Button
                            variant="default"
                            size="default"
                            className="w-full sm:w-auto max-w-xs mt-5 sm:mt-8"
                        >
                            Explore Templates
                        </Button> */}
                    </div>
                </div>
            </LampContainer>
        </section>
    );
}
