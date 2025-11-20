"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { JSX } from "react";

export interface TabItem<T extends string = string> {
  id: T;
  label: string;
  count?: number;
}

interface TabsProps<T extends string = string> {
  items: TabItem<T>[];
  value: T;
  onValueChange: (value: T) => void;
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  inactiveTabClassName?: string;
  countClassName?: string;
  variant?: "pill" | "underline" | "minimal";
  size?: "sm" | "md" | "lg";
  animate?: boolean;
  showToggleButton?: boolean;
  toggleButtonText?: {
    show: string;
    hide: string;
  };
  isToggled?: boolean;
  onToggle?: () => void;
}

export function Tabs<T extends string = string>({
  items,
  value,
  onValueChange,
  className,
  tabClassName,
  activeTabClassName,
  inactiveTabClassName,
  countClassName,
  variant = "pill",
  size = "md",
  animate = false,
  showToggleButton = false,
  toggleButtonText = { show: 'Show', hide: 'Hide' },
  isToggled = false,
  onToggle
}: TabsProps<T>): JSX.Element {
  // Size variants
  const sizeClasses = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  // Count badge size
  const countSizeClasses = {
    sm: "ml-1 w-4 h-4 text-[10px]",
    md: "ml-1.5 w-5 h-5 text-xs",
    lg: "ml-2 w-6 h-6 text-sm",
  };

  // Variants
  const variantClasses = {
    pill: {
      container: "flex flex-wrap gap-2 justify-center",
      tab: (isSelected: boolean) =>
        cn(
          "rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer",
          isSelected
            ? "bg-white dark:bg-neutral-900 text-black dark:text-white shadow-sm border border-neutral-100 dark:border-neutral-200"
            : "bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700"
        ),
      count:
        (isSelected: boolean) => cn(
          "inline-flex items-center justify-center rounded-full ",
          isSelected
            ? "text-neutral-600 dark:text-neutral-900 bg-neutral-200 dark:bg-neutral-200"
            : "text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-700"
        ),
    },
    underline: {
      container: "flex border-b border-neutral-200 dark:border-neutral-700",
      tab: (isSelected: boolean) =>
        cn(
          "border-b-2 -mb-px transition-all duration-150 whitespace-nowrap",
          isSelected
            ? "border-blue-500 dark:border-blue-400 text-black dark:text-white font-medium"
            : "border-transparent text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-300"
        ),
      count:
        (isSelected: boolean) => cn(
          "inline-flex items-center justify-center rounded-full ",
          isSelected
            ? "text-neutral-600 dark:text-neutral-900 bg-neutral-200 dark:bg-neutral-200"
            : "text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-700"
        ),
    },
    minimal: {
      container: "flex flex-wrap gap-1",
      tab: (isSelected: boolean) =>
        cn(
          "rounded transition-all duration-150 whitespace-nowrap",
          isSelected
            ? "bg-white dark:bg-neutral-900 text-black dark:text-white font-medium"
            : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
        ),
      count:
        (isSelected: boolean) => cn(
          "inline-flex items-center justify-center rounded-full ",
          isSelected
            ? "text-neutral-600 dark:text-neutral-900 bg-neutral-200 dark:bg-neutral-200"
            : "text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-700"
        ),
    },
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      {showToggleButton && (
        <button
          onClick={onToggle}
          className="text-sm  text-neutral-500 cursor-pointer dark:text-neutral-400 underline underline-offset-2 mb-4 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
        >
          {isToggled ? toggleButtonText.hide : toggleButtonText.show}
        </button>
      )}

      <AnimatePresence>
        {(!showToggleButton || isToggled) && (
          <motion.div
            className={cn(variantClasses[variant].container)}
            initial={animate ? { opacity: 0, height: 0 } : undefined}
            animate={animate ? { opacity: 1, height: 'auto' } : undefined}
            exit={animate ? { opacity: 0, height: 0 } : undefined}
            transition={{ duration: 0.3 }}
          >
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onValueChange(item.id)}
                className={cn(
                  variantClasses[variant].tab(value === item.id),
                  sizeClasses[size],
                  tabClassName,
                  value === item.id
                    ? activeTabClassName
                    : inactiveTabClassName
                )}
              >
                {item.label}
                {item.count !== undefined && (
                  <span className={cn(
                    variantClasses[variant].count(value === item.id),
                    countSizeClasses[size],
                    countClassName
                  )}>
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
