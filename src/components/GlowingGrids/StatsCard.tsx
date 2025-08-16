import NumberFlow from "@number-flow/react";
import { useState } from "react";

export function StatsCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stats = [
    { number: 99, suffix: "%", description: "Uptime Guarantee" },
    { number: 1, suffix: "M+", description: "Users Worldwide" },
    { number: 24, suffix: "/7", description: "Dedicated Support" },
  ];

  // Component-specific colors
  const colors = {
    themeGreen: "#BAFF38",
    neutral02: "#AAACA6",
    glassWhite04: "rgba(255, 255, 255, 0.04)",
    glassWhite10: "rgba(255, 255, 255, 0.10)",
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative w-full max-w-[389px] h-[250px] md:h-[300px] rounded-[24px] border overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
          style={{
            borderColor: colors.glassWhite10,
            backgroundColor: colors.glassWhite04,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Background Glow - positioned differently for each card */}
          <div
            className="absolute w-[606px] h-[348px] rotate-[-5.604deg] opacity-12 blur-[163px]"
            style={{
              left: index === 0 ? "314px" : index === 1 ? "-107px" : "-529px",
              top: "268px",
              background: `linear-gradient(180deg, ${colors.themeGreen} 0%, #FFFF38 100%)`,
            }}
          ></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 z-10 px-4">
            <div
              className="text-center font-gilroy-semibold text-4xl md:text-5xl lg:text-[68px] font-normal leading-[120%] tracking-[-1.02px]"
              style={{ color: colors.themeGreen }}
            >
              <NumberFlow
                value={stat.number}
                format={{ notation: "standard" }}
                spinTiming={{
                  duration: hoveredIndex === index ? 1200 : 600,
                  easing: "ease-out",
                }}
                transformTiming={{
                  duration: hoveredIndex === index ? 800 : 400,
                  easing: "ease-out",
                }}
                opacityTiming={{
                  duration: hoveredIndex === index ? 600 : 300,
                  easing: "ease-out",
                }}
              />
              <span>{stat.suffix}</span>
            </div>
            <div
              className="text-center font-gilroy-regular text-lg md:text-xl font-normal leading-[159%] tracking-[-0.2px]"
              style={{ color: colors.neutral02 }}
            >
              {stat.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
