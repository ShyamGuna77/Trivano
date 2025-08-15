"use client";

import { useRef } from "react";
import { StickyHeader } from "@/components/Navbar";
import HomeComponent from "@/components/Home";
import { Companies } from "@/components/Companies";
import { FeautureItems } from "@/components/items";
import Efforts from "@/components/Efforts";
import Testimonals from "@/components/Testimonals";
import { BentoShowcase } from "@/components/Bento-showcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen overflow-y-auto bg-black">
      <StickyHeader containerRef={containerRef} />
      <main className="w-full">
        <HomeComponent />
        <Companies />
        <FeautureItems />
        <Efforts />
        <Testimonals />
        <BentoShowcase />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}
