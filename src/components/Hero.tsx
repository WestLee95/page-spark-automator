
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 text-center gradient-bg text-white">
      <div className="max-w-4xl mx-auto bounce-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Stunning Landing Pages in Minutes
        </h1>
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Transform your ideas into professional, conversion-optimized landing pages with AI. 
          No coding required.
        </p>
        <Button 
          size="lg" 
          onClick={onGetStarted} 
          className="bg-white text-purple-700 hover:bg-gray-100 hover-scale"
        >
          Start Building <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
