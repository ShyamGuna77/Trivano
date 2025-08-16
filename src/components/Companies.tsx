/* eslint-disable @next/next/no-img-element */
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export function Companies() {
  return (
    <section id="companies ">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center md:text-3xl lg:text-4xl text-[#EAECE5] text-4xl font-semibold tracking-tight text-balance mt-8 mb-12">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-6">
            <Marquee className="max-w-full [--duration:40s]">
              {companies.map((logo, idx) => (
                <img
                  key={idx}
                  src={`https://cdn.magicui.design/companies/${logo}.svg`}
                  className="h-10 w-28 dark:brightness-0 dark:invert"
                  alt={logo}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-[#0E0F0C] to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-[#0E0F0C] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
