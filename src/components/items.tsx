import {
  CalendarSearch,
  MessageSquareDot,
  ClipboardList,
  TabletSmartphone,
} from "lucide-react";

export const items = [
  {
    icon: <CalendarSearch />,
    title: "Shared Calendar",
    description: "Use a Calender to schedule meetings and events.",
  },
  {
    icon: <MessageSquareDot />,
    title: "Real-time Messaging",
    description: "Stay Connected. Chat with your team in real-time.",
  },
  {
    icon: <ClipboardList />,
    title: "Task Management",
    description: "Use kanban boards to manage your tasks and projects.",
  },
  {
    icon: <TabletSmartphone />,
    title: "Mobile App Support",
    description: "Access your workspace on the go with our mobile app.",
  },
];

export const FeautureItems = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      {/* Match the exact same container structure as Home component */}
      <div className="px-4 md:px-6 max-w-7xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#EAECE5] mb-4">
            Why Choose Our Platform
          </h2>
          <p className="text-[#EAECE5]/70 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the features that make remote team collaboration seamless
            and efficient.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-[#0E0F0C]/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#BAFF38]/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full text-[#BAFF38] bg-[#344515] mb-6 group-hover:bg-[#BAFF38] group-hover:text-black transition-all duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-[#EAECE5] text-xl font-semibold group-hover:text-[#BAFF38] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#EAECE5]/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
