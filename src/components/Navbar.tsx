"use client";

import type React from "react";

import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";

export function useScrollY(containerRef: React.RefObject<HTMLElement | null>) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [containerRef]);

  return scrollY;
}

export function StickyHeader({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const scrollY = useScrollY(containerRef);
  const stickyNavRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
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
      document.body.style.overflow = "hidden"; // Prevent background scroll
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
      <header
        ref={stickyNavRef}
        className={`fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-50 bg-black/95 backdrop-blur-sm rounded-full mx-auto max-w-6xl transition-all duration-300 ${
          scrollY >= 120 ? "px-3 py-2 md:px-4" : "px-4 py-3 md:px-6 md:py-4"
        }`}
      >
        <nav className="relative mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.img
              className={`transition-all duration-300 ${
                scrollY >= 120 ? "h-6 w-auto md:h-8" : "h-8 w-auto md:h-12"
              }`}
              src="/Trivano.png"
              alt="Company Logo"
              animate={{
                y: scrollY >= 120 ? -50 : 0,
                opacity: scrollY >= 120 ? 0 : 1,
              }}
              transition={{ duration: 0.15 }}
            />
            <h1
              className={`text-white font-bold transition-all duration-300 ${
                scrollY >= 120 ? "text-sm md:text-base" : "text-lg md:text-xl"
              }`}
            >
              Trivano
            </h1>
          </div>

          <ul className="sticky left-4 right-4 top-4 z-[60] hidden items-center justify-center gap-x-5 md:flex">
            <motion.div
              initial={{ x: 0 }}
              animate={{
                backgroundColor: scrollY >= 120 ? "#1c1d1a" : "transparent",
              }}
              transition={{
                ease: "linear",
                duration: 0.3,
              }}
              className="flex h-12 w-auto items-center justify-center overflow-hidden rounded-full px-6 py-2.5 transition-all md:p-1.5 md:py-2"
            >
              <nav className="relative h-full items-center justify-between gap-x-3.5 md:flex">
                <ul className="flex h-full flex-col justify-center gap-6 md:flex-row md:justify-start md:gap-0 lg:gap-1">
                  {navLinks.map((navItem) => (
                    <li
                      key={navItem.id}
                      className="flex items-center justify-center px-[0.75rem] py-[0.375rem]"
                    >
                      <a
                        href={navItem.link}
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        {navItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: scrollY >= 120 ? "auto" : 0,
                }}
                transition={{
                  ease: "linear",
                  duration: 0.25,
                  delay: 0.05,
                }}
                className="!hidden overflow-hidden rounded-full md:!block"
              >
                <AnimatePresence>
                  {scrollY >= 120 && (
                    <motion.ul
                      initial={{ x: "125%" }}
                      animate={{ x: "0" }}
                      exit={{
                        x: "125%",
                        transition: { ease: "linear", duration: 1 },
                      }}
                      transition={{ ease: "linear", duration: 0.3 }}
                      className="shrink-0 whitespace-nowrap"
                    >
                      <li>
                        <a
                          href="#"
                          className="relative inline-flex w-fit items-center justify-center gap-x-1.5 overflow-hidden rounded-full bg-[#BAFF38] px-3 py-1.5 text-black outline-none "
                        >
                          Get Started
                        </a>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </ul>

          <motion.div
            className="z-[999] hidden items-center gap-x-5 md:flex"
            animate={{
              y: scrollY >= 120 ? -50 : 0,
              opacity: scrollY >= 120 ? 0 : 1,
            }}
            transition={{ duration: 0.15 }}
          >
            <button className="bg-[#BAFF38] text-black text-sm md:text-base font-medium px-4 py-2 md:px-6 rounded-full hover:bg-[#BAFF38]/90 transition-colors">
              Get Started
            </button>
          </motion.div>

          <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
            <motion.button
              onClick={() => setActive((prev) => !prev)}
              animate={active ? "open" : "close"}
              className="relative flex h-10 w-10 items-center justify-center rounded-md md:hidden bg-white/10 border border-white/20"
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
                transition={{ duration: 0.3 }}
              ></motion.span>
              <motion.span
                style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
                className="absolute h-0.5 w-5 bg-white"
                variants={{
                  open: {
                    opacity: 0,
                  },
                  close: {
                    opacity: 1,
                  },
                }}
              ></motion.span>
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
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.button>
          </MotionConfig>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-sm border-l border-white/10"
            >
              <div className="flex flex-col p-6 pt-20">
                <nav className="flex-1">
                  <ul className="space-y-6">
                    {navLinks.map((navItem, index) => (
                      <motion.li
                        key={navItem.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                      >
                        <a
                          href={navItem.link}
                          onClick={() => setActive(false)}
                          className="block text-[#EAECE5] text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:text-[#BAFF38] transition-all duration-200"
                        >
                          {navItem.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <button
                    onClick={() => setActive(false)}
                    className="w-full bg-[#BAFF38] text-black text-lg font-medium px-6 py-3 rounded-xl hover:bg-[#BAFF38]/90 transition-colors"
                  >
                    Get Started
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
