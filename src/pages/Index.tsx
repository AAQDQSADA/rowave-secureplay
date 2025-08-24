import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Statistics } from "@/components/Statistics";
import { Footer } from "@/components/Footer";
import { LiveLogs } from "@/components/LiveLogs";
import { TeamSection } from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900">
      <Hero />
      <Statistics />
      <Features />
      <LiveLogs />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;