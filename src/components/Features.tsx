import { Shield, Brain, Bell, LayoutDashboard, Ban } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const features = [
  {
    icon: Shield,
    title: "Alt Detection",
    description: "Identifies alternate accounts instantly with advanced fingerprinting technology.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Machine learning algorithms detect suspicious account patterns and behaviors.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Instant notifications when potential alt accounts are detected in your game.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Comprehensive web dashboard for monitoring and managing detected alt accounts.",
  },
  {
    icon: Ban,
    title: "Automated Actions",
    description: "Swift automated responses to handle detected alt accounts based on your rules.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-900/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Advanced Alt Detection Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-center text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-purple-100/80">
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