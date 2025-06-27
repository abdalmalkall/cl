
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent animate-gradient-shift bg-300% mb-4">
            Communication
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-cyan via-neon-green to-neon-blue bg-clip-text text-transparent animate-gradient-shift bg-300%">
            Launche
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Next-Generation Digital Communication Hub
          <br />
          <span className="text-neon-cyan">Powered by AI Innovation</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 animate-pulse-glow">
            Explore Experience
          </Button>
          <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300">
            View Portfolio
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-neon-cyan mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
