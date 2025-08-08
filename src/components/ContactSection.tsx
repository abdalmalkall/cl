
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Github, Instagram, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '0786511780',
      link: 'https://wa.me/0786511780',
      color: 'text-green-400',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Gmail',
      value: 'abdamalk2008123@gmail.com',
      link: 'mailto:abdamalk2008123@gmail.com',
      color: 'text-red-400',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'abdalmalkall',
      link: 'https://github.com/abdalmalkall',
      color: 'text-gray-300',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '_cl_hub',
      link: 'https://www.instagram.com/_cl_hub/',
      color: 'text-pink-400',
      gradient: 'from-purple-500 via-pink-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400">
            Connect with me through multiple channels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card 
                key={index}
                className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 p-6 hover:border-neon-cyan/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${contact.gradient} mb-4 group-hover:animate-pulse-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                  <p className={`${contact.color} mb-4 text-sm break-all`}>{contact.value}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
                    onClick={() => window.open(contact.link, '_blank')}
                  >
                    Connect <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
