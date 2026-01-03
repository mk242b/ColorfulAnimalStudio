import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-brand-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white border border-brand-orange/20 text-brand-orange font-bold text-sm shadow-sm">
          ✨ Bringing imagination to life!
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 leading-tight">
          We Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">Magic</span> for <br/>
          Kids & Games
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          From YouTube animation series to custom game assets. Colorful Animal Studio creates vibrant worlds that spark joy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Your Project 🚀
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
            View Our Work 📺
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
           <img 
            src="https://picsum.photos/1200/600?random=10" 
            alt="Colorful Animation Studio Work" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};