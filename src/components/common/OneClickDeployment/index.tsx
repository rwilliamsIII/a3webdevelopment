"use client";

import { useEffect, useRef, useState } from "react";
import { DeploymentStage, pipelineStages } from "./types";
import Terminal from "./components/Terminal";
import DeploymentProgress from "./components/DeploymentProgress";
import SuccessEffects from "./components/SuccessEffects";

export function OneClickDeployment() {
  const [stage, setStage] = useState<DeploymentStage>("preparing");
  const [showSuccessEffects, setShowSuccessEffects] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [deploymentCount, setDeploymentCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoAnimationRef = useRef<NodeJS.Timeout | null>(null);

  // Detect when component comes into view
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

  // Orchestrate the automatic demo when visible
  useEffect(() => {
    if (isVisible) {
      runDeploymentDemo();
    }

    return () => {
      if (autoAnimationRef.current) {
        clearTimeout(autoAnimationRef.current);
      }
    };
  }, [isVisible, deploymentCount]);

  // Progress timing and sequence for each stage
  const runDeploymentDemo = () => {
    setStage("preparing");
    setShowSuccessEffects(false);

    let cumulativeTime = 0;

    // Sequentially run through stages
    pipelineStages.forEach((stageConfig) => {
      // Set stage change timeout
      autoAnimationRef.current = setTimeout(() => {
        setStage(stageConfig.id as DeploymentStage);

        // Show success effects when reaching the final stage
        if (stageConfig.id === "success") {
          setShowSuccessEffects(true);

          // Reset after showcasing success
          autoAnimationRef.current = setTimeout(() => {
            setStage("reset");

            // Start a new deployment cycle after reset
            autoAnimationRef.current = setTimeout(() => {
              setDeploymentCount(prev => prev + 1);
            }, 50);

          }, stageConfig.duration);
        }
      }, cumulativeTime);

      cumulativeTime += stageConfig.duration;
    });
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-full overflow-hidden"
    >
      <div className="flex items-center mb-2 sm:mb-3">
        <div className="p-1 bg-neutral-200 dark:bg-neutral-700 rounded-lg mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-neutral-600 dark:text-[var(--foreground)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
          </svg>
        </div>
        <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-[var(--foreground)]">Deployment Pipeline</h3>
      </div>

      <Terminal stage={stage} deploymentCount={deploymentCount} />

      {/* Deployment progress visualization */}
      <div className="flex-1 flex flex-col pt-2 sm:pt-4">
        <DeploymentProgress stage={stage} />
      </div>

      <SuccessEffects showSuccessEffects={showSuccessEffects} />

      {/* Footer */}
      <div className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] text-neutral-500 flex items-center justify-between">
        <span>CI/CD Pipeline</span>
        <span className="text-neutral-500 dark:text-neutral-400">Automated Deployment</span>
      </div>
    </div>
  );
}
