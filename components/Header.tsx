import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mm' : 'en');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="https://i.ibb.co/wFYDBgcJ/Colorful-Animal-Studio-Logo.png" 
            alt="Colorful Animal Studio" 
            className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12 md:h-16'} w-auto object-contain drop-shadow-sm group-hover:scale-105`} 
          />
          {/* Text fallback or additional branding if needed, but the logo image is primary */}
          <span className={`font-black tracking-tighter text-gray-800 leading-none ${isScrolled ? 'text-lg' : 'text-xl'} hidden lg:block`}>
            Colorful <span className="text-brand-orange">Animal</span> <span className="text-brand-blue">Studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-bold text-gray-600 hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-[-4px] after:left-0 after:bg-brand-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-brand-blue/20 text-brand-blue font-bold hover:bg-brand-blue hover:text-white transition-all shadow-sm hover:shadow-md text-sm"
          >
            <span>{language === 'en' ? '🇺🇸 EN' : '🇲🇲 MM'}</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs border border-brand-blue/20"
          >
            {language === 'en' ? 'EN' : 'MM'}
          </button>
          <button 
            className="p-2 text-2xl text-gray-700 focus:outline-none active:scale-95 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '🍔'}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-bold text-gray-700 block text-center py-4 hover:bg-brand-yellow/10 rounded-xl transition-colors active:bg-brand-yellow/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};