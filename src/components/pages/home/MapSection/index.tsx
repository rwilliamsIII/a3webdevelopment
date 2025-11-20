"use client";

import dynamic from "next/dynamic";
import { points } from "./points";
import ContactForm from "./ContactForm";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { useState, useRef, useEffect } from "react";

// Defer map loading until viewport is reached
const WorldMap = dynamic(() => import("@/components/ui/WorldMap"));

export default function MapSection() {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if mobile on initial render
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-12 sm:py-16 md:py-24 relative w-full px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Background Map - ONLY for mobile */}
      {isMobile && (
        <div className="absolute inset-0 z-0">
          <WorldMap
            points={points}
            pointColor="var(--accent-1)"
            coverMode={true}
            className="rounded-none"
          />
        </div>
      )}

      <div className="relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Global User Community
          </h2>
          <p
            className="text-sm sm:text-base max-w-2xl mx-auto"
            style={{ color: "var(--accent-3)" }}
          >
            Join thousands of developers worldwide who trust Publino for their
            projects. Our templates are being used across the globe to create
            stunning web experiences.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-20 w-full">
          {/* On mobile: Contact Form above Map */}
          {isMobile && (
            <div className="mb-10 flex justify-center">
              <ContactForm />
            </div>
          )}

          {/* Map container - ONLY on desktop */}
          <div className={`relative ${isMobile ? "h-[10px]" : "h-[500px]"}`}>
            {/* Regular Map - ONLY for desktop */}
            {!isMobile && (
              <WorldMap points={points} pointColor="var(--accent-1)" />
            )}

            {/* Floating Contact Form - only on desktop/tablet */}
            {!isMobile && (
              <div className="hidden md:flex justify-center absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 items-center z-20">
                <ContactForm />
              </div>
            )}

            {/* Text effect - adjust dimensions based on screen and enable automatic only on mobile */}

            <TextHoverEffect
              text="Publino"
              automatic={isMobile}
              className={`absolute w-full ${
                isMobile ? "h-[150px]" : "h-[250px]"
              } translate-y-[55%] bottom-0`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
