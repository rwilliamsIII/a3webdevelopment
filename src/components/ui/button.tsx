import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all overflow-hidden rounded-full disabled:pointer-events-none disabled:opacity-50 relative select-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-black text-[var(--white)] hover:bg-gray-900 dark:bg-[var(--white)] dark:text-black dark:hover:bg-gray-200",
        destructive: "bg-red-500 text-[var(--white)] hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
        outline: "border border-[var(--white)]-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:border-neutral-200/60 dark:text-gray-200 dark:hover:bg-neutral-800/50",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
        ghost: "bg-transparent hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-neutral-800/50 dark:hover:text-gray-50",
        link: "text-gray-900 underline-offset-4 hover:underline dark:text-gray-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6",
        xl: "h-12 px-8",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Keep the ripple effect
const RIPPLE_STYLE = `
.button-ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 2200ms ease-out;
  background-color: var(--ripple-color, rgba(255, 255, 255, 0.25));
  z-index: 5;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
`;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onClick, href, startIcon, endIcon, ...props }, ref) => {
    // Keep the ripple animation style element
    React.useEffect(() => {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = RIPPLE_STYLE;
      document.head.appendChild(styleElement);
      return () => {
        document.head.removeChild(styleElement);
      };
    }, []);

    // Handle ripple effect
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      const button = event.currentTarget;
      const ripple = document.createElement('span');

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      // Get the computed styles
      const computedStyle = window.getComputedStyle(button);

      // More robust approach to ripple colors
      let rippleColor;

      // Force specific ripple colors based on variant for consistency
      if (variant === 'default') {
        // Primary button (dark in light mode, white in dark mode)
        rippleColor = computedStyle.color.includes('255, 255, 255')
          ? 'rgba(255, 255, 255, 0.25)' // White text (dark background)
          : 'rgba(0, 0, 0, 0.15)';      // Dark text (light background)
      }
      else if (variant === 'secondary') {
        // Secondary button - hardcoded for reliability
        rippleColor = 'rgba(0, 0, 0, 0.1)'; // Always use a subtle dark ripple
      }
      else {
        // Fallback for other variants - use a more general approach
        const colorMatch = computedStyle.color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
        const isLightText = colorMatch && parseInt(colorMatch[1]) > 200;

        rippleColor = isLightText
          ? 'rgba(255, 255, 255, 0.2)'
          : 'rgba(0, 0, 0, 0.1)';
      }

      ripple.className = 'button-ripple';
      ripple.style.setProperty('--ripple-color', rippleColor);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      button.appendChild(ripple);

      // Clean up after animation completes
      setTimeout(() => {
        ripple.remove();
      }, 2200);

      if (onClick) {
        onClick(event as React.MouseEvent<HTMLButtonElement>);
      }
    };

    // If href is provided, render as Link
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
          onClick={handleClick}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {startIcon && <span className="mr-2 flex items-center">{startIcon}</span>}
          {props.children}
          {endIcon && <span className="ml-2 flex items-center">{endIcon}</span>}
        </Link>
      );
    }

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onClick={handleClick}
      >
        {startIcon && <span className="mr-2 flex items-center">{startIcon}</span>}
        {props.children}
        {endIcon && <span className="ml-2 flex items-center">{endIcon}</span>}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
