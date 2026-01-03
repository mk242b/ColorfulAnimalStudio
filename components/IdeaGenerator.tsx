import React, { useState } from 'react';
import { generateCharacterConcept } from '../services/geminiService';
import { CharacterIdea } from '../types';
import { Button } from './Button';

export const IdeaGenerator: React.FC = () => {
  const [animal, setAnimal] = useState('');
  const [theme, setTheme] = useState('');
  const [loading, setLoading] = useState(false);
  const [idea, setIdea] = useState<CharacterIdea | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!animal || !theme) return;

    setLoading(true);
    setIdea(null);
    try {
      const result = await generateCharacterConcept(animal, theme);
      setIdea(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="idea-lab" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-brand-purple/5 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border-4 border-brand-purple/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-block bg-brand-purple/10 text-brand-purple font-bold px-4 py-1 rounded-full text-sm mb-4">
                ✨ Powered by Gemini AI
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                The Character Idea Lab 🧪
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Stuck on a character concept for your game or video? Let our AI assistant spark your imagination! 
                Just pick an animal and a theme.
              </p>

              <form onSubmit={handleGenerate} className="space-y-6">
                <div>
                  <label htmlFor="animal" className="block text-sm font-bold text-gray-700 mb-2">Favorite Animal</label>
                  <input
                    id="animal"
                    type="text"
                    placeholder="e.g. Panda, Axolotl, Corgi"
                    value={animal}
                    onChange={(e) => setAnimal(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all text-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="theme" className="block text-sm font-bold text-gray-700 mb-2">Theme or Setting</label>
                  <input
                    id="theme"
                    type="text"
                    placeholder="e.g. Space Pilot, Baker, Wizard"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all text-lg"
                    required
                  />
                </div>
                <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-brand-purple to-indigo-600 hover:shadow-indigo-500/50"
                >
                  {loading ? 'Thinking...' : 'Generate Character Idea 🚀'}
                </Button>
              </form>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 min-h-[400px] flex flex-col justify-center border-2 border-dashed border-gray-300">
              {loading && (
                <div className="text-center animate-pulse">
                   <div className="text-6xl mb-4">🔮</div>
                   <h3 className="text-xl font-bold text-gray-400">Consulting the magic crystal ball...</h3>
                </div>
              )}
              
              {!loading && !idea && (
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4 opacity-50">❔</div>
                  <p className="text-lg">Your character card will appear here.</p>
                </div>
              )}

              {idea && (
                <div className="animate-fade-in-up">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-black text-gray-900">{idea.name}</h3>
                    <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {idea.species}
                    </span>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                    <h4 className="font-bold text-gray-700 mb-1 text-sm uppercase">Description</h4>
                    <p className="text-gray-600">{idea.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {idea.personality.map((trait, idx) => (
                       <span key={idx} className="bg-brand-yellow/20 text-yellow-800 px-3 py-1 rounded-lg text-sm font-bold">
                         {trait}
                       </span>
                    ))}
                  </div>

                  <div className="bg-brand-purple/5 p-5 rounded-xl border border-brand-purple/10">
                    <h4 className="font-bold text-brand-purple mb-2 text-sm uppercase flex items-center gap-2">
                        📖 Story Hook
                    </h4>
                    <p className="text-gray-700 italic">"{idea.storyHook}"</p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};