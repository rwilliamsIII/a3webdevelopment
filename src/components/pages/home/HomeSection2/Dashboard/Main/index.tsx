/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useState, useEffect } from "react"
// Import only the motion component to reduce bundle size
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'; // Import dynamic
import { Button } from "@/components/ui/button"
import { IconPlus } from "@tabler/icons-react"
import SectionHeader from "./SectionHeader"
// Removed static import of KpiSection
import TableSection from "./TableSection"
import { deployments } from "./data"
import { Kpi } from "./types"
import { initialKpis } from "./kpiData"

// Dynamically import KpiSection with ssr: false
const KpiSection = dynamic(() => import('./KpiSection'), { ssr: false });

export default function Main() {
  const [kpis, setKpis] = useState<Kpi[]>(initialKpis);

  // Animation properties
  const initialAnimation = {
    opacity: 0,
    scale: 1.3,
    filter: "blur(10px) opacity(0)",
    x: 520,
    y: -150,
    transformPerspective: 500,
  }

  const animateTo = {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)  opacity(1)",
  }

  const transitionProps = {
    delay: 0.3,
    duration: 0.9,
    ease: "easeOut",
  }

  // Update KPI values based on current deployments
  useEffect(() => {
    setKpis((prevKpis) =>
      prevKpis.map(kpi => {
        // For numeric KPIs, update with numeric values
        if (kpi.id === "kpi-1" && typeof kpi.value === 'number') {
          return { ...kpi, value: deployments.length };
        }
        else if (kpi.id === "kpi-2" && typeof kpi.value === 'number') {
          return { ...kpi, value: deployments.filter(d => d.status === "ready").length };
        }
        else if (kpi.id === "kpi-3" && typeof kpi.value === 'number') {
          return { ...kpi, value: deployments.filter(d => d.status === "error").length };
        }
        // Return unchanged for non-numeric KPIs or KPIs we don't want to update
        return kpi;
      })
    );
  }, [deployments]);

  // Use the Button component instead of raw button element
  const newDeploymentButton = (
    <Button
      variant="default"
      size="sm"
      className="inline-flex items-center gap-1"
      startIcon={<IconPlus size={14} />}
    >
      New Deployment
    </Button>
  );

  return (
    <motion.main
      style={{ transformStyle: "preserve-3d", zIndex: "0" }}
      initial={initialAnimation}
      animate={animateTo}
      transition={transitionProps}
    >
      <div className="flex-1 p-6 overflow-hidden pb-14 bg-white dark:bg-neutral-950"> 
      <SectionHeader
        title="Recent Deployments"
        action={newDeploymentButton}
      />

      {/* KPIs section - Now dynamically loaded */}
      <KpiSection
        kpis={kpis}
        onKpisChange={setKpis}
      />

      {/* Table section */}
      <TableSection data={deployments} />
      </div>

    </motion.main>
  )
}
