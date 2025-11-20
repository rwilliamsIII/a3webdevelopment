"use client";

import { ShineBorder } from "@/components/common/ShineBorder";
import { LighthouseMetrics } from "@/components/common/LighthouseMetrics";
import { FileTree } from "@/components/common/FileTree";
import { GlobalDeployments } from "@/components/common/GlobalDeployments";
import { OneClickDeployment } from "@/components/common/OneClickDeployment";
import { ReactNode, useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import ScalableEnvironments to avoid recharts in initial JS bundle
const ScalableEnvironments = dynamic(
  () => import("@/components/common/ScalableEnvironments").then(mod => mod.ScalableEnvironments),
  { 
    ssr: false, 
    loading: () => (
      <div className="h-[180px] flex items-center justify-center border border-neutral-200 dark:border-neutral-700/50 rounded-lg bg-white/90 dark:bg-neutral-800/50 p-3">
        <div className="text-xs text-neutral-400 animate-pulse">Loading visualization...</div>
      </div>
    )
  }
);

// Define the feature interface
interface Feature {
    title: string;
    description: string;
    icon?: ReactNode;
    size: string;
    customComponent?: ReactNode;
}

// Combined features array with size information and LighthouseMetrics
const features: Feature[] = [
    {
        title: "Performance Metrics",
        description: "See how your site performs with our built-in performance analysis tools.",
        size: "col-span-1 md:col-span-3 md:row-span-3",
        customComponent: <LighthouseMetrics />
    },
    {
        title: "One-Click Deployment",
        description: "Roll out updates or entire projects with just a single click. Build, deploy, and go live in seconds.",
        size: "col-span-1 md:col-span-1 row-span-1 md:row-span-3",
        customComponent: <OneClickDeployment />
    },
    {
        title: "File Structure",
        description: "Organize your project with our recommended file structure for optimal maintainability.",
        size: "col-span-1 row-span-2",
        customComponent: <FileTree />
    },
    {
        title: "Scalable Environments",
        description: "Automatically scale your application as traffic and usage increases, ensuring optimal performance at all times.",
        size: "col-span-1 row-span-2",
        customComponent: <ScalableEnvironments />
    },
    {
        title: "Global Deployments",
        description: "Deploy your applications to data centers worldwide for optimal performance and reliability.",
        size: "col-span-1 md:col-span-2 row-span-2",
        customComponent: <GlobalDeployments />
    },
];

export default function HomeSection3() {
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setHasBeenVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Trigger when at least 10% of the element is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    if (!hasBeenVisible) {
        // Return an empty placeholder with the same dimensions
        return (
            <section 
                ref={sectionRef}
                className="relative z-10 flex flex-col items-center justify-center w-full p-6 sm:p-10 md:p-20 px-2 sm:px-6 md:px-10 mx-auto mt-[-100px] sm:mt-[-150px] md:mt-[-190px] border-[1px] dark:bg-black border-neutral-100 dark:border-neutral-900 rounded-lg min-h-[300px]"
            />
        );
    }

    return (
        <section 
            ref={sectionRef}
            className="relative z-10 flex flex-col items-center justify-center w-full p-6 sm:p-10 md:p-20 px-2 sm:px-6 md:px-10 mx-auto   border-[1px] dark:bg-black border-neutral-100 dark:border-neutral-900"
            aria-label="Platform features"
        >
            <div className="container px-2 sm:px-4 mx-auto">
                <div className="mb-8 sm:mb-12 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-2 sm:mb-3">Powerful Features</h2>
                    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Discover the tools that make our platform stand out from the competition
                    </p>
                </div>

                <div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-min min-[400px]:auto-rows-[minmax(100px,auto)]"
                    role="list"
                    aria-label="Platform feature list"
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`mb-2 ${feature.size} bg-neutral-100 dark:bg-neutral-900 relative rounded-xl p-4 sm:p-6 flex flex-col`}
                            role="listitem"
                            aria-labelledby={`feature-title-${index}`}
                        >
                            <ShineBorder shineColor="var(--shineBorder)" />
                            {feature.customComponent ? (
                                <>
                                    <h3 
                                        id={`feature-title-${index}`} 
                                        className="sr-only"
                                    >
                                        {feature.title}
                                    </h3>
                                    {feature.customComponent}
                                </>
                            ) : (
                                <>
                                    <div className="p-2 sm:p-3 bg-neutral-700 rounded-lg inline-block mb-3 sm:mb-4" aria-hidden="true">
                                        <div className="text-blue-400">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h3 
                                        id={`feature-title-${index}`}
                                        className="text-lg sm:text-xl font-semibold text-[var(--foreground)] mb-1 sm:mb-2"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-400 text-sm sm:text-base">{feature.description}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
