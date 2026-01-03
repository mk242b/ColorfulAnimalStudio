import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center space-x-2 text-2xl font-black tracking-tighter mb-4">
                <img src="" alt="Colorful Animal Studio Logo" className="h-10 w-auto object-contain" />
                <span>Colorful <span className="text-brand-orange">Animal Studio</span></span>
            </div>
            <p className="text-gray-400 max-w-sm">
                Creating joy through animation and games. Based in the digital cloud, serving happy clients worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Studio</h4>
            <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-brand-orange">About Us</a></li>
                <li><a href="#" className="hover:text-brand-orange">Careers</a></li>
                <li><a href="#" className="hover:text-brand-orange">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-brand-orange">Twitter / X</a></li>
                <li><a href="#" className="hover:text-brand-orange">Instagram</a></li>
                <li><a href="#" className="hover:text-brand-orange">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Colorful Animal Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};