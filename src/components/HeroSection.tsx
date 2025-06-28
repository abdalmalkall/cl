import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0d9488] to-[#134e4a]">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full animate-particle-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-8 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-gradient-shift bg-[300%] mb-4">
            Communication
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-gradient-shift bg-[300%]">
            Launcher
          </h2>
        </div>

        <p className="text-lg md:text-2xl bg-gradient-to-r from-green-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-gradient-shift bg-[300%] mb-8 leading-relaxed">
          Next-Generation Digital Communication Hub
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 animate-pulse-glow">
            Explore Experience
          </Button>
          <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300">
            View Portfolio
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-cyan-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
