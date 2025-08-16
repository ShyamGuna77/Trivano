"use client";

import { StickyHeader } from "@/components/Navbar";
import HomeComponent from "@/components/Home";
import { Companies } from "@/components/Companies";
import { FeautureItems } from "@/components/items";
import Efforts from "@/components/Efforts";
import Testimonals from "@/components/Testimonals";
import { BentoShowcase } from "@/components/Bento-showcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { SecuritySection } from "@/components/GlowingGrids/SecuritySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <StickyHeader />

      <HomeComponent />
      <Companies />
      <FeautureItems />
      <Efforts />
      <Testimonals />
      <BentoShowcase />
      <Pricing />
      <SecuritySection />
      <Footer />
    </div>
  );
}
