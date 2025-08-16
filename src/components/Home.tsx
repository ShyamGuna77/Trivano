/* eslint-disable @next/next/no-img-element */
"use client";
import { GridBackground } from "./GridPattern";
import { motion } from "motion/react";
import SlideArrowButton from "./SlideArrowButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#EAECE5] relative overflow-hidden">
      <GridBackground />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center pt-20 md:pt-24 lg:pt-32 px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 md:gap-12 max-w-4xl">
          {/* Tagline with avatars */}
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3 rounded-[31px] bg-[#292A27] px-3 md:px-[18px] py-1 pl-1">
              <div className="flex items-center gap-[-10px]">
                <div className="w-6 md:w-7 h-6 md:h-7 rounded-full border border-white bg-[#A3E32A] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 md:w-7 h-6 md:h-7 rounded-full border border-white bg-[#A3E32A] overflow-hidden -ml-1.5 md:-ml-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 md:w-7 h-6 md:h-7 rounded-full border border-white bg-[#A3E32A] overflow-hidden -ml-1.5 md:-ml-2">
                  <img
                    src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 md:w-7 h-6 md:h-7 rounded-full border border-white bg-[#A3E32A] overflow-hidden -ml-1.5 md:-ml-2">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-[#EAECE5] text-xs md:text-sm font-normal leading-[159%] tracking-[-0.2px]">
                Where productivity meets simplicity.
              </span>
            </div>

            {/* Main headline and subtitle */}
            <div className="flex flex-col items-center gap-2 md:gap-3.5">
              <h1 className="text-[#EAECE5] text-center text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-semibold leading-[120%] tracking-[-1.02px] max-w-[825px]">
                Empowering Your Remote Team for Success
              </h1>
              <p className="text-[#EAECE5] text-center text-base md:text-lg lg:text-xl font-normal leading-[159%] tracking-[-0.2px] max-w-full">
                Help your team effectively align tasks for remote work.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto sm:max-w-none">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full sm:w-auto"
            >
              <SlideArrowButton
                text="Book a Demo"
                primaryColor="#000000"
                textColor="text-black"
                hoverTextColor="group-hover:text-white group-active:text-white"
                className="w-full sm:w-auto justify-center touch-manipulation"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full sm:w-auto"
            >
              <SlideArrowButton
                text="Get Started"
                primaryColor="#BAFF38"
                textColor="text-black"
                hoverTextColor="group-hover:text-black group-active:text-black"
                className="w-full sm:w-auto justify-center touch-manipulation"
              />
            </motion.div>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="mt-12 md:mt-16 lg:mt-24 px-4 md:px-6 max-w-7xl w-full">
          <img
            src="/hero.png"
            alt="Remoplus Dashboard"
            className="w-full h-auto rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/10"
          />
        </div>
      </main>
    </div>
  );
}
