"use client";

import { IconCheck, IconBadgeCc } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PricingPlan, FeatureCategory } from "./types";
import { Testimonial } from "./types";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { useState } from "react";
import { ComingSoonModal } from "@/components/ui/ComingSoonModal";

interface PlanCardProps {
  plan: PricingPlan;
  index: number;
  testimonials: Testimonial[];
  selectedCategory: FeatureCategory | null;
}

export function PlanCard({
  plan,
  testimonials,
  selectedCategory,
}: PlanCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Format price with appropriate decimal places
  const formatPrice = (price: number) => {
    return price % 1 === 0 ? price : price.toFixed(2);
  };

  // Filter features by selected category
  const getFilteredFeatures = () => {
    if (!selectedCategory) return plan.features;
    return plan.features.filter(
      (feature) => feature.category === selectedCategory
    );
  };

  const handlePurchaseClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        key={plan.name}
        className={cn(
          "relative flex flex-col rounded-2xl rounded-t-0 group bg-white dark:bg-neutral-900 mx-auto  w-full",
          "border border-neutral-200 dark:border-neutral-700",
          "hover:shadow-lg transition-shadow duration-300"
        )}
      >
        {/* Plan accent color bar with integrated badge */}
        <div
          className={
            "h-5 w-full overflow-hidden absolute top-0 left-0 rounded-t-2xl"
          }
        >
          <div
            className={cn(
              "min-h-1.5 w-[calc(100%-1px)] bg-gradient-to-r rounded-t-2xl",
              plan.featured
                ? "from-neutral-400 to-neutral-700 dark:from-neutral-400 dark:to-white"
                : "from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-600"
            )}
          />
        </div>

        <div
          className={cn(
            "p-5 sm:p-6 md:p-8 flex flex-col flex-grow relative",
            plan.featured ? "z-10" : ""
          )}
        >
          {/* Plan name and description */}
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center">
            {plan.name}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 mb-4 sm:mb-6">
            {plan.description}
          </p>
          {/* One-time Price */}
          <div className="mb-2 sm:mb-2">
            <div className="flex items-end">
              <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                ${formatPrice(plan.price)}
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 mb-1 ml-2">
                one-time
              </span>
            </div>
          </div>
          {/* Social proof - updated to use AnimatedTooltip */}
          <div className="mt-3 flex gap-3 flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
            <div className="flex mr-4">
              <AnimatedTooltip
                items={testimonials.slice(
                  0,
                  plan.name === "Components"
                    ? 1
                    : plan.name === "Templates & Components"
                    ? 3
                    : testimonials.length
                )}
              />
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Used by {plan.companies} designers
            </span>
          </div>

          {/* Features list with increased spacing */}
          <div className="flex-grow  mb-6 sm:mb-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 sm:mb-4">
              {`What's included:`}
            </h4>
            <ul className="flex flex-col gap-2">
              {getFilteredFeatures().map((feature, idx) => (
                <li
                  key={`${plan.name}-feature-${idx}`}
                  className={cn(
                    "flex items-start",
                    feature.highlighted ? "relative" : ""
                  )}
                >
                  <div
                    className={cn(
                      "flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full flex items-center justify-center",
                      plan.featured
                        ? "text-neutral-800 dark:text-neutral-200"
                        : "text-neutral-700 dark:text-neutral-300"
                    )}
                  >
                    <IconCheck className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>

                  <span
                    className={cn(
                      "text-xs sm:text-sm ml-2",
                      feature.highlighted
                        ? "text-neutral-800 dark:text-neutral-200 font-medium"
                        : "text-neutral-600 dark:text-neutral-400"
                    )}
                  >
                    {feature.text}

                    {/* Feature tooltips */}
                    {feature.tooltip && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span
                              className="inline-block ml-1 cursor-help"
                              role="button"
                              aria-label={`More information about ${feature.text}`}
                            >
                              <IconBadgeCc className="inline h-2.5 w-2.5 sm:h-3 sm:w-3 text-neutral-400 dark:text-neutral-500" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs max-w-xs">
                              {feature.tooltip}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button with enhanced styling - Updated with onClick handler */}
          <Button
            variant={plan.featured ? "default" : "outline"}
            size="lg"
            className={cn(
              "w-full transition-all duration-300 group-hover:scale-[1.02] text-xs sm:text-sm font-medium",
              plan.featured
                ? "bg-gradient-to-r from-neutral-800 to-black hover:from-black hover:to-neutral-800 dark:from-white dark:to-neutral-300 dark:hover:from-neutral-300 dark:hover:to-white text-white dark:text-black border-0"
                : "border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
            )}
            onClick={handlePurchaseClick}
            aria-label={`Purchase ${plan.name} plan for $${formatPrice(
              plan.price
            )}`}
          >
            {plan.cta}
          </Button>

          {/* License note */}
          <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-center text-neutral-500 dark:text-neutral-400">
            {plan.name === "Components" && "For personal projects only"}
            {plan.name === "Templates & Components" &&
              "For personal & client projects"}
            {plan.name === "Commercial License" &&
              "For commercial redistribution"}
          </p>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Coming Soon"
        description={`${plan.name} package will be available soon! Contact us to get notified when it's ready or for custom pricing options.`}
        ctaText="Contact Us Now"
        contactFormId="contact"
        ariaLabels={{
          closeButton: "Close coming soon notification",
          contactButton: "Go to contact form",
        }}
      />
    </>
  );
}
