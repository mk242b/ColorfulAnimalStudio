import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { language } = useLanguage();
  const isMM = language === 'mm';

  return (
    <div className={`font-sans antialiased text-gray-800 selection:bg-brand-orange selection:text-white ${isMM ? 'lang-mm' : ''}`}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;