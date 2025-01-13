import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { LiveLogs } from "@/components/LiveLogs";
import { TeamSection } from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <Hero />
      <Features />
      <LiveLogs />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;