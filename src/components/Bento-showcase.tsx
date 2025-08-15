import { ArrowRight, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function BentoShowcase() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="px-4 md:px-6 max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#EAECE5] leading-tight">
                Explore our platform&apos;s features to enhance your experience
                and streamline workflow.
              </h2>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-[#0E0F0C]/50 border border-white/10 rounded-2xl p-6 hover:border-[#BAFF38]/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-[#BAFF38]/20 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-[#BAFF38]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#EAECE5] leading-relaxed">
                      Access tasks, messages, and analytics from your dashboard.
                    </h3>
                  </div>
                </div>
              </Card>

              <Card className="bg-[#0E0F0C]/50 border border-white/10 rounded-2xl p-6 hover:border-[#BAFF38]/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-[#BAFF38]/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#BAFF38]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#EAECE5] leading-relaxed">
                      Automate tasks and save time with tailored workflows.
                    </h3>
                  </div>
                </div>
              </Card>
            </div>

            {/* Description Text */}
            <div className="space-y-6">
              <p className="text-[#EAECE5]/70 text-lg leading-relaxed">
                This walkthrough highlights the unique features that set us
                apart from the competition.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#EAECE5]/60">
                <div>
                  <p>
                    New features are released monthly to enhance productivity.
                  </p>
                </div>
                <div>
                  <p>
                    Efficiency has improved significantly with our platform.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button className="bg-[#BAFF38] hover:bg-[#BAFF38]/90 text-black font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
                Explore Demo
              </Button>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/sidebento.png"
                alt="Trivano Dashboard Interface"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
