import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { IdeaGenerator } from './components/IdeaGenerator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-800 selection:bg-brand-orange selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <IdeaGenerator />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;