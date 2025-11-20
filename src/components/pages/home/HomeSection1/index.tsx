"use client";
import { BackgroundShapes } from "@/components/common/BackgroundShapes";
import dynamic from "next/dynamic";

const HomeSection1Content = dynamic(() => import("./Content"), {
  ssr: false,
  loading: () => <div className="relative h-[340px]" aria-hidden="true"></div>,
});

export default function HomeSection1() {
  return (
    <div className="relative flex flex-col min-h-[530px] sm:min-h-[510px]  items-start justify-start pt-4 sm:pt-3 sm:pb-4">
      <BackgroundShapes />
      <HomeSection1Content />
    </div>
  );
}
