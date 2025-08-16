"use client";

import type React from "react";

import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener to window
    window.addEventListener("scroll", handleScroll);

    // Call handler right away so state gets updated with initial window position
    handleScroll();

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

  return (
    <motion.header
      ref={stickyNavRef}
      initial={{ y: 0 }}
      animate={{
        y: 0,
        backdropFilter: scrollY >= 100 ? "blur(20px)" : "blur(10px)",
        backgroundColor:
          scrollY >= 100 ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.7)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-4 left-4 right-4 z-50 rounded-full mx-auto max-w-6xl transition-all duration-300 ${
        scrollY >= 100 ? "px-4 py-2 shadow-2xl" : "px-6 py-4 shadow-lg"
      }`}
    >
      <nav className="relative mx-auto flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-2">
          <motion.img
            className={`transition-all duration-300 ${
              scrollY >= 100 ? "h-8 w-auto" : "h-12 w-auto"
            }`}
            src="/Trivano.png"
            alt="Company Logo"
            animate={{
              scale: scrollY >= 100 ? 0.8 : 1,
              opacity: scrollY >= 100 ? 0.9 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.h1
            className="text-white font-bold"
            animate={{
              fontSize: scrollY >= 100 ? "0.875rem" : "1.25rem",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Trivano
          </motion.h1>
        </div>

        <ul className="sticky left-4 right-4 top-4 z-[60] hidden items-center justify-center gap-x-5 md:flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              backgroundColor:
                scrollY >= 100 ? "rgba(28, 29, 26, 0.8)" : "transparent",
              scale: scrollY >= 100 ? 0.95 : 1,
            }}
            transition={{
              ease: "easeInOut",
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
                width: scrollY >= 100 ? "auto" : 0,
                opacity: scrollY >= 100 ? 1 : 0,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: scrollY >= 100 ? 0.1 : 0,
              }}
              className="!hidden overflow-hidden rounded-full md:!block"
            >
              <AnimatePresence>
                {scrollY >= 100 && (
                  <motion.ul
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0", opacity: 1 }}
                    exit={{
                      x: "100%",
                      opacity: 0,
                      transition: { ease: "easeInOut", duration: 0.2 },
                    }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
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
            scale: scrollY >= 100 ? 0.9 : 1,
            opacity: scrollY >= 100 ? 0 : 1,
            y: scrollY >= 100 ? -20 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.button
            className="bg-[#BAFF38] text-zinc-900 text-md px-6 py-2 rounded-full border border-gray-600 transition-colors hover:bg-[#a8e632] active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.button
            onClick={() => setActive((prev) => !prev)}
            animate={active ? "open" : "close"}
            className="relative flex h-8 w-8 items-center justify-center rounded-md md:hidden"
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
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
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
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
              className="absolute h-0.5 w-5 bg-black dark:bg-white"
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
    </motion.header>
  );
}
