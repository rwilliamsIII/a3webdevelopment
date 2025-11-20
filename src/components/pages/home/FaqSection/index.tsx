"use client";


import { motion } from "motion/react";
import { Button } from "@/components/ui/button";


 
export default function FaqSection() {



    return (
        <section id="faq" 
        className="relative z-10 overflow-hidden flex flex-col items-center justify-center w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 mx-auto  bg-gray-50/60 dark:bg-neutral-950/50">
            
            
            {/* Section content */}
            <div className="relative z-10 container mx-auto max-w-4xl">
                
                {/* Contact section - subtler animation */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mt-10 sm:mt-16 p-4 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 text-center bg-white/50 dark:bg-neutral-800/50"
                >
                    <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                        We`d Love To Hear From You!
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6">
                        {` For a free quote or consultation, we're here to help! Reach out to us and let's discuss how we can support your business goals.`}
                    </p>
                    <Button variant="default" className="w-full sm:w-auto"  >
                        <a href="https://www.a3marketing.com/contact-us">Contact Us</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
