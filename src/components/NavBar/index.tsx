/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState, useRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "../ThemeProvider";
import { NavbarProps } from "./types";
import { navStyles } from "./styles";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../ui/button";

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  (
    {
      className,
      logo = { text: "A3 Web Development" },
      links = [],
      actions = {
        login: { label: "Login" },
        cta: {
          label: "Book a call",
          variant: "default",
        },
      },
    },
    ref
  ) => {
    const { theme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [sliderStyle, setSliderStyle] = useState<{
      left: number;
      width: number;
      transformOrigin?: string;
      transition?: string;
    }>({ left: 0, width: 0, transformOrigin: "50% 50%" });
    const [activeLink, setActiveLink] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const navLinksRef = useRef<HTMLUListElement>(null);
    const isHovered = useRef(false);
    const timeoutRef = useRef<NodeJS.Timeout>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const prevWidthRef = useRef<number>(0);

    useEffect(() => {
      // Check scroll position immediately on mount
      setScrolled(window.scrollY > 0);

      const handleScroll = () => {
        setScrolled(window.scrollY > 0);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Clear timeout on unmount
    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    useEffect(() => {
      const nav = navRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        // Check if mouse is outside nav bounds
        if (nav) {
          const rect = nav.getBoundingClientRect();
          const isOutside =
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom;

          if (isOutside) {
            handleLinksMouseLeave();
          }
        }
      };

      // Add global mouse move listener
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);

    const handleLinksMouseLeave = () => {
      isHovered.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setActiveLink(null);
      setIsAnimating(false);
      // Reset the width tracking
      prevWidthRef.current = 0;
      setSliderStyle((prev) => ({
        ...prev,
        width: 0,
        transition: "none",
      }));
    };

    const handleLinkHover = (
      e: React.MouseEvent<HTMLLIElement>,
      index: number
    ) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const linkRect = e.currentTarget.getBoundingClientRect();
      const containerRect = navLinksRef.current?.getBoundingClientRect();

      if (containerRect) {
        const centerX = linkRect.left - containerRect.left + linkRect.width / 2;
        const exactWidth = Math.round(linkRect.width); // Round to prevent sub-pixel differences

        // Store the current width before updating
        prevWidthRef.current = exactWidth;

        if (!isAnimating) {
          setSliderStyle({
            left: linkRect.left - containerRect.left,
            width: exactWidth,
            transformOrigin: `${centerX}px 50%`,
            transition: "none",
          });
          setIsAnimating(true);
        } else {
          // Ensure smooth transition by using the same width calculation
          setSliderStyle({
            left: linkRect.left - containerRect.left,
            width: exactWidth,
            transformOrigin: `${centerX}px 50%`,
            transition: `left ${
              Math.abs(prevWidthRef.current - exactWidth) > 5 ? "0.3s" : "0.3s"
            } ease-in-out, width ${
              Math.abs(prevWidthRef.current - exactWidth) > 5 ? "0.2s" : "0.2s"
            } ease-in-out`,
          });
        }
        setActiveLink(index);
      }
      isHovered.current = true;
    };

    return (
      <>
        <header ref={ref} className={cn(navStyles.header, className)}>
          <div
            className={cn(
              navStyles.container.base,
              scrolled
                ? navStyles.container.scrolled
                : navStyles.container.default
            )}
          >
            <nav
              ref={navRef}
              style={{
                boxShadow: scrolled
                  ? theme === "dark"
                    ? navStyles.nav.shadows.dark
                    : navStyles.nav.shadows.light
                  : "none",
              }}
              className={cn(
                navStyles.nav.base,
                scrolled ? navStyles.nav.scrolled : navStyles.nav.default,
                scrolled
                  ? "ease-in delay-0"
                  : "[transition-delay:0ms,0ms,0ms,0ms,600ms]"
              )}
            >
              <div
                className={cn(
                  navStyles.content.base,
                  scrolled
                    ? navStyles.content.scrolled
                    : navStyles.content.default
                )}
              >
                {/* Logo */}
                <div className="flex items-center gap-1.5 min-w-[30%]">
                  {logo.icon}
                  <div className="text-lg font-bold">{logo.text}</div>
                </div>

                <div className="w-full h-[32px]" aria-hidden="true" />

                {/* Desktop Navigation Links */}
                <div ref={containerRef} className="relative">
                  {/* Moving the slider outside of the ul element */}
                  <div
                    style={{
                      left: sliderStyle.left,
                      width: sliderStyle.width,
                      opacity: sliderStyle.width === 0 ? 0 : 1,
                      transform: `scaleX(${sliderStyle.width === 0 ? 0 : 1})`,
                      transformOrigin: sliderStyle.transformOrigin,
                      transition: sliderStyle.transition,
                    }}
                    className="absolute top-0 h-full bg-neutral-100 dark:bg-neutral-800 rounded-full pointer-events-none"
                    aria-hidden="true"
                  ></div>

                  <ul
                    ref={navLinksRef}
                    className="hidden md:flex text-sm font-medium"
                  >
                    {links.map((link, index) => (
                      <li
                        key={link.label}
                        onMouseEnter={(e) => handleLinkHover(e, index)}
                        className={cn(
                          "relative z-10 px-5 text-center py-2 rounded-full font-[500]",
                          activeLink === index ? "text-[var(--foreground)]" : ""
                        )}
                      >
                        <a href={link.href || "#"} className={navStyles.link}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full h-[32px]" aria-hidden="true" />

                {/* Actions */}
                <div className="flex items-center justify-end gap-2 min-w-[30%]">
                  <ThemeToggle />
                  {/* <div className="hidden md:flex items-center gap-3">
                    {actions.login && (
                      <Button
                        onClick={actions.login.onClick}
                        variant="ghost"
                        size="sm"
                        className={cn(
                          scrolled
                            ? "opacity-0 w-0 p-0 m-0 translate-x-20"
                            : "opacity-100 w-auto"
                        )}
                        aria-label={actions.login.label}
                      >
                        {actions.login.label}
                      </Button>
                    )}
                    {actions.cta && (
                      <Button
                        onClick={actions.cta.onClick}
                        variant={actions.cta.variant || "default"}
                        size="sm"
                        aria-label={actions.cta.label}
                      >
                        {actions.cta.label}
                      </Button>
                    )}
                  </div> */}
                  <Button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="md:hidden p-2 hover:opacity-70 transition-opacity"
                    variant="ghost"
                    aria-label="Open menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                    <span className="sr-only">Open menu</span>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          links={links}
          actions={actions}
        />
      </>
    );
  }
);

Navbar.displayName = "Navbar";

export default Navbar;
