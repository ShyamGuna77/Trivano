import { useEffect, useState } from "react";

export function ComplianceCard() {
  const [activeDot, setActiveDot] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Component-specific colors
  const colors = {
    themeGreen: "#BAFF38",
    neutral02: "#AAACA6",
    neutral04: "#0E0F0C",
    glassWhite04: "rgba(255, 255, 255, 0.04)",
    glassWhite05: "rgba(255, 255, 255, 0.05)",
    glassWhite10: "rgba(255, 255, 255, 0.10)",
    glassWhite40: "rgba(255, 255, 255, 0.40)",
    glassWhite70: "rgba(248, 248, 248, 0.70)",
    yellowBorder: "rgba(255, 249, 182, 0.1)",
    glassWhite01: "rgba(248, 248, 248, 0.01)",
  };

  return (
    <>
      <style>{`
        .compliance-dot-glow {
          animation: dotGlow 1s ease-out forwards;
        }
        
        @keyframes dotGlow {
          0% { 
            transform: scale(1);
            box-shadow: 0 0 0 rgba(186, 255, 56, 0);
          }
          50% { 
            transform: scale(1.2);
            box-shadow: 0 0 20px rgba(186, 255, 56, 0.6);
          }
          100% { 
            transform: scale(1.1);
            box-shadow: 0 0 16px rgba(186, 255, 56, 0.4);
          }
        }
      `}</style>

      <div
        className="relative w-full max-w-[673px] h-[400px] md:h-[475px] rounded-[24px] border overflow-hidden"
        style={{
          borderColor: colors.glassWhite10,
          backgroundColor: colors.glassWhite04,
        }}
      >
        {/* Background Glow */}
        <div
          className="absolute w-[606px] h-[348px] rotate-[-5.604deg] opacity-12 blur-[163px]"
          style={{
            left: "-149px",
            top: "-236px",
            background: `linear-gradient(180deg, ${colors.themeGreen} 0%, #FFFF38 100%)`,
          }}
        ></div>

        {/* Header Content */}
        <div className="absolute left-[62px] top-[60px] w-[408px] h-[102px] flex flex-col items-start gap-4">
          <h3 className="text-white font-gilroy-semibold text-[30px] font-normal leading-[120%] tracking-[-0.45px] overflow-hidden text-ellipsis whitespace-nowrap">
            Global Standards Compliance
          </h3>
          <p
            className="font-gilroy-regular text-base font-normal leading-[159%] tracking-[-0.2px]"
            style={{ color: colors.neutral02 }}
          >
            Meet the highest security benchmarks available today for your
            complete peace of mind.
          </p>
        </div>

        {/* Chart Illustration */}
        <div
          className="absolute left-[62px] top-[211px] w-[549px] h-[336px] rounded-2xl border backdrop-blur-[50px]"
          style={{
            borderColor: colors.glassWhite10,
            backgroundColor: colors.glassWhite01,
          }}
        >
          {/* Progress Bars Container */}
          <div className="absolute left-[12px] top-[56px] w-[525px] h-[280px] px-4 flex justify-between items-center">
            {/* Vertical Progress Lines with Animated Dots */}
            {Array.from({ length: 10 }).map((_, i) => {
              // Map column positions to months: positions 1,4,7 = Aug,Sep,Oct
              const isMonthColumn = [1, 4, 7].includes(i);
              const monthIndex = [1, 4, 7].indexOf(i); // 0=Aug, 1=Sep, 2=Oct
              const isActive = isMonthColumn && monthIndex <= activeDot;

              return (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center gap-2 h-full"
                >
                  <div
                    className={`w-8 h-8 rounded-[32px] backdrop-blur-[50px] flex items-center justify-center transition-all duration-1000 ${
                      isActive ? "compliance-dot-glow" : ""
                    }`}
                    style={{
                      backgroundColor: isActive
                        ? colors.themeGreen
                        : colors.glassWhite05,
                      boxShadow: isActive
                        ? `0 0 16px 4px rgba(186, 255, 56, 0.4)`
                        : "none",
                    }}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-1000`}
                      style={{
                        backgroundColor: isActive
                          ? colors.neutral04
                          : colors.glassWhite05,
                        transform: isActive ? "scale(1.5)" : "scale(1)",
                      }}
                    ></div>
                  </div>
                  <svg
                    className="w-0 flex-1"
                    viewBox="0 0 2 193"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 264.6V0.599609"
                      stroke={isActive ? colors.themeGreen : "#F8F8F8"}
                      strokeOpacity={isActive ? "0.8" : "0.1"}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient
                        id="progressGradient"
                        x1="1.5"
                        y1="0.599609"
                        x2="1.5"
                        y2="264.6"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F8F8F8" stopOpacity="0.05" />
                        <stop
                          offset="0.530519"
                          stopColor="#F8F8F8"
                          stopOpacity="0.5"
                        />
                        <stop
                          offset="1"
                          stopColor="#F8F8F8"
                          stopOpacity="0.05"
                        />
                      </linearGradient>
                      <linearGradient
                        id="activeProgressGradient"
                        x1="1.5"
                        y1="0.599609"
                        x2="1.5"
                        y2="264.6"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor={colors.themeGreen} stopOpacity="0.2" />
                        <stop
                          offset="0.530519"
                          stopColor={colors.themeGreen}
                          stopOpacity="0.8"
                        />
                        <stop
                          offset="1"
                          stopColor={colors.themeGreen}
                          stopOpacity="0.2"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              );
            })}
          </div>

          {/* Month Labels with Animation */}
          <div className="absolute left-[23px] top-6 w-[526px] h-[19px] px-[11px] flex justify-between items-center">
            <span
              className={`font-gilroy text-xs font-medium leading-[159%] transition-all duration-1000`}
              style={{
                color: activeDot >= 0 ? colors.themeGreen : colors.glassWhite70,
                fontWeight: activeDot >= 0 ? "600" : "500",
              }}
            >
              Aug
            </span>
            <span
              className={`font-gilroy text-xs font-medium leading-[159%] transition-all duration-1000`}
              style={{
                color: activeDot >= 1 ? colors.themeGreen : colors.glassWhite70,
                fontWeight: activeDot >= 1 ? "600" : "500",
              }}
            >
              Sep
            </span>
            <span
              className={`font-gilroy text-xs font-medium leading-[159%] transition-all duration-1000`}
              style={{
                color: activeDot >= 2 ? colors.themeGreen : colors.glassWhite70,
                fontWeight: activeDot >= 2 ? "600" : "500",
              }}
            >
              Oct
            </span>
          </div>

          {/* Progress Items */}
          <div className="absolute left-5 top-[98px] w-[570px] h-[220px]">
            {/* Mobile app */}
            <div
              className="absolute left-[148px] top-0 w-[422px] h-10 rounded-[10px] border backdrop-blur-[50px] flex items-center p-1"
              style={{
                borderColor: colors.yellowBorder,
                backgroundColor: colors.glassWhite01,
              }}
            >
              <div
                className="w-[87px] h-8 rounded-lg flex items-center px-3"
                style={{ backgroundColor: colors.glassWhite05 }}
              >
                <span
                  className="font-gilroy-semibold text-xs leading-[159%] tracking-[-0.2px]"
                  style={{ color: colors.glassWhite70 }}
                >
                  Mobile app
                </span>
              </div>
            </div>

            {/* Release Bento - Highlighted */}
            <div
              className="absolute left-0 top-[60px] w-[410px] h-10 rounded-[10px] border backdrop-blur-[50px] flex items-center p-1"
              style={{
                borderColor: colors.yellowBorder,
                backgroundColor: colors.glassWhite05,
              }}
            >
              <div
                className="w-[109px] h-8 rounded-lg flex items-center px-3"
                style={{ backgroundColor: colors.themeGreen }}
              >
                <span
                  className="font-gilroy-semibold text-xs leading-[159%] tracking-[-0.2px]"
                  style={{ color: colors.neutral04 }}
                >
                  Release Bento
                </span>
              </div>
            </div>

            {/* UI elements */}
            <div
              className="absolute left-[99px] top-[120px] w-[410px] h-10 rounded-[10px] border backdrop-blur-[50px] flex items-center p-1"
              style={{
                borderColor: colors.yellowBorder,
                backgroundColor: colors.glassWhite01,
              }}
            >
              <div
                className="w-[94px] h-8 rounded-lg flex items-center px-3"
                style={{ backgroundColor: colors.glassWhite05 }}
              >
                <span
                  className="font-gilroy-semibold text-xs leading-[159%] tracking-[-0.2px] opacity-50"
                  style={{ color: colors.glassWhite70 }}
                >
                  UI elements
                </span>
              </div>
            </div>

            {/* Core Dashboard v2 - Special styling */}
            <div
              className="absolute left-[148px] top-[180px] w-[410px] h-10 rounded-[10px] border-[1.5px] backdrop-blur-[50px] flex items-center p-1"
              style={{
                borderColor: colors.glassWhite40,
                backgroundColor: colors.glassWhite01,
                boxShadow: "2px 4px 16px 0 rgba(248, 248, 248, 0.06) inset",
              }}
            >
              <div
                className="w-[136px] h-8 rounded-lg border-[1.5px] backdrop-blur-[50px] flex items-center px-3"
                style={{
                  borderColor: colors.glassWhite40,
                  backgroundColor: colors.glassWhite05,
                  boxShadow: "2px 4px 16px 0 rgba(248, 248, 248, 0.06) inset",
                }}
              >
                <span
                  className="font-rubik text-xs font-semibold leading-4 opacity-50"
                  style={{ color: colors.glassWhite70 }}
                >
                  Core Dashboard v2
                </span>
              </div>
            </div>

            {/* User Icon/Cursor */}
            <svg
              className="absolute left-[148px] top-[76px] w-5 h-5"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.0837 2.78262C3.89594 2.71518 3.70543 2.64675 3.54457 2.60494C3.39197 2.56528 3.09736 2.49954 2.78149 2.60892C2.41936 2.73433 2.13477 3.01892 2.00936 3.38105C1.89997 3.69692 1.96572 3.99153 2.00538 4.14413C2.04719 4.30499 2.11561 4.4955 2.18306 4.68326L6.95715 17.9826C7.04095 18.2162 7.12132 18.4401 7.20064 18.6127C7.26765 18.7585 7.42004 19.0774 7.75138 19.2577C8.11368 19.4549 8.54991 19.4606 8.91727 19.273C9.25322 19.1015 9.41392 18.7867 9.48474 18.6427C9.56856 18.4723 9.65478 18.2505 9.74469 18.0192L11.8937 12.4933L17.4197 10.3443C17.6509 10.2544 17.8727 10.1682 18.0431 10.0843C18.1871 10.0135 18.5019 9.85282 18.6734 9.51687C18.861 9.14952 18.8553 8.71329 18.6581 8.35098C18.4778 8.01965 18.1589 7.86726 18.0131 7.80025C17.8405 7.72093 17.6166 7.64056 17.383 7.55676L4.0837 2.78262Z"
                fill="#121212"
                stroke="#F8F8F8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
