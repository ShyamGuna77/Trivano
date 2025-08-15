

"use client";
import { useState } from "react";
import SlideArrowButton from "./SlideArrowButton";
import NumberFlow from "@number-flow/react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing data
  const pricing = {
    starter: { monthly: 0, yearly: 0 },
    professional: { monthly: 29, yearly: 24 }, // 20% discount yearly
    enterprise: { monthly: 99, yearly: 82 }, // 20% discount yearly
  };

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="px-4 md:px-6 max-w-7xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#EAECE5] mb-6">
            Pricing for Teams
          </h2>
          <p className="text-[#EAECE5]/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your team. Start free and scale as you grow.
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-base transition-colors ${!isYearly ? 'text-[#EAECE5]' : 'text-[#EAECE5]/60'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? 'bg-[#BAFF38]' : 'bg-white/20'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-base transition-colors ${isYearly ? 'text-[#EAECE5]' : 'text-[#EAECE5]/60'}`}>
              Yearly
              <span className="ml-2 text-xs bg-[#BAFF38] text-black px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex items-center gap-8 max-w-[1200px] w-full flex-col lg:flex-row mx-auto">
        {/* Starter Plan */}
        <div className="flex flex-col gap-12 p-11 pr-[102px] rounded-3xl border border-white/10 bg-white/[0.04] w-full max-w-[389px]">
          <div className="flex flex-col gap-6 w-[247px]">
            <div className="flex flex-col gap-1">
              <h3
                className="text-white text-xl font-semibold leading-[159%] tracking-[-0.2px]"
                style={{
                  fontFamily:
                    "Gilroy-SemiBold, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Starter
              </h3>
              <p
                className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px] w-[232px]"
                style={{
                  fontFamily:
                    "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Perfect for individuals or small teams starting out.
              </p>
            </div>

            <div className="text-white text-[40px] font-semibold leading-[120%] tracking-[-0.6px]">
              Free
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Up to 5 users
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Basic dashboard access
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Task creation & management
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Real-time messaging
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Limited file sharing (5 GB)
                </span>
              </div>
            </div>
          </div>

          <SlideArrowButton 
            text="Get Started " 
            primaryColor="#BAFF38"
            textColor="text-black"
            hoverTextColor="group-hover:text-black"
          />
        </div>

        {/* Professional Plan - Most Popular */}
        <div className="flex flex-col gap-12 p-11 pr-[102px] rounded-3xl border border-[rgba(224,255,169,0.29)] bg-white/[0.04] w-full max-w-[389px] relative">
          <div className="absolute -top-3 right-[82px]">
            <div className="flex items-center justify-center px-[14px] py-1 rounded-[67px] bg-[#BAFF38]">
              <span
                className="text-[#0E0F0C] text-sm leading-[159%] tracking-[-0.2px]"
                style={{
                  fontFamily:
                    "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Most Popular
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-[248px]">
            <div className="flex flex-col gap-1">
              <h3
                className="text-white text-xl font-semibold leading-[159%] tracking-[-0.2px]"
                style={{
                  fontFamily:
                    "Gilroy-SemiBold, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Professional
              </h3>
              <p
                className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px] w-[232px]"
                style={{
                  fontFamily:
                    "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Ideal for growing teams needing advanced features.
              </p>
            </div>

            <div className="text-white leading-[159%] tracking-[-0.2px]">
              <span className="text-[40px] font-semibold leading-[120%] tracking-[-0.6px]">
                $<NumberFlow 
                  value={isYearly ? pricing.professional.yearly : pricing.professional.monthly} 
                  format={{ notation: "standard" }}
                  transformTiming={{ duration: 400, easing: "ease-out" }}
                />
              </span>
              <span className="text-[#AAACA6] text-xl font-medium">
                /{isYearly ? 'year' : 'month'}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Up to 50 users
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Everything in Starter
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Advanced analytics
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Unlimited file sharing
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Team management tools
                </span>
              </div>
            </div>
          </div>

          <SlideArrowButton 
            text="Upgrade Now" 
            primaryColor="#BAFF38"
            textColor="text-black"
            hoverTextColor="group-hover:text-black"
          />
        </div>

        {/* Enterprise Plan */}
        <div className="flex flex-col gap-12 p-11 pr-[102px] rounded-3xl border border-white/10 bg-white/[0.04] w-full max-w-[389px]">
          <div className="flex flex-col gap-6 w-[247px]">
            <div className="flex flex-col gap-1">
              <h3
                className="text-white text-xl font-semibold leading-[159%] tracking-[-0.2px]"
                style={{
                  fontFamily:
                    "Gilroy-SemiBold, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Enterprise
              </h3>
              <p
                className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px] w-[263px]"
                style={{
                  fontFamily:
                    "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Best for large teams and enterprises with custom needs.
              </p>
            </div>

            <div className="text-white leading-[159%] tracking-[-0.2px]">
              <span className="text-[40px] font-semibold leading-[120%] tracking-[-0.6px]">
                $<NumberFlow 
                  value={isYearly ? pricing.enterprise.yearly : pricing.enterprise.monthly} 
                  format={{ notation: "standard" }}
                  transformTiming={{ duration: 400, easing: "ease-out" }}
                />
              </span>
              <span className="text-[#AAACA6] text-xl font-medium">
                /{isYearly ? 'year' : 'month'}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Unlimited users
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Everything in Professional
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Custom workflows
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  API integrations
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 2.94982C11.44 2.35982 12.57 2.35982 13.27 2.94982L14.85 4.30982C15.15 4.56982 15.71 4.77982 16.11 4.77982H17.81C18.87 4.77982 19.74 5.64982 19.74 6.70982V8.40982C19.74 8.79982 19.95 9.36982 20.21 9.66982L21.57 11.2498C22.16 11.9398 22.16 13.0698 21.57 13.7698L20.21 15.3498C19.95 15.6498 19.74 16.2098 19.74 16.6098V18.3098C19.74 19.3698 18.87 20.2398 17.81 20.2398H16.11C15.72 20.2398 15.15 20.4498 14.85 20.7098L13.27 22.0698C12.58 22.6598 11.45 22.6598 10.75 22.0698L9.17 20.7098C8.87 20.4498 8.31 20.2398 7.91 20.2398H6.18C5.12 20.2398 4.25 19.3698 4.25 18.3098V16.5998C4.25 16.2098 4.04 15.6498 3.79 15.3498L2.44 13.7598C1.86 13.0698 1.86 11.9498 2.44 11.2598L3.79 9.66982C4.04 9.36982 4.25 8.80982 4.25 8.41982V6.69982C4.25 5.63982 5.12 4.76982 6.18 4.76982H7.91C8.3 4.76982 8.87 4.55982 9.17 4.29982L10.75 2.94982Z"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.37988 12.5001L10.7899 14.9201L15.6199 10.0801"
                    stroke="#BAFF38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#AAACA6] text-base leading-[159%] tracking-[-0.2px]"
                  style={{
                    fontFamily:
                      "Gilroy-Regular, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Dedicated account manager
                </span>
              </div>
            </div>
          </div>

          <SlideArrowButton 
            text="Contact Sales" 
            primaryColor="#BAFF38"
            textColor="text-black"
            hoverTextColor="group-hover:text-black"
          />
        </div>
      </div>
      </div>
    </section>
  );
}

