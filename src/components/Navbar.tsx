/* eslint-disable @next/next/no-img-element */
"use client";

import type React from "react";

import { motion, MotionConfig } from "motion/react";
import { cubicBezier, easeOut } from "motion";
import { useEffect, useMemo, useRef, useState } from "react";

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}

export function StickyHeader() {
  const scrollY = useScrollY();
  const stickyNavRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  const navLinks = useMemo(
    () => [
      { id: 1, label: "Home", link: "/" },
      { id: 2, label: "About", link: "/about" },
      { id: 3, label: "Features", link: "/features" },
      { id: 4, label: "Pricing", link: "/pricing" },
      { id: 5, label: "Contact", link: "/contact" },
    ],
    []
  );

  // Optimized easing functions for responsive animations
  const responsiveEasing = cubicBezier(0.16, 1, 0.3, 1); // Smooth and responsive

  const springTransition = {
    duration: 0.35,
    ease: easeOut, // Responsive feel as recommended
  };

  const smoothTransition = {
    duration: 0.3,
    ease: responsiveEasing, // Custom smooth curve
  };

  const fastTransition = {
    duration: 0.25,
    ease: easeOut,
  };

  const isScrolled = scrollY >= 120;

  return (
    <motion.header
      ref={stickyNavRef}
      animate={{
        width: isScrolled ? "auto" : "calc(100% - 2rem)",
        maxWidth: isScrolled ? "480px" : "1152px",
        paddingLeft: isScrolled ? "8px" : "24px",
        paddingRight: isScrolled ? "8px" : "24px",
        paddingTop: isScrolled ? "8px" : "16px",
        paddingBottom: isScrolled ? "8px" : "16px",
      }}
      transition={springTransition}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full"
      style={{
        backgroundColor: isScrolled ? "#1a1f1e" : "rgba(0, 0, 0, 0.7)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
        boxShadow: isScrolled
          ? "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)"
          : "0 4px 16px rgba(0,0,0,0.2)",
      }}
    >
      <nav className="relative mx-auto flex items-center justify-center">
        {/* Logo and Title Container */}
        <motion.div
          className="flex items-center gap-2 overflow-hidden"
          animate={{
            width: isScrolled ? "0px" : "auto",
            opacity: isScrolled ? 0 : 1,
            marginRight: isScrolled ? "0px" : "32px",
            scale: isScrolled ? 0.8 : 1,
          }}
          transition={{
            ...smoothTransition,
            opacity: {
              duration: 0.25,
              ease: easeOut,
              delay: isScrolled ? 0 : 0.05,
            },
          }}
        >
          <img
            className="h-10 w-10 flex-shrink-0"
            src="/Trivano.png"
            alt="Company Logo"
          />
          <h1 className="text-white font-bold text-xl whitespace-nowrap">
            Trivano
          </h1>
        </motion.div>

        {/* Navigation Container */}
        <motion.div
          animate={{
            backgroundColor: isScrolled
              ? "rgba(255,255,255,0.05)"
              : "rgba(0,0,0,0.1)",
            paddingLeft: isScrolled ? "12px" : "24px",
            paddingRight: isScrolled ? "12px" : "24px",
            paddingTop: isScrolled ? "4px" : "8px",
            paddingBottom: isScrolled ? "4px" : "8px",
            borderRadius: "9999px",
          }}
          transition={springTransition}
          className="flex items-center justify-center backdrop-blur-sm"
        >
          {/* Navigation Links */}
          <motion.ul
            className="flex items-center"
            animate={{
              gap: isScrolled ? "4px" : "8px",
            }}
            transition={springTransition}
          >
            {navLinks.map((navItem) => (
              <motion.li
                key={navItem.id}
                animate={{
                  scale: isScrolled ? 0.9 : 1,
                }}
                transition={springTransition}
              >
                <motion.a
                  href={navItem.link}
                  className="text-white hover:text-gray-300 font-medium whitespace-nowrap block"
                  animate={{
                    fontSize: isScrolled ? "14px" : "16px",
                    paddingLeft: isScrolled ? "8px" : "12px",
                    paddingRight: isScrolled ? "8px" : "12px",
                    paddingTop: isScrolled ? "4px" : "8px",
                    paddingBottom: isScrolled ? "4px" : "8px",
                  }}
                  transition={springTransition}
                >
                  {navItem.label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Inline Get Started Button - Appears when scrolled */}
          <motion.div
            animate={{
              width: isScrolled ? "auto" : "0px",
              opacity: isScrolled ? 1 : 0,
              marginLeft: isScrolled ? "8px" : "0px",
              scale: isScrolled ? 1 : 0.8,
            }}
            transition={{
              ...smoothTransition,
              opacity: {
                duration: 0.25,
                ease: easeOut,
                delay: isScrolled ? 0.1 : 0,
              },
            }}
            className="overflow-hidden"
          >
            <motion.a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#BAFF38] text-black font-medium hover:bg-[#a8e632] transition-colors whitespace-nowrap"
              animate={{
                paddingLeft: isScrolled ? "12px" : "0px",
                paddingRight: isScrolled ? "12px" : "0px",
                paddingTop: isScrolled ? "4px" : "0px",
                paddingBottom: isScrolled ? "4px" : "0px",
                fontSize: isScrolled ? "14px" : "0px",
              }}
              transition={springTransition}
            >
              Get Started
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side Get Started Button - Hides when scrolled */}
        <motion.div
          className="flex items-center overflow-hidden"
          animate={{
            width: isScrolled ? "0px" : "auto",
            opacity: isScrolled ? 0 : 1,
            marginLeft: isScrolled ? "0px" : "32px",
            scale: isScrolled ? 0.8 : 1,
          }}
          transition={{
            ...smoothTransition,
            opacity: {
              duration: 0.25,
              ease: easeOut,
              delay: isScrolled ? 0 : 0.1,
            },
          }}
        >
          <motion.button
            className="bg-[#BAFF38] text-zinc-900 font-medium rounded-full border border-gray-600 transition-colors hover:bg-[#a8e632] whitespace-nowrap"
            animate={{
              paddingLeft: isScrolled ? "0px" : "24px",
              paddingRight: isScrolled ? "0px" : "24px",
              paddingTop: isScrolled ? "0px" : "8px",
              paddingBottom: isScrolled ? "0px" : "8px",
            }}
            transition={springTransition}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <MotionConfig transition={fastTransition}>
          <motion.button
            onClick={() => setActive((prev) => !prev)}
            animate={active ? "open" : "close"}
            className="relative flex h-8 w-8 items-center justify-center rounded-md md:hidden ml-4"
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["35%", "50%", "50%"],
                },
                close: {
                  rotate: ["45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "35%"],
                },
              }}
            />
            <motion.span
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-white"
              variants={{
                open: { opacity: 0 },
                close: { opacity: 1 },
              }}
            />
            <motion.span
              style={{ left: "50%", bottom: "30%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                  top: ["65%", "50%", "50%"],
                },
                close: {
                  rotate: ["-45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "65%"],
                },
              }}
            />
          </motion.button>
        </MotionConfig>
      </nav>
    </motion.header>
  );
}
