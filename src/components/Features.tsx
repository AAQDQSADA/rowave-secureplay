import { Shield, Brain, Bell, LayoutDashboard, Ban } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

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
    <section className="py-20 bg-gray-900/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Advanced Protection Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-center text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-blue-100/80">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};