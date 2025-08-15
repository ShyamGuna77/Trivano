import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import SlideArrowButton from "./SlideArrowButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0F0C] border-t border-white/10">
      {/* Newsletter Section */}
      <div className="py-16 md:py-20">
        <div className="px-4 md:px-6 max-w-7xl w-full mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#EAECE5] mb-4">
              Stay Updated with Trivano
            </h2>
            <p className="text-[#EAECE5]/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Get the latest updates, tips, and insights delivered directly to
              your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <div className="relative flex-1 w-full">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#EAECE5]/60" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/20 rounded-xl px-12 py-3 text-[#EAECE5] placeholder-[#EAECE5]/60 focus:outline-none focus:border-[#BAFF38]/50 transition-colors"
              />
            </div>
            <SlideArrowButton
              text="Subscribe"
              primaryColor="#BAFF38"
              textColor="text-black"
              hoverTextColor="group-hover:text-black"
              className="whitespace-nowrap"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="px-4 md:px-6 max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">
                    <Image src ="/Trivano.png" alt="logo" width={100} height={100} />
                  </span>
                </div>
                <span className="text-[#EAECE5] text-xl font-semibold">
                Trivano
                </span>
              </div>
              <p className="text-[#EAECE5]/70 text-sm leading-relaxed mb-6">
                Empowering remote teams with innovative collaboration tools that
                enhance productivity and streamline workflows.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#EAECE5]/70 text-sm">
                  <MapPin className="w-4 h-4 text-[#BAFF38]" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-[#EAECE5]/70 text-sm">
                  <Phone className="w-4 h-4 text-[#BAFF38]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-[#EAECE5]/70 text-sm">
                  <Mail className="w-4 h-4 text-[#BAFF38]" />
                  <span>hello@greenmetric.com</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-[#EAECE5] font-semibold text-lg mb-6">
                Product
              </h3>
              <ul className="space-y-4">
                {[
                  "Features",
                  "Pricing",
                  "Dashboard",
                  "Analytics",
                  "Integrations",
                  "API Documentation",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#EAECE5]/70 text-sm hover:text-[#BAFF38] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {item}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-[#EAECE5] font-semibold text-lg mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  "About Us",
                  "Careers",
                  "Blog",
                  "Press",
                  "Partners",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#EAECE5]/70 text-sm hover:text-[#BAFF38] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {item}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-[#EAECE5] font-semibold text-lg mb-6">
                Support
              </h3>
              <ul className="space-y-4">
                {[
                  "Help Center",
                  "Documentation",
                  "Status Page",
                  "Community",
                  "Security",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#EAECE5]/70 text-sm hover:text-[#BAFF38] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {item}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="px-4 md:px-6 max-w-7xl w-full mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[#EAECE5]/60 text-sm">
              © {currentYear} GreenMetric. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { name: "Twitter", icon: "𝕏" },
                { name: "LinkedIn", icon: "in" },
                { name: "GitHub", icon: "⚡" },
                { name: "Discord", icon: "💬" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-[#EAECE5]/60 hover:text-[#BAFF38] hover:border-[#BAFF38]/30 transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
