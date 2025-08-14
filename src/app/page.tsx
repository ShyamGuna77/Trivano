"use client";


import { useRef } from "react";
import { StickyHeader } from "@/components/Navbar";
import HomeComponent from "@/components/Home";
import { Companies } from "@/components/Companies";
import { FeautureItems } from "@/components/items";
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto bg-black">
      <StickyHeader containerRef={containerRef} />
      <HomeComponent />
      <Companies />
      <FeautureItems />
    </div>
  );
}
