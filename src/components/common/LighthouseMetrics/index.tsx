"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from "motion/react";

// Custom circle component with optimized rendering
const MetricCircle = ({ 
  value,
  color, 
  label, 
  delay 
}: { 
  value: number, 
  color: string, 
  label: string | undefined, 
  delay: number 
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28 mb-2">
        {/* Background circle */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="transform -rotate-90">
          <circle 
            cx="50" 
            cy="50" 
            r={radius} 
            fill="none" 
            stroke="var(--progress-inactive-bg)" 
            strokeWidth="8"
            className="opacity-20"
          />
          
          {/* Foreground progress circle with animate */}
          <motion.circle 
            cx="50" 
            cy="50" 
            r={radius} 
            fill="none" 
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ 
              duration: 1.5, 
              delay, 
              ease: "easeOut",
              willChange: "stroke-dashoffset"
            }}
            // style={{ 
            //   willChange: "stroke-dashoffset",
            //   transform: "translateZ(0)"
            // }}
          />
        </svg>
        
        {/* Text inside circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
          >
            {value}
          </motion.span>
        </div>
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export function LighthouseMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full bg-white dark:bg-neutral-900 rounded-xl p-4 relative overflow-hidden">
      <h3 className="text-sm font-medium mb-2">Website Performance Score</h3>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">Lighthouse metrics for this site</p>
      
      {isVisible && (
        <div className="flex flex-wrap justify-between items-center gap-2">
          <MetricCircle value={100} color="#4CAF50" label="Performance" delay={0} />
          <MetricCircle value={100} color="#2196F3" label="Accessibility" delay={0.2} />
          <MetricCircle value={100} color="#FFC107" label="Best Practices" delay={0.4} />
          <MetricCircle value={100} color="#673AB7" label="SEO" delay={0.6} />
        </div>
      )}
      
      {/* Subtle decorative element */}
      <motion.div 
        className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-10"
        style={{ 
          background: "radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 70%)",
          transform: "translate(30%, 30%)"
        }}
      />
    </div>
  );
}
