/* eslint-disable @next/next/no-img-element */
import { GridBackground } from "./GridPattern";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0E0F0C] text-[#EAECE5] relative overflow-hidden">
      <GridBackground />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center pt-6 md:pt-12 px-4 md:px-6">
        <div className="flex w-full max-w-6xl justify-between items-center rounded-[42px] border border-[#292A27] bg-white/6 backdrop-blur-[11px] px-3 md:px-6 py-3 h-[68px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#BAFF38] flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <g clipPath="url(#clip0_22763_7)">
                  <path
                    d="M34.1416 24.7162L30.2142 20.7888C29.7804 20.355 29.7804 19.6537 30.2142 19.2199L34.1416 15.2925C36.7443 12.6898 36.7443 8.46623 34.1416 5.86353C31.5389 3.26082 27.3154 3.26082 24.7126 5.86353L20.7852 9.79096C20.3514 10.2247 19.6501 10.2247 19.2163 9.79096L15.2889 5.86353C12.6836 3.25823 8.46263 3.25563 5.85733 5.86093C3.25203 8.46623 3.25463 12.6872 5.85733 15.2899L9.78477 19.2173C10.2185 19.6511 10.2185 20.3524 9.78477 20.7862L5.85734 24.7136C3.25463 27.3163 3.25463 31.5399 5.85733 34.1426C8.46004 36.7453 12.6836 36.7453 15.2863 34.1426L19.2137 30.2152C19.6475 29.7814 20.3488 29.7814 20.7826 30.2152L24.7101 34.1426C27.3128 36.7453 31.5363 36.7453 34.139 34.1426C36.7417 31.5399 36.7417 27.3164 34.139 24.7136L34.1416 24.7162ZM28.6427 30.2152L24.7152 26.2877C22.1125 23.685 17.889 23.685 15.2863 26.2877L11.3589 30.2152C10.9251 30.649 10.2237 30.649 9.78996 30.2152C9.35618 29.7814 9.35618 29.0801 9.78996 28.6463L13.7174 24.7188C16.3201 22.1161 16.3201 17.8926 13.7174 15.2899L9.78996 11.3625C9.35618 10.9287 9.35618 10.2273 9.78996 9.79356C10.2237 9.35977 10.9251 9.35977 11.3589 9.79356L15.2863 13.721C17.889 16.3237 22.1125 16.3237 24.7152 13.721L28.6427 9.79356C29.0765 9.35977 29.7778 9.35977 30.2116 9.79356C30.6454 10.2273 30.6454 10.9287 30.2116 11.3625L26.2841 15.2899C23.6814 17.8926 23.6814 22.1161 26.2841 24.7188L30.2116 28.6463C30.6454 29.0801 30.6454 29.7814 30.2116 30.2152C29.7778 30.649 29.0765 30.649 28.6427 30.2152Z"
                    fill="#BAFF38"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_22763_7">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-white text-xl md:text-[28px] font-bold leading-[120%]">
              Remoplus
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            <a
              href="#"
              className="text-[#EAECE5] text-base font-medium hover:text-[#BAFF38] transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-[#EAECE5] text-base font-medium hover:text-[#BAFF38] transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-[#EAECE5] text-base font-medium hover:text-[#BAFF38] transition-colors"
            >
              Pricing
            </a>
          </div>

          {/* Contact Button */}
          <div className="flex items-center gap-2 rounded-full bg-[#BAFF38] px-3 md:px-[18px] py-0.5 pl-0.5">
            <div className="flex items-center gap-2 rounded-full bg-white p-1.5 md:p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-6 md:h-6"
              >
                <path
                  d="M14.43 5.93005L20.5 12.0001L14.43 18.0701"
                  stroke="#0E0F0C"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 12H20.33"
                  stroke="#0E0F0C"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[#0E0F0C] text-sm md:text-base font-medium hidden sm:inline">
              Contact Us
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center pt-16 md:pt-24 lg:pt-32 px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 md:gap-12 max-w-4xl">
          {/* Tagline with avatars */}
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3 rounded-[31px] bg-[#292A27] px-3 md:px-[18px] py-1 pl-1">
              <div className="flex items-center gap-[-10px]">
                <div className="w-6 md:w-7 h-6 md:h-7 rounded-full border border-white bg-[#A3E32A] overflow-hidden">
                 
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 md:w-7 h-6 md:h-7 rounded-full border border-white bg-[#A3E32A] overflow-hidden -ml-1.5 md:-ml-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 md:w-7 h-6 md:h-7 rounded-full border border-white bg-[#A3E32A] overflow-hidden -ml-1.5 md:-ml-2">
                  <img
                    src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 md:w-7 h-6 md:h-7 rounded-full border border-white bg-[#A3E32A] overflow-hidden -ml-1.5 md:-ml-2">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-[#EAECE5] text-xs md:text-sm font-normal leading-[159%] tracking-[-0.2px]">
                Where productivity meets simplicity.
              </span>
            </div>

            {/* Main headline and subtitle */}
            <div className="flex flex-col items-center gap-2 md:gap-3.5">
              <h1 className="text-[#EAECE5] text-center text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-semibold leading-[120%] tracking-[-1.02px] max-w-[825px]">
                Empowering Your Remote Team for Success
              </h1>
              <p className="text-[#EAECE5] text-center text-base md:text-lg lg:text-xl font-normal leading-[159%] tracking-[-0.2px] max-w-full">
                Help your team effectively align tasks for remote work.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
            {/* Book A Demo Button */}
            <div className="flex items-center gap-2 md:gap-2.5 rounded-full bg-white px-4 md:px-6 py-0.5 pl-0.5 w-full sm:w-auto justify-center">
              <div className="flex items-center gap-2 rounded-full bg-[#0E0F0C] p-2 md:p-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-6 md:h-6"
                >
                  <path
                    d="M14.43 5.92993L20.5 11.9999L14.43 18.0699"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[#0E0F0C] text-sm md:text-base font-medium leading-[159%] tracking-[-0.2px]">
                Book A Demo
              </span>
            </div>

            {/* Get Started Button */}
            <div className="flex items-center gap-2 md:gap-2.5 rounded-full bg-[#BAFF38] px-4 md:px-6 py-0.5 pl-0.5 w-full sm:w-auto justify-center">
              <div className="flex items-center gap-2 rounded-full bg-white p-2 md:p-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-6 md:h-6"
                >
                  <path
                    d="M14.43 5.92993L20.5 11.9999L14.43 18.0699"
                    stroke="#0E0F0C"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="#0E0F0C"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[#0E0F0C] text-sm md:text-base font-medium leading-[159%] tracking-[-0.2px]">
                Get Started
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="mt-16 md:mt-24 lg:mt-32 px-4 md:px-6 max-w-7xl w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f5e1d64b4c89af898c5061672d6466709ce74511?width=2426"
            alt="Remoplus Dashboard"
            className="w-full h-auto rounded-2xl md:rounded-3xl border border-white/10"
          />
        </div>

        {/* Logo Strip */}
        <div className="mt-16 md:mt-24 lg:mt-32 mb-8 md:mb-16 flex items-center justify-between w-full max-w-6xl opacity-32 gap-4 md:gap-8 overflow-x-auto px-4 md:px-0">
          <img
            src="https://via.placeholder.com/120x28/FFFFFF/FFFFFF?text=Logo"
            alt="Partner Logo"
            className="h-7 md:h-9 w-auto flex-shrink-0"
          />
          <img
            src="https://via.placeholder.com/120x28/FFFFFF/FFFFFF?text=Logo"
            alt="Partner Logo"
            className="h-7 md:h-9 w-auto flex-shrink-0"
          />
          <img
            src="https://via.placeholder.com/120x28/FFFFFF/FFFFFF?text=Logo"
            alt="Partner Logo"
            className="h-7 md:h-9 w-auto flex-shrink-0"
          />
          <img
            src="https://via.placeholder.com/120x28/FFFFFF/FFFFFF?text=Logo"
            alt="Partner Logo"
            className="h-7 md:h-9 w-auto flex-shrink-0"
          />
          <img
            src="https://via.placeholder.com/120x28/FFFFFF/FFFFFF?text=Logo"
            alt="Partner Logo"
            className="h-7 md:h-9 w-auto flex-shrink-0 hidden sm:block"
          />
          <img
            src="https://via.placeholder.com/120x28/FFFFFF/FFFFFF?text=Logo"
            alt="Partner Logo"
            className="h-7 md:h-9 w-auto flex-shrink-0 hidden lg:block"
          />
        </div>
      </main>
    </div>
  );
}
