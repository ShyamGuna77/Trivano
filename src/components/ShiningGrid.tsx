"use client";

import React, { useEffect, useRef } from "react";

interface ShiningGridProps {
  className?: string;
  children?: React.ReactNode;
}

const ShiningGrid: React.FC<ShiningGridProps> = ({
  className = "",
  children,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      grid.style.setProperty("--mouse-x", `${x}px`);
      grid.style.setProperty("--mouse-y", `${y}px`);
    };

    grid.addEventListener("mousemove", handleMouseMove);
    return () => grid.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated Grid Background */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "gridShine 3s ease-in-out infinite alternate",
        }}
      >
        {/* Radial Glow Effect */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 pointer-events-none transition-all duration-300"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
            left: "var(--mouse-x, 50%)",
            top: "var(--mouse-y, 50%)",
            transform: "translate(-50%, -50%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Shining Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"
          style={{
            top: "30%",
            animation: "shimmer 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60"
          style={{
            left: "70%",
            animation: "shimmer 4s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridShine {
          0% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.02);
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.6;
            transform: translateX(0%);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default ShiningGrid;
