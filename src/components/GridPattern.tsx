import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
}

export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div
      className={cn("absolute inset-0 -z-10", "bg-remo-neutral-04", className)}
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--neutral-03)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--neutral-03)) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Some grid squares with different opacity for visual interest - responsive positioning */}
      <div className="absolute inset-0 hidden md:block">
        {/* Scattered highlighted squares - only show on larger screens */}
        <div
          className="absolute w-15 h-15 md:w-20 md:h-20 bg-remo-neutral-03/40"
          style={{ left: "15%", top: "160px" }}
        />
        <div
          className="absolute w-15 h-15 md:w-20 md:h-20 bg-remo-neutral-03/40"
          style={{ left: "15%", top: "960px" }}
        />
        <div
          className="absolute w-15 h-15 md:w-20 md:h-20 bg-remo-neutral-03/40"
          style={{ left: "28%", top: "560px" }}
        />
        <div
          className="absolute w-15 h-15 md:w-20 md:h-20 bg-remo-neutral-03/40"
          style={{ left: "45%", top: "320px" }}
        />
        <div
          className="absolute w-15 h-15 md:w-20 md:h-20 bg-remo-neutral-03/40"
          style={{ left: "56%", top: "720px" }}
        />
        <div
          className="absolute w-15 h-15 md:w-20 md:h-20 bg-remo-neutral-03/40"
          style={{ left: "72%", top: "240px" }}
        />
        <div
          className="absolute w-15 h-15 md:w-20 md:h-20 bg-remo-neutral-03/40"
          style={{ left: "78%", top: "880px" }}
        />
        <div
          className="absolute w-15 h-15 md:w-20 md:h-20 bg-remo-neutral-03/40"
          style={{ left: "83%", top: "480px" }}
        />
      </div>
    </div>
  );
}
