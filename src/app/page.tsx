"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import HomeSection1 from "@/components/pages/home/HomeSection1";
import HomeSection2 from "@/components/pages/home/HomeSection2";

// Simpler scroll restoration that doesn't use useSearchParams
const ScrollRestoration = () => {
  useEffect(() => {
    // Set scroll to top
    window.scrollTo(0, 0);

    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
};

const Benefits = dynamic(() => import("@/components/pages/home/Benefits"));

const HomeSection3Loader = dynamic(
  () => import("@/components/pages/home/HomeSection3Loader")
);

const TemplatesShowcase = dynamic(
  () => import("@/components/pages/home/TemplatesShowcase")
);

const ResponsiveTemplatesSection = dynamic(
  () => import("@/components/pages/home/ResponsiveTemplatesSection")
);

const PricesSection = dynamic(() => import("@/components/pages/home/Prices"));

const FaqSection = dynamic(() => import("@/components/pages/home/FaqSection"));

// const MapSection = dynamic(() => import("@/components/pages/home/MapSection"));

// simple LazyLoad wrapper
function LazyLoad({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return <div ref={ref}>{inView ? children : null}</div>;
}

export default function Home() {
  return (
    <div className="min-h-screen width-full">
      <ScrollRestoration />
      <HomeSection1 />
      <HomeSection2 />
      <Benefits />
      <LazyLoad>
        <HomeSection3Loader />
      </LazyLoad>
      <LazyLoad>
        <TemplatesShowcase />
      </LazyLoad>
      <LazyLoad>
        <ResponsiveTemplatesSection />
      </LazyLoad>
      <LazyLoad>
        <PricesSection />
      </LazyLoad>
      <LazyLoad>
        <FaqSection />
      </LazyLoad>
    </div>
  );
}
