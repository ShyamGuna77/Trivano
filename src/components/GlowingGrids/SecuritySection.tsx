import { EncryptionCard } from "./EncryptionCard";
import { ComplianceCard } from "./CompilanceCard";
import { StatsCards } from "./StatsCard";


export function SecuritySection() {
  return (
    <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-[85px] py-6 px-4 md:py-12 md:px-8 lg:py-[24px] lg:px-[104px] xl:py-[24px] xl:px-[104px] min-h-screen bg-black">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-3 text-center px-4">
        <h1 className="text-white text-center font-gilroy-semibold text-2xl md:text-4xl lg:text-[48px] font-normal leading-[120%] tracking-[-0.72px]">
          Security You Can Trust
        </h1>
        <p className="text-neutral-02 text-center font-gilroy-regular text-sm md:text-base font-normal leading-[159%] tracking-[-0.2px]">
          Experience uninterrupted service and enjoy consistent performance
          every all day, nonstop.
        </p>
      </div>

      {/* Security Features */}
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-[1200px]">
        {/* Feature Cards */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-6 md:gap-8 w-full">
          <EncryptionCard />
          <ComplianceCard />
        </div>

        {/* Stats Cards */}
        <StatsCards />
      </div>
    </div>
  );
}
