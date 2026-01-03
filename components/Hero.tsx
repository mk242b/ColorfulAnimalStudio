import React from 'react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';

// Helper component to split text into jumping characters
const JumpingText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="inline-flex flex-wrap justify-center">
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="animate-jump inline-block cursor-default"
          style={{ 
             // Staggered delay for a wave effect
             animationDelay: `${index * 100}ms`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const isMM = language === 'mm';

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative Blobs matching Logo Colors */}
      <div className="absolute top-20 left-[-50px] w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-[64px] opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-[-50px] w-72 h-72 bg-brand-orange rounded-full mix-blend-multiply filter blur-[64px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-brand-yellow rounded-full mix-blend-multiply filter blur-[64px] opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-green rounded-full mix-blend-multiply filter blur-[64px] opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white border-2 border-brand-blue/20 text-brand-blue font-bold text-sm md:text-base shadow-sm hover:shadow-md transition-shadow cursor-default animate-fade-in-up">
          {t('hero.tag')}
        </div>
        
        {/* Main Heading with Dynamic Sizing for Myanmar */}
        <h1 className={`font-black mb-8 text-gray-900 tracking-tight ${
            isMM 
              ? 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-relaxed' 
              : 'text-5xl md:text-7xl lg:text-8xl leading-[1.1]'
          }`}>
          
          {/* Jumping Text Animation - Auto Play */}
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <JumpingText text={t('hero.title.start')} />
          </span> 
          
          <br className="hidden md:block"/>
          
          {/* Animated Highlight Word - Auto Play (Combined Float and Wiggle) */}
          <span className="inline-block animate-wiggle cursor-default animate-float mt-2 md:mt-0">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-red to-brand-blue animate-gradient-x p-2">
                {t('hero.title.highlight')}
             </span>
          </span>
        </h1>
        
        <p className={`text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up ${
            isMM 
              ? 'text-base md:text-xl leading-8' 
              : 'text-lg md:text-2xl leading-relaxed md:leading-normal'
          }`} style={{ animationDelay: '0.3s' }}>
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button size="lg" className="w-full sm:w-auto shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:-translate-y-1" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta.primary')}
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-gray-300 text-gray-600 hover:border-brand-blue hover:text-brand-blue hover:bg-blue-50 hover:-translate-y-1" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta.secondary')}
          </Button>
        </div>
      </div>
    </section>
  );
};