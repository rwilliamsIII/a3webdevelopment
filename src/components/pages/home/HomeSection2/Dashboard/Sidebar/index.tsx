"use client";

import React from "react";
import {
  IconLayoutDashboard,
  IconBox,
  IconTerminal2,
  IconBell,
  IconUsers,
  IconSettings,
  IconLogout,
  IconFileText,
  IconLifebuoy,
  IconGitBranch,
  IconRocket,
} from "@tabler/icons-react";
// Import only the motion component to reduce bundle size
import { motion } from "framer-motion";
import styles from "./Sidebar.module.css";

// Types
export type Route =
  | "overview"
  | "projects"
  | "deployments"
  | "notifications"
  | "team"
  | "settings"
  | "documentation"
  | "support"
  | "changelog";

interface SidebarItem {
  type: "item";
  icon: React.ReactNode;
  label: string;
  route: Route;
  badge?: string;
}

interface SidebarSection {
  type: "section";
  title: string;
}

type NavElement = SidebarItem | SidebarSection;

interface SidebarProps {
  currentRoute: Route;
  onNavigate: (route: Route) => void;
}

export default function Sidebar({ currentRoute, onNavigate }: SidebarProps) {
  // Combined navigation items and sections
  const navElements: NavElement[] = [
    // Main section
    { type: "section", title: "Main" },
    {
      type: "item",
      icon: <IconLayoutDashboard size={20} />,
      label: "Overview",
      route: "overview",
    },
    {
      type: "item",
      icon: <IconBox size={20} />,
      label: "Projects",
      route: "projects",
      badge: "12",
    },
    {
      type: "item",
      icon: <IconTerminal2 size={20} />,
      label: "Deployments",
      route: "deployments",
      badge: "3",
    },

    // Management section
    { type: "section", title: "Management" },
    {
      type: "item",
      icon: <IconBell size={20} />,
      label: "Notifications",
      route: "notifications",
      badge: "9",
    },
    {
      type: "item",
      icon: <IconUsers size={20} />,
      label: "Team",
      route: "team",
    },
    {
      type: "item",
      icon: <IconSettings size={20} />,
      label: "Settings",
      route: "settings",
    },

    // Resources section
    { type: "section", title: "Resources" },
    {
      type: "item",
      icon: <IconFileText size={20} />,
      label: "Documentation",
      route: "documentation",
    },
    {
      type: "item",
      icon: <IconLifebuoy size={20} />,
      label: "Support",
      route: "support",
    },
    {
      type: "item",
      icon: <IconGitBranch size={20} />,
      label: "Changelog",
      route: "changelog",
    },
  ];

  // Calculate total elements for animation sequence
  const totalElements = navElements.length + 2; // +1 for logout and +1 for brand header

  // Get initial animation values based on element position
  const getInitialAnimationValues = (index: number) => {
    // The last 3 elements (first to appear) should have less dramatic initial positions
    const animationIndex = totalElements - index - 1;

    if (animationIndex < 7) {
      // First elements (appear first) - less dramatic initial positions
      return {
        opacity: 0,
        scale: 1.6,
        filter: "blur(10px) opacity(0)",
        x: 520,
        y: -150,
      };
    } else {
      return {
        opacity: 0,
        scale: 2.6,
        filter: "blur(10px) opacity(0)",
        x: 520,
        y: -150,
      };
    }
  };

  const getTransitionProps = (index: number) => {
    const animationIndex = totalElements - index - 1;
    if (animationIndex < 7) {
      return {
        delay: animationIndex * 0.03,
        duration: 0.5,
        ease: "easeOut",
      };
    }
    return {
      delay: animationIndex * 0.06 ,
      duration: 0.8,
      ease: "easeOut",
    };
  };

  // Animation final state - same for all elements
  const animateTo = {
    opacity: 1,
    scale: 1,
    filter: "blur(0px) opacity(1)",
    x: 0,
    y: 0,
  };

  // Render a nav element (either section title or item)
  const renderNavElement = (element: NavElement, index: number) => {
    // Animation index (reversed for bottom-up animation)

    if (element.type === "section") {
      return (
        <motion.div
          key={element.title}
          className={styles.sectionTitle}
          style={{ transformStyle: "preserve-3d" }}
          initial={getInitialAnimationValues(index)}
          animate={animateTo}
          transition={getTransitionProps(index)}
        >
          {element.title}
        </motion.div>
      );
    } else {
      const isActive = currentRoute === element.route;

      return (
        <motion.div
          key={element.route}
          onClick={() => onNavigate(element.route)}
          className={`${styles.navItem} ${
            isActive ? styles.navItemActive : styles.navItemInactive
          }`}
          style={{ transformStyle: "preserve-3d" }}
          initial={getInitialAnimationValues(index)}
          animate={animateTo}
          transition={getTransitionProps(index)}
        >
          {element.icon}
          <span className={styles.label}>{element.label}</span>
          {element.badge && (
            <span
              className={`${styles.badge} ${
                isActive ? styles.badgeActive : styles.badgeInactive
              }`}
            >
              {element.badge}
            </span>
          )}
        </motion.div>
      );
    }
  };

  return (
    <div className={styles.sidebarWrapper}>
      {/* Brand Header - Now Animated */}
      <motion.div
        className={styles.brandHeader}
        style={{ transformStyle: "preserve-3d" }}
        initial={{
          opacity: 0,
          scale: 2,
          filter: "blur(10px) opacity(0)",
          x: 520,
          y: -150,
        }}
        animate={animateTo}
        transition={{
          delay: (totalElements + 0.5) * 0.05,
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className={styles.brandContainer}>
          <div className={styles.logoContainer}>
            <span className={styles.logoText}>
              <IconRocket />
            </span>
          </div>
          <h1 className={styles.brandName}>A3 Web Dev</h1>
        </div>
      </motion.div>

      {/* Sidebar Content */}
      <div className={styles.content} style={{ transformStyle: "preserve-3d" }}>
        {navElements.map((element, index) => renderNavElement(element, index))}
      </div>

      {/* Footer with animated logout button */}
      <div className={styles.footer}>
        <motion.button
          className={styles.logoutButton}
          style={{ transformStyle: "preserve-3d" }}
          initial={getInitialAnimationValues(navElements.length)}
          animate={animateTo}
          transition={getTransitionProps(navElements.length)}
          aria-label="Log out of your account"
        >
          <IconLogout size={20} className={styles.logoutIcon} />
          <span className={styles.logoutText}>Logout</span>
        </motion.button>
      </div>
    </div>
  );
}
