"use client";

import { StickyHeader } from "@/components/Navbar";

import { useRef } from "react";
import HomeComponent from "@/components/Home";
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto bg-black">
      <StickyHeader containerRef={containerRef} />

      <HomeComponent />
    </div>
  );
}
