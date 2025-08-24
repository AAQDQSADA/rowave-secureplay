import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/0902f607-3579-4c75-b7ba-e2d753feb215.png')] bg-center bg-no-repeat bg-contain opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-blue-900/80"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            DETECT ALTS INSTANTLY.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12">
            Advanced Alt Detection System for Roblox Games
          </p>
          <Button 
            size="lg" 
            className="cta-button bg-blue-500 hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = '/pricing'}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
