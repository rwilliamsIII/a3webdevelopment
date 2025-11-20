"use client";
// Import only the specific components needed
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string; }>;
  actions?: {
    login?: { label: string; onClick?: () => void; };
    cta?: { label: string; onClick?: () => void; };
  };
}

export const MobileMenu = ({ isOpen, onClose, links, actions }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[var(--background)]/20 dark:bg-[var(--background)]/40 backdrop-blur-xs z-40"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[90px] left-4 right-4 rounded-xl bg-[var(--foreground)] dark:bg-[rgba(10,10,10,0.8)] backdrop-blur-xl p-4 z-50 shadow-xl dark:shadow-2xl border border-neutral-200/20"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            {/* Add close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:opacity-70 transition-opacity rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Close menu"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M1 1L13 13M1 13L13 1" />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>

            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="text-base font-medium hover:opacity-70 transition-opacity py-2"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-neutral-200 dark:border-neutral-800 my-1" />
              {actions?.login && (
                <button
                  onClick={() => {
                    actions.login?.onClick?.();
                    onClose();
                  }}
                  className="text-base font-medium text-left hover:opacity-70 transition-opacity py-2"
                  aria-label={actions.login.label}
                >
                  {actions.login.label}
                </button>
              )}
              {actions?.cta && (
                <button
                  onClick={() => {
                    actions.cta?.onClick?.();
                    onClose();
                  }}
                  className="w-full bg-[var(--background)] dark:bg-[var(--foreground)] text-[var(--foreground)] dark:text-[var(--background)] rounded-lg py-2 text-base font-medium hover:opacity-90 transition-opacity"
                  aria-label={actions.cta.label}
                >
                  {actions.cta.label}
                </button>
              )}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
