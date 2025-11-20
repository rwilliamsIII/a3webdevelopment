"use client";

import { useState } from "react";
import DashboardLayout from "./Layout";
import { Route } from "./Sidebar";


export default function Dashboard() {
  const [currentRoute, setCurrentRoute] = useState<Route>("overview");

  const handleNavigate = (route: Route) => {
    setCurrentRoute(route);
  };

  return (
    <DashboardLayout
      currentRoute={currentRoute}
      onNavigate={handleNavigate}
    />
  );
}

