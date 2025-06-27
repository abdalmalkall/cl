
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Sparkles } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Render Your Plan',
      description: 'Advanced planning and visualization platform with AI-powered features',
      url: 'https://render-your-plan.netlify.app/',
      tech: ['React', 'AI Integration', 'Responsive Design'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'ECL Project',
      description: 'Elegant and modern web application showcasing cutting-edge development',
      url: 'https://abdalmalkall.github.io/Ecl/',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Modern UI'],
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple rounded-full animate-particle-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-neon-pink mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
              My Work
            </h2>
            <Sparkles className="w-8 h-8 text-neon-pink ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-400">
            Showcasing innovative digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 overflow-hidden hover:border-neon-pink/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-pink-500/20 hover:scale-105"
            >
              <div className="p-8">
                <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center group-hover:animate-pulse-glow`}>
                  <Code className="w-16 h-16 text-white opacity-80" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/50 to-pink-600/50 text-white text-sm rounded-full border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/25"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
