 
"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
// Only import motion component - no animation utilities
import { motion } from "framer-motion";

// Dynamically import the chart component with no SSR
const Chart = dynamic(
  () => import("./ChartComponent").then(mod => mod.ChartComponent),
  { 
    ssr: false,
    loading: () => (
      <div className="h-full w-full flex items-center justify-center text-xs text-neutral-400">
        Loading chart...
      </div>
    )
  }
);

// Sample data with traffic spikes
const generateInitialData = () => [
    { name: "00:00", cpu: 15, memory: 20, servers: 1 },
    { name: "04:00", cpu: 20, memory: 30, servers: 1 },
    { name: "08:00", cpu: 30, memory: 35, servers: 1 },
    { name: "12:00", cpu: 40, memory: 45, servers: 2 },
    { name: "16:00", cpu: 35, memory: 40, servers: 2 },
    { name: "20:00", cpu: 25, memory: 30, servers: 1 },
    { name: "24:00", cpu: 15, memory: 25, servers: 1 },
];

// Traffic spike scenarios
const scenarios = [
    {
        name: "Normal Traffic",
        data: generateInitialData(),
        message: "Systems Normal",
        serverCount: 2,
    },
    {
        name: "Traffic Spike",
        data: [
            { name: "00:00", cpu: 15, memory: 20, servers: 1 },
            { name: "04:00", cpu: 20, memory: 30, servers: 1 },
            { name: "08:00", cpu: 45, memory: 50, servers: 2 },
            { name: "12:00", cpu: 75, memory: 80, servers: 4 },
            { name: "16:00", cpu: 90, memory: 85, servers: 5 },
            { name: "20:00", cpu: 60, memory: 70, servers: 3 },
            { name: "24:00", cpu: 30, memory: 40, servers: 2 },
        ],
        message: "Auto-scaling Activated",
        serverCount: 5,
    },
    {
        name: "Scheduled Scale",
        data: [
            { name: "00:00", cpu: 20, memory: 25, servers: 1 },
            { name: "04:00", cpu: 25, memory: 30, servers: 1 },
            { name: "08:00", cpu: 60, memory: 55, servers: 3 },
            { name: "12:00", cpu: 65, memory: 60, servers: 3 },
            { name: "16:00", cpu: 70, memory: 65, servers: 3 },
            { name: "20:00", cpu: 40, memory: 45, servers: 2 },
            { name: "24:00", cpu: 20, memory: 30, servers: 1 },
        ],
        message: "Scheduled Scaling Active",
        serverCount: 3,
    }
];

export function ScalableEnvironments() {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [data, setData] = useState(scenarios[0].data);
    const [serverCount, setServerCount] = useState(scenarios[0].serverCount);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [cycleCount, setCycleCount] = useState(0);

    // Detect when component is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Cycle through scenarios when visible
    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            const nextScenario = (currentScenario + 1) % scenarios.length;
            setCurrentScenario(nextScenario);

            // Animate the server count change
            animateServerCount(scenarios[currentScenario].serverCount, scenarios[nextScenario].serverCount);

            // Update data with a slight delay for visual effect
            setTimeout(() => {
                setData(scenarios[nextScenario].data);
            }, 300);

            setCycleCount(prev => prev + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [isVisible, currentScenario, cycleCount]);

    // Animate server count changes
    const animateServerCount = (from: number, to: number) => {
        const duration = 1500; // ms
        const frameRate = 50; // ms
        const steps = duration / frameRate;
        const increment = (to - from) / steps;
        let current = from;
        let step = 0;

        const updateFrame = () => {
            if (step++ < steps) {
                current += increment;
                setServerCount(Math.round(current));
                requestAnimationFrame(updateFrame);
            } else {
                setServerCount(to);
            }
        };

        requestAnimationFrame(updateFrame);
    };

    return (
        <div ref={containerRef} className="flex flex-col h-full">
            <div className="flex items-center mb-2 sm:mb-3">
                <div className="p-1 bg-neutral-200 dark:bg-neutral-700 rounded-lg mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-neutral-600 dark:text-neutral-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125-1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-300">Resource Scaling</h3>
            </div>

            {/* Resource usage chart */}
            <div className="flex-1 bg-white/90 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700/50 p-2 sm:p-3">
                <div className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 mb-2 sm:mb-3">Resource Usage (24h)</div>
                <div className="h-[70px] sm:h-[100px]">
                    {/* Only render Chart when component is visible */}
                    {isVisible ? <Chart data={data} /> : (
                        <div className="h-full w-full flex items-center justify-center text-xs text-neutral-400">
                            Loading...
                        </div>
                    )}
                </div>
            </div>

            {/* Server scaling visualization */}
            <div className="mt-2 sm:mt-2 rounded-lg border border-neutral-200 dark:border-neutral-700/50 p-2 sm:p-3">
                <div className="mb-1 sm:mb-2 flex justify-between items-center">
                    <div className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400">Active Servers</div>
                    <div className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-300">{serverCount}</div>
                </div>

                <div className="flex items-end h-8 sm:h-10 gap-0.5 sm:gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className={`flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-xs border border-neutral-200 dark:border-neutral-700/50 relative overflow-hidden ${i < serverCount ? "shadow-xs" : ""
                                }`}
                            animate={{
                                height: i < serverCount ? '100%' : '30%',
                                opacity: i < serverCount ? 1 : 0.3
                            }}
                            transition={{ duration: 0.8 }}
                        >
                            {i < serverCount && (
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 bg-neutral-300/40 dark:bg-neutral-700/40"
                                    initial={{ height: '0%' }}
                                    animate={{ height: ['30%', '60%', '40%', '70%', '50%'] }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        duration: 9,
                                        delay: i * 0.8
                                    }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] text-neutral-500 flex items-center justify-between">
                <span>Auto-scaling Platform</span>
                <span className="text-neutral-600 dark:text-neutral-400">Handles Any Load</span>
            </div>
        </div>
    );
}
