"use client";

import dynamic from "next/dynamic";

// Dynamically import HomeSection3 for better performance in a client component
const HomeSection3 = dynamic(
  () => import("./HomeSection3"),
  {
    ssr: false,
    loading: () => (
      <div className="relative z-10 flex flex-col items-center justify-center w-full p-20 px-10 mx-auto mt-[-190px] border-[1px] dark:bg-black border-neutral-100 dark:border-neutral-900 rounded-lg min-h-[300px]">
        <div className="animate-pulse text-center">
          <div className="h-8 bg-neutral-200 dark:bg-neutral-800 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-96 mx-auto"></div>
        </div>
      </div>
    ),
  }
);

export default function HomeSection3Loader() {
  return <HomeSection3 />;
}
