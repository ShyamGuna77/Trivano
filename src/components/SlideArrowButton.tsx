import React from "react";
import { ArrowRight } from "lucide-react";

interface SlideArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  primaryColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

export default function SlideArrowButton({
  text = "Get Started",
  primaryColor = "#BAFF38",
  textColor = "text-black",
  hoverTextColor = "group-hover:text-zinc-900",
  className = "",
  ...props
}: SlideArrowButtonProps) {
  return (
    <button
      className={`group relative rounded-full border border-white bg-white p-2 text-xl font-semibold ${className}`}
      {...props}
    >
      <div
        className="absolute left-0 top-0 flex h-full w-11 items-center justify-end rounded-full transition-all duration-200 ease-in-out group-hover:w-full"
        style={{ backgroundColor: primaryColor }}
      >
        <span className="mr-3 text-white transition-all duration-200 ease-in-out">
          <ArrowRight size={20} />
        </span>
      </div>
      <span
        className={`relative left-4 z-10 whitespace-nowrap px-8 font-semibold ${textColor} transition-all duration-200 ease-in-out group-hover:-left-3 ${hoverTextColor}`}
      >
        {text}
      </span>
    </button>
  );
}
