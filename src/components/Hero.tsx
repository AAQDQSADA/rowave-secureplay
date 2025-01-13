import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="hero-gradient min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-repeat"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            RoWave - Advanced Anti-Cheat for Roblox
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Ensuring Fair Play Across Roblox Games
          </p>
          <button className="cta-button">
            Get Started Now
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};