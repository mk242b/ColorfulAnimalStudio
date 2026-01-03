import React from 'react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-yellow/10">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-4xl font-black text-gray-900 mb-6">Ready to Start a Project?</h2>
        <p className="text-xl text-gray-600 mb-10">
          Whether you need a full season of cartoons or a Unity developer for your next game, we'd love to chat!
        </p>
        
        <form className="bg-white p-8 md:p-12 rounded-3xl shadow-xl text-left space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" placeholder="hello@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Service Interested In</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none bg-white">
                <option>Video Animation</option>
                <option>Game Development</option>
                <option>Character Design</option>
                <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" placeholder="Tell us about your project!"></textarea>
          </div>
          <Button className="w-full text-lg">Send Message ✉️</Button>
        </form>
      </div>
    </section>
  );
};