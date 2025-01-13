import { Shield, Brain, Bell, LayoutDashboard, Ban } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Event Security",
    description: "Protects Roblox game events from exploitation and manipulation with advanced authentication.",
  },
  {
    icon: Brain,
    title: "AI-Driven Analysis",
    description: "Detects suspicious patterns and adapts to new cheating methods in real-time.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Instant notifications for suspicious activities with email and in-app alerts.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Comprehensive web dashboard for monitoring and managing your game's security.",
  },
  {
    icon: Ban,
    title: "Automated Bans",
    description: "Swift action against detected cheaters to maintain fair gameplay.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="flex flex-col items-center text-center">
                <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};