"use client"


import { useEffect, useState } from "react";

export function EncryptionCard() {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3); 
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
    greenBorder: "#A2B788",
    labelGreen: "rgba(233, 255, 199, 0.95)",
  };

  return (
    <>
      <style>{`
        .encryption-flow-pulse {
          animation: flowPulse 2s ease-in-out infinite;
        }
        
        @keyframes flowPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      <div
        className="relative w-full max-w-[527px] h-[400px] md:h-[475px] rounded-[24px] border overflow-hidden"
        style={{
          borderColor: colors.glassWhite10,
          backgroundColor: colors.glassWhite04,
        }}
      >
        {/* Background Glow */}
        <div
          className="absolute w-[606px] h-[348px] rotate-[-5.604deg] opacity-12 blur-[163px]"
          style={{
            left: "219px",
            top: "-236px",
            background: `linear-gradient(180deg, ${colors.themeGreen} 0%, #FFFF38 100%)`,
          }}
        ></div>

        {/* Header Content */}
        <div className="absolute left-[62px] top-[60px] w-[353px] h-[102px] flex flex-col items-start gap-4">
          <h3 className="text-white font-gilroy-semibold text-[30px] font-normal leading-[120%] tracking-[-0.45px] overflow-hidden text-ellipsis whitespace-nowrap w-full">
            End-to-End Encryption
          </h3>
          <p
            className="font-gilroy-regular text-base font-normal leading-[159%] tracking-[-0.2px]"
            style={{ color: colors.neutral02 }}
          >
            Enjoy seamless service and reliable performance around the clock,
            without any interruptions.
          </p>
        </div>

        {/* Complex Icon Grid Illustration */}
        <div className="absolute left-[-32px] top-[152px] w-[591px] h-[336px]">
          {/* Background Rectangle */}
          <div
            className="absolute left-0 top-0 w-[591px] h-[336px] opacity-20"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, rgba(115, 115, 115, 0) 100%)",
            }}
          ></div>

          {/* Icons Group */}
          <div className="absolute left-[60px] top-0 w-[472px] h-[336px]">
            {/* Top Row Icons */}
            <div
              className="absolute left-0 top-0 w-16 h-16 rounded-[10px] border opacity-10"
              style={{ borderColor: colors.greenBorder }}
            ></div>
            <div
              className="absolute left-[68px] top-0 w-16 h-16 rounded-[10px] border opacity-10"
              style={{ borderColor: colors.greenBorder }}
            ></div>
            <div
              className="absolute left-[136px] top-0 w-[200px] h-16 rounded-[10px] border opacity-10"
              style={{ borderColor: colors.greenBorder }}
            ></div>
            <div
              className="absolute left-[340px] top-0 w-16 h-16 rounded-[10px] border opacity-10"
              style={{ borderColor: colors.greenBorder }}
            ></div>
            <div
              className="absolute left-[408px] top-0 w-16 h-16 rounded-[10px] border opacity-10"
              style={{ borderColor: colors.greenBorder }}
            ></div>

            {/* Left Side Labels */}
            <div className="absolute left-0 top-[68px] w-[132px] h-[200px] flex flex-col gap-1">
              <div className="w-[132px] h-16 relative">
                <div
                  className="absolute inset-0 rounded-[10px] border"
                  style={{ borderColor: colors.greenBorder }}
                ></div>
                <span
                  className="absolute left-10 top-[22px] font-rubik text-sm font-normal leading-5"
                  style={{ color: colors.labelGreen }}
                >
                  Layouts
                </span>
              </div>
              <div className="w-[132px] h-16 relative">
                <div
                  className="absolute inset-0 rounded-[10px] border"
                  style={{ borderColor: colors.greenBorder }}
                ></div>
                <span
                  className="absolute left-[46px] top-[22px] font-rubik text-sm font-normal leading-5"
                  style={{ color: colors.labelGreen }}
                >
                  Styles
                </span>
              </div>
              <div className="w-[132px] h-16 relative">
                <div
                  className="absolute inset-0 rounded-[10px] border"
                  style={{ borderColor: colors.greenBorder }}
                ></div>
                <span
                  className="absolute left-9 top-[22px] font-rubik text-sm font-normal leading-5"
                  style={{ color: colors.labelGreen }}
                >
                  Variables
                </span>
              </div>
            </div>

            {/* Right Side Icon Grid */}
            <div className="absolute left-[340px] top-[68px] w-[132px] h-[200px] flex flex-wrap gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-16 h-16 relative">
                  <div
                    className="absolute inset-0 rounded-[10px] border"
                    style={{ borderColor: colors.greenBorder }}
                  ></div>
                  {[1, 3, 5].includes(i) && (
                    <div
                      className="absolute left-6 top-6 w-4 h-4 rounded-full border-[1.5px] opacity-10"
                      style={{ borderColor: colors.greenBorder }}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Row Icons */}
            <div
              className="absolute left-0 top-[272px] w-16 h-16 rounded-[10px] border opacity-10"
              style={{ borderColor: colors.greenBorder }}
            ></div>
            <div
              className="absolute left-[68px] top-[272px] w-16 h-16 rounded-[10px] border opacity-10"
              style={{ borderColor: colors.greenBorder }}
            ></div>
            <div
              className="absolute left-[136px] top-[272px] w-[200px] h-16 rounded-[10px] border opacity-10"
              style={{ borderColor: colors.greenBorder }}
            ></div>
            <div
              className="absolute left-[340px] top-[272px] w-16 h-16 rounded-[10px] border opacity-10"
              style={{ borderColor: colors.greenBorder }}
            ></div>
            <div
              className="absolute left-[408px] top-[272px] w-16 h-16 rounded-[10px] border opacity-10"
              style={{ borderColor: colors.greenBorder }}
            ></div>

            {/* Animated Connection Lines */}
            {/* Left to Center Animation */}
            <svg
              className={`absolute left-[132px] top-[100px] w-[73px] h-[138px] transition-opacity duration-500 ${
                animationStep === 1 ? "opacity-100" : "opacity-25"
              }`}
              viewBox="0 0 73 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M9 0.0996094C8.72386 0.0996094 8.5 0.323467 8.5 0.599609C8.5 0.875752 8.72386 1.09961 9 1.09961V0.0996094ZM9 1.09961H20.5046V0.0996094H9V1.09961ZM34.9794 11.0563L53.1488 58.5006L54.0826 58.1429L35.9133 10.6987L34.9794 11.0563ZM68.5575 69.0996H73V68.0996H68.5575V69.0996ZM53.1488 58.5006C55.5935 64.8844 61.7216 69.0996 68.5575 69.0996V68.0996C62.1359 68.0996 56.3792 64.1398 54.0826 58.1429L53.1488 58.5006ZM20.5046 1.09961C26.9262 1.09961 32.6829 5.05938 34.9794 11.0563L35.9133 10.6987C33.4685 4.31485 27.3405 0.0996094 20.5046 0.0996094V1.09961Z"
                  fill={colors.themeGreen}
                  className={animationStep === 1 ? "encryption-flow-pulse" : ""}
                />
                <path
                  d="M9 139.1C8.72386 139.1 8.5 138.876 8.5 138.6C8.5 138.323 8.72386 138.1 9 138.1V139.1ZM35.3872 128.178L34.9186 128.004L35.3872 128.178ZM9 138.1H20.3913V139.1H9V138.1ZM34.9186 128.004L53.2062 78.8465L54.1434 79.1952L35.8559 128.353L34.9186 128.004ZM68.6707 68.0996H73V69.0996H68.6707V68.0996ZM53.2062 78.8465C55.6099 72.3854 61.777 68.0996 68.6707 68.0996V69.0996C62.1948 69.0996 56.4014 73.1256 54.1434 79.1952L53.2062 78.8465ZM20.3913 138.1C26.8673 138.1 32.6606 134.074 34.9186 128.004L35.8559 128.353C33.4522 134.814 27.2851 139.1 20.3913 139.1V138.1Z"
                  fill={colors.themeGreen}
                  className={animationStep === 1 ? "encryption-flow-pulse" : ""}
                />
                <path
                  d="M9 68.5996H53"
                  stroke={colors.themeGreen}
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={animationStep === 1 ? "encryption-flow-pulse" : ""}
                />
                {/* Animated flow line */}
                {animationStep === 1 && (
                  <circle
                    r="3"
                    fill={colors.themeGreen}
                    className="opacity-100"
                  >
                    <animateMotion dur="2s" repeatCount="1">
                      <path d="M9 68.5996H53" />
                    </animateMotion>
                  </circle>
                )}
              </g>
            </svg>

            {/* Center to Right Animation */}
            <svg
              className={`absolute left-[267px] top-[100px] w-[73px] h-[138px] transition-opacity duration-500 ${
                animationStep === 2 ? "opacity-100" : "opacity-25"
              }`}
              viewBox="0 0 73 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M64 0.0996094C64.2761 0.0996094 64.5 0.323467 64.5 0.599609C64.5 0.875752 64.2761 1.09961 64 1.09961V0.0996094ZM64 1.09961H52.4954V0.0996094H64V1.09961ZM38.0206 11.0563L19.8512 58.5006L18.9174 58.1429L37.0867 10.6987L38.0206 11.0563ZM4.44251 69.0996H0V68.0996H4.44251V69.0996ZM19.8512 58.5006C17.4065 64.8844 11.2784 69.0996 4.44251 69.0996V68.0996C10.8641 68.0996 16.6208 64.1398 18.9174 58.1429L19.8512 58.5006ZM52.4954 1.09961C46.0738 1.09961 40.3171 5.05938 38.0206 11.0563L37.0867 10.6987C39.5315 4.31485 45.6595 0.0996094 52.4954 0.0996094V1.09961Z"
                  fill={colors.themeGreen}
                  className={animationStep === 2 ? "encryption-flow-pulse" : ""}
                />
                <path
                  d="M64 139.1C64.2761 139.1 64.5 138.876 64.5 138.6C64.5 138.323 64.2761 138.1 64 138.1V139.1ZM37.6128 128.178L38.0814 128.004L37.6128 128.178ZM64 138.1H52.6087V139.1H64V138.1ZM38.0814 128.004L19.7938 78.8465L18.8566 79.1952L37.1441 128.353L38.0814 128.004ZM4.32927 68.0996H0V69.0996H4.32927V68.0996ZM19.7938 78.8465C17.3901 72.3854 11.223 68.0996 4.32927 68.0996V69.0996C10.8052 69.0996 16.5986 73.1256 18.8566 79.1952L19.7938 78.8465ZM52.6087 138.1C46.1327 138.1 40.3394 134.074 38.0814 128.004L37.1441 128.353C39.5478 134.814 45.7149 139.1 52.6087 139.1V138.1Z"
                  fill={colors.themeGreen}
                  className={animationStep === 2 ? "encryption-flow-pulse" : ""}
                />
                <path
                  d="M64 68.5996H20"
                  stroke={colors.themeGreen}
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={animationStep === 2 ? "encryption-flow-pulse" : ""}
                />
                {/* Animated flow line */}
                {animationStep === 2 && (
                  <circle
                    r="3"
                    fill={colors.themeGreen}
                    className="opacity-100"
                  >
                    <animateMotion dur="2s" repeatCount="1">
                      <path d="M20 68.5996H64" />
                    </animateMotion>
                  </circle>
                )}
              </g>
            </svg>

            {/* Central icon glow animation */}
            <div
              className={`absolute left-[204px] top-[136px] w-16 h-16 rounded-2xl transition-all duration-500 shadow-[0_0_8px_0_rgba(248,248,248,0.25)_inset,0_32px_24px_-16px_rgba(0,0,0,0.40)]`}
              style={{
                backgroundColor: colors.themeGreen,
                boxShadow:
                  animationStep > 0
                    ? `0 0 20px 8px rgba(186, 255, 56, 0.4), 0 0 8px 0 rgba(248, 248, 248, 0.25) inset, 0 32px 24px -16px rgba(0, 0, 0, 0.40)`
                    : "0 0 8px 0 rgba(248, 248, 248, 0.25) inset, 0 32px 24px -16px rgba(0, 0, 0, 0.40)",
              }}
            >
              <div
                className="absolute inset-0 w-16 h-16 rounded-2xl border opacity-40"
                style={{ borderColor: colors.greenBorder }}
              ></div>
              <svg
                className="absolute left-[6px] top-[6px] w-[52px] h-[52px]"
                viewBox="0 0 52 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.0019 30.6694L33.9463 27.6139C33.6088 27.2764 33.6088 26.7307 33.9463 26.3932L37.0019 23.3376C39.0269 21.3127 39.0269 18.0267 37.0019 16.0018C34.977 13.9769 31.691 13.9769 29.6661 16.0018L26.6105 19.0574C26.273 19.3949 25.7274 19.3949 25.3899 19.0574L22.3343 16.0018C20.3073 13.9749 17.0234 13.9728 14.9964 15.9998C12.9695 18.0267 12.9715 21.3107 14.9964 23.3356L18.052 26.3912C18.3895 26.7287 18.3895 27.2743 18.052 27.6118L14.9964 30.6674C12.9715 32.6924 12.9715 35.9783 14.9964 38.0033C17.0214 40.0282 20.3073 40.0282 22.3323 38.0033L25.3879 34.9477C25.7253 34.6102 26.271 34.6102 26.6085 34.9477L29.6641 38.0033C31.689 40.0282 34.975 40.0282 36.9999 38.0033C39.0248 35.9783 39.0248 32.6924 36.9999 30.6674L37.0019 30.6694ZM32.7237 34.9477L29.6681 31.8921C27.6432 29.8671 24.3572 29.8671 22.3323 31.8921L19.2767 34.9477C18.9392 35.2852 18.3936 35.2852 18.0561 34.9477C17.7186 34.6102 17.7186 34.0645 18.0561 33.727L21.1117 30.6715C23.1366 28.6465 23.1366 25.3606 21.1117 23.3356L18.0561 20.28C17.7186 19.9425 17.7186 19.3969 18.0561 19.0594C18.3936 18.7219 18.9392 18.7219 19.2767 19.0594L22.3323 22.115C24.3572 24.1399 27.6432 24.1399 29.6681 22.115L32.7237 19.0594C33.0612 18.7219 33.6068 18.7219 33.9443 19.0594C34.2818 19.3969 34.2818 19.9425 33.9443 20.28L30.8887 23.3356C28.8638 25.3606 28.8638 28.6465 30.8887 30.6715L33.9443 33.7271C34.2818 34.0645 34.2818 34.6102 33.9443 34.9477C33.6068 35.2852 33.0612 35.2852 32.7237 34.9477Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
