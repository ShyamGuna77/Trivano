import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageSquare,
  FolderOpen,
  CheckSquare,
  Video,
} from "lucide-react";
import Image from "next/image";
import SlideArrowButton from "./SlideArrowButton";

export default function Efforts() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background decorative circles - matching your brand colors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BAFF38]/10 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#BAFF38]/5 rounded-full translate-y-40 -translate-x-40"></div>

      {/* Match the exact same container structure as other sections */}
      <div className="px-4 md:px-6 max-w-7xl w-full mx-auto relative">
        {/* Header text */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#EAECE5] mb-6">
            Powerful Remote Collaboration
          </h2>
          <p className="text-[#EAECE5]/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Our features meet the unique needs of remote teams, helping you
            achieve more together with seamless collaboration tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Pending Tasks Widget */}
          <div className="relative">
            <Image
              src="/Grid1.png"
              alt="Pending Tasks Widget"
              width={400}
              height={300}
              className="max-w-sm rounded-2xl border border-white/10"
            />
          </div>

          {/* Right side - Features text and checklist */}
          <div className="space-y-8">
            <div>
              <p className="text-[#EAECE5]/70 text-lg leading-relaxed mb-8">
                Real-time communication solutions that keep your entire team
                aligned, engaged, and working together seamlessly.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#BAFF38]/20 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-[#BAFF38]" />
                  </div>
                  <span className="text-[#EAECE5]">Real-time messaging</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#BAFF38]/20 flex items-center justify-center">
                    <FolderOpen className="w-4 h-4 text-[#BAFF38]" />
                  </div>
                  <span className="text-[#EAECE5]">
                    File sharing and storage
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#BAFF38]/20 flex items-center justify-center">
                    <CheckSquare className="w-4 h-4 text-[#BAFF38]" />
                  </div>
                  <span className="text-[#EAECE5]">Task management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#BAFF38]/20 flex items-center justify-center">
                    <Video className="w-4 h-4 text-[#BAFF38]" />
                  </div>
                  <span className="text-[#EAECE5]">Video conferencing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mt-24">
          {/* Left side - Description and buttons */}
          <div className="space-y-8">
            <p className="text-[#EAECE5]/70 text-lg leading-relaxed">
              Innovative collaborative tools designed to significantly boost
              overall team productivity and efficiency with advanced features.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="border-white/20 text-[#EAECE5] hover:bg-[#BAFF38]/10 hover:border-[#BAFF38]/30 px-6 py-3 rounded-xl bg-transparent"
              >
                <div className="w-5 h-5 rounded-full bg-[#BAFF38] mr-3"></div>
                Streamlined Workspaces
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-[#EAECE5] hover:bg-[#BAFF38]/10 hover:border-[#BAFF38]/30 px-6 py-3 rounded-xl bg-transparent"
              >
                <div className="w-5 h-5 rounded-full bg-[#BAFF38] mr-3"></div>
                File Sharing
              </Button>
            </div>

            <SlideArrowButton
              text="Learn More"
              primaryColor="#BAFF38"
              textColor="text-black"
              hoverTextColor="group-hover:text-white"
            />
          </div>

          {/* Right side - Calendar Widget */}
          <div className="flex justify-end">
            <Image
              src="/Grid2.png"
              alt="Calendar Widget"
              width={400}
              height={350}
              className="max-w-sm w-full rounded-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
