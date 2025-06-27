
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import PortfolioSection from '@/components/PortfolioSection';
import FloatingParticles from '@/components/FloatingParticles';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <HeroSection />
        <PortfolioSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-900 to-pink-900 py-8 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 mb-2">
              © 2024 Communication Launche - Next-Gen Digital Hub
            </p>
            <p className="text-neon-cyan text-sm">
              Powered by AI Innovation & Creative Excellence
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
