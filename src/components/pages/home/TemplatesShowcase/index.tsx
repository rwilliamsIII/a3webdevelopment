"use client";
import React, { useRef, useState } from "react";
import TemplateCard from "./TemplateCard";
import { defaultTemplates } from "./data";
import { Button } from "@/components/ui/button";
import { GridBg } from "@/components/ui/GridBg";

export default function TemplatesShowcase({ templates = [] }) {
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(4);

  // Use provided templates or fall back to default
  const displayTemplates =
    templates.length > 0
      ? templates.slice(0, visibleCount)
      : defaultTemplates.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + 4, templates.length || defaultTemplates.length)
    );
  };

  return (
    <section
      ref={sectionRef} id="view-our-work"
      className="relative overflow-hidden max-w-[1440px] mx-auto py-10 sm:py-14 md:py-20 px-2 xs:px-4 sm:px-6 md:px-10 bg-white dark:bg-neutral-950   dark:border-neutral-900  "
    >
      <GridBg
        pattern_type="grid"
        pattern_size={90}
        mask_size={1000}
        opacity={0.6}
        top="-1px"
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 sm:mb-14">
          <div className="mb-4 md:mb-0 w-full md:w-auto">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-3 text-[var(--foreground)]">
              View Our Work
            </h2>
            <div className="h-[2px] w-16 sm:w-20 md:w-24 border-b border-dashed border-gray-300 dark:border-gray-700 mt-1 md:mt-2" />
          </div>
          <div className="w-full md:text-right md:max-w-md mt-2 md:mt-0">
            <p className="text-sm xs:text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Our work speaks for itself. From small businesses to e-commerce platforms, we design clean, functional websites tailored to each client`s goals. Explore our portfolio to see how A3 Web Development turns ideas into powerful digital experiences.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8">
          {displayTemplates.map((template, index) => (
            <TemplateCard key={template.id} {...template} index={index} />
          ))}
        </div>

        {/* Load more button if needed */}
        {visibleCount < (templates.length || defaultTemplates.length) && (
          <div className="text-center mt-6 md:mt-8">
            <Button
              variant="default"
              size="default"
              className="w-full xs:w-auto max-w-xs"
              onClick={loadMore}
            >
              Load More Templates
            </Button>
          </div>
        )}

        {/* See All Templates Link */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          {/* <Button
            variant="outline"
            size="default"
            className="w-full xs:w-auto max-w-xs"
          >
            Browse All Templates
          </Button> */}
        </div>
      </div>
    </section>
  );
}
