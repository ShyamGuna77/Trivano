import Image from "next/image";

export default function Testimonals() {
  // Component-specific colors
  const colors = {
    neutral01: "#EAECE5",
    neutral02: "#AAACA6",
    neutral03: "#292A27",
    white: "#FFF",
  };

  const testimonials = [
    {
      rating: "4.8/5 Rating",
      date: "Jun 9, 2025",
      text: "After we started using this platform, our efficiency has soared. The integrations work flawlessly, and the tools for collaboration are top-notch.",
      reviewerName: "Bessie Cooper",
      reviewerCompany: "The Walt Disney Company",
      reviewerImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
    },
    {
      rating: "4.5/5 Rating",
      date: "May 5, 2027",
      text: "Our team's productivity has skyrocketed since we adopted this platform. The security features are top-notch, and the mobile app is incredibly convenient.",
      reviewerName: "Emily Rodriguez",
      reviewerCompany: "Amazon.com, Inc.",
      reviewerImage:
        "https://plus.unsplash.com/premium_photo-1668896122585-e8f4a2d6c9ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlZW4lMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      rating: "4.8/5 Rating",
      date: "Sep 21, 2027",
      text: "We have been extremely satisfied with this platform. The automation capabilities are a game-changer, and the user permissions system is very flexible.",
      reviewerName: "David Patel",
      reviewerCompany: "Facebook, Inc.",
      reviewerImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww",
    },
  ];

  const TwitterIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-[15px]"
      style={{ fill: colors.white }}
    >
      <path
        d="M12.6009 0.5H15.0544L9.69434 6.85384L16 15.5H11.0627L7.19565 10.2561L2.77088 15.5H0.315936L6.04906 8.70384L0 0.5H5.06259L8.55808 5.29309L12.6009 0.5ZM11.7399 13.9769H13.0993L4.32394 1.94307H2.86506L11.7399 13.9769Z"
        fill="white"
      />
    </svg>
  );

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="px-4 md:px-6 max-w-7xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#EAECE5] mb-6">
            What Our Customers Say
          </h2>
          <p className="text-[#EAECE5]/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders
            are saying about our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-[#0E0F0C]/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#BAFF38]/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col h-full">
                {/* Header with rating and date */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <TwitterIcon />
                    <span className="text-[#EAECE5] text-sm font-medium">
                      {testimonial.rating}
                    </span>
                  </div>
                  <span className="text-[#EAECE5]/60 text-sm">
                    {testimonial.date}
                  </span>
                </div>

                {/* Testimonial text */}
                <blockquote className="text-[#EAECE5] text-base leading-relaxed mb-6 flex-grow">
                  &quot;{testimonial.text}&quot;
                </blockquote>

                {/* Reviewer info */}
                <div className="flex items-center gap-4 mt-auto">
                  <Image
                    src={testimonial.reviewerImage}
                    alt={testimonial.reviewerName}
                    className="rounded-xl object-cover"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="text-[#EAECE5] font-semibold text-base">
                      {testimonial.reviewerName}
                    </div>
                    <div className="text-[#BAFF38] text-sm font-medium">
                      {testimonial.reviewerCompany}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
