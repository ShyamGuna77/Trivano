import React from "react";
import { ArrowRight } from "lucide-react";

interface SlideArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  primaryColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  variant?: "default" | "outline";
}

export default function SlideArrowButton({
  text = "Get Started",
  primaryColor = "#BAFF38",
  textColor = "text-black",
  hoverTextColor = "group-hover:text-zinc-900",
  variant = "default",
  className = "",
  ...props
}: SlideArrowButtonProps) {
  const baseClasses =
    "group relative rounded-full p-2 text-sm md:text-base lg:text-xl font-semibold min-h-[48px] md:min-h-[52px] flex items-center touch-manipulation active:scale-95 transition-transform duration-150";

  const variantClasses =
    variant === "outline"
      ? "border border-white/20 bg-transparent"
      : "border border-white bg-white";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      <div
        className="absolute left-0 top-0 flex h-full w-10 md:w-11 items-center justify-end rounded-full transition-all duration-200 ease-in-out group-hover:w-full group-active:w-full"
        style={{ backgroundColor: primaryColor }}
      >
        <span className="mr-2 md:mr-3 text-white transition-all duration-200 ease-in-out">
          <ArrowRight size={16} className="md:hidden" />
          <ArrowRight size={20} className="hidden md:block" />
        </span>
      </div>
      <span
        className={`relative left-3 md:left-4 z-10 whitespace-nowrap px-6 md:px-8 font-semibold ${textColor} transition-all duration-200 ease-in-out group-hover:-left-2 md:group-hover:-left-3 group-active:-left-2 md:group-active:-left-3 ${hoverTextColor}`}
      >
        {text}
      </span>
    </button>
  );
}
