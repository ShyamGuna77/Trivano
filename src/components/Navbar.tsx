/* eslint-disable @next/next/no-img-element */
"use client";

import type React from "react";

import { motion, MotionConfig, AnimatePresence } from "motion/react";
import { cubicBezier, easeOut } from "motion";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";

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
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Debounced scroll state update to prevent laggy transitions
  useEffect(() => {
      setIsScrolled(scrollY >= 120);
  }, [scrollY]);

  // Optimized easing functions for smooth animations
  const springTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  };

  const smoothTransition = {
    duration: 0.4,
    ease: cubicBezier(0.25, 0.1, 0.25, 1), // Custom cubic-bezier for smoothness
  };

  const fastTransition = {
    duration: 0.2,
    ease: easeOut,
  };

  // Mobile menu toggle handler
  const toggleMobileMenu = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        stickyNavRef.current &&
        !stickyNavRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [active]);

  return (
    <>
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
        transition={smoothTransition}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full"
        style={
          {
            backgroundColor: isScrolled ? "#1a1f1e" : "rgba(0, 0, 0, 0.7)",
            backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
            boxShadow: isScrolled
              ? "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)"
              : "0 4px 16px rgba(0,0,0,0.2)",
          } as React.CSSProperties
        }
      >
        <nav className="relative mx-auto flex items-center justify-between w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-center w-full">
            {/* Logo and Title Container - Desktop Only */}
            <motion.div
              className="flex items-center gap-2 overflow-hidden flex-shrink-0"
              animate={{
                maxWidth: isScrolled ? "0px" : "500px",
                opacity: isScrolled ? 0 : 1,
                marginRight: isScrolled ? "0px" : "32px",
                scale: isScrolled ? 0.8 : 1,
              }}
              transition={smoothTransition}
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

            {/* Navigation Container - Desktop Only */}
            <motion.div
              className="flex items-center justify-center backdrop-blur-sm"
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
              transition={smoothTransition}
            >
              {/* Navigation Links */}
              <motion.ul
                className="flex items-center"
                animate={{
                  gap: isScrolled ? "4px" : "8px",
                }}
                transition={smoothTransition}
              >
                {navLinks.map((navItem) => (
                  <motion.li
                    key={navItem.id}
                    animate={{
                      scale: isScrolled ? 0.9 : 1,
                    }}
                    transition={smoothTransition}
                  >
                    <motion.a
                      href={navItem.link}
                      className="text-white hover:text-gray-300 font-medium whitespace-nowrap block transition-colors"
                      animate={{
                        fontSize: isScrolled ? "14px" : "16px",
                        paddingLeft: isScrolled ? "8px" : "12px",
                        paddingRight: isScrolled ? "8px" : "12px",
                        paddingTop: isScrolled ? "4px" : "8px",
                        paddingBottom: isScrolled ? "4px" : "8px",
                      }}
                      transition={smoothTransition}
                    >
                      {navItem.label}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Inline Get Started Button - Appears when scrolled */}
              <motion.div
                animate={{
                  maxWidth: isScrolled ? "500px" : "0px",
                  opacity: isScrolled ? 1 : 0,
                  marginLeft: isScrolled ? "8px" : "0px",
                  scale: isScrolled ? 1 : 0.8,
                }}
                transition={smoothTransition}
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
                  transition={smoothTransition}
                >
                  Get Started
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side Get Started Button - Desktop Only */}
            <motion.div
              className="flex items-center overflow-hidden flex-shrink-0"
              animate={{
                maxWidth: isScrolled ? "0px" : "500px",
                opacity: isScrolled ? 0 : 1,
                marginLeft: isScrolled ? "0px" : "32px",
                scale: isScrolled ? 0.8 : 1,
              }}
              transition={smoothTransition}
            >
              <motion.button
                className="bg-[#BAFF38] text-zinc-900 font-medium rounded-full border border-gray-600 transition-colors hover:bg-[#a8e632] whitespace-nowrap"
                animate={{
                  paddingLeft: isScrolled ? "0px" : "18px",
                  paddingRight: isScrolled ? "0px" : "18px",
                  paddingTop: isScrolled ? "0px" : "6px",
                  paddingBottom: isScrolled ? "0px" : "6px",
                }}
                transition={smoothTransition}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Mobile Logo and Title */}
            <motion.div
              className="flex items-center gap-2"
              animate={{
                opacity: isScrolled ? 0.7 : 1,
                scale: isScrolled ? 0.9 : 1,
              }}
              transition={smoothTransition}
            >
              <img
                className="h-8 w-8 flex-shrink-0"
                src="/Trivano.png"
                alt="Company Logo"
              />
              <h1 className="text-white font-bold text-lg whitespace-nowrap">
                Trivano
              </h1>
            </motion.div>

            {/* Mobile Menu Button */}
            <MotionConfig transition={fastTransition}>
              <motion.button
                onClick={toggleMobileMenu}
                animate={active ? "open" : "close"}
                className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 z-50"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  style={
                    {
                      left: "50%",
                      top: "35%",
                      x: "-50%",
                      y: "-50%",
                      position: "absolute",
                    } as React.CSSProperties
                  }
                  className="h-0.5 w-5 bg-white rounded-full"
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
                  style={
                    {
                      left: "50%",
                      top: "50%",
                      x: "-50%",
                      y: "-50%",
                      position: "absolute",
                    } as React.CSSProperties
                  }
                  className="h-0.5 w-5 bg-white rounded-full"
                  variants={{
                    open: { opacity: 0 },
                    close: { opacity: 1 },
                  }}
                />
                <motion.span
                  style={
                    {
                      left: "50%",
                      bottom: "30%",
                      x: "-50%",
                      y: "-50%",
                      position: "absolute",
                    } as React.CSSProperties
                  }
                  className="h-0.5 w-5 bg-white rounded-full"
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
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setActive(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={springTransition}
            className="fixed top-24 left-4 right-4 bg-[#1a1f1e] rounded-2xl border border-white/10 backdrop-blur-xl z-50 md:hidden"
            style={
              {
                boxShadow:
                  "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
              } as React.CSSProperties
            }
          >
            <div className="p-6">
              {/* Mobile Navigation Links */}
              <nav className="space-y-3">
                {navLinks.map((navItem, index) => (
                  <motion.a
                    key={navItem.id}
                    href={navItem.link}
                    className="block text-white hover:text-[#BAFF38] font-medium text-lg transition-colors py-3 px-2 rounded-lg hover:bg-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActive(false)}
                  >
                    {navItem.label}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile Get Started Button */}
              <motion.div
                className="mt-6 pt-4 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  className="w-full bg-[#BAFF38] text-black font-semibold rounded-xl py-4 px-6 transition-colors hover:bg-[#a8e632] text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActive(false)}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
