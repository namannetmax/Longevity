
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none">
      <nav className={`
        pointer-events-auto
        w-full max-w-5xl flex justify-between items-center px-4 md:px-8 py-2 md:py-3
        transition-all duration-500 ease-out rounded-full border
        ${scrolled 
          ? 'bg-black/60 border-white/10 backdrop-blur-2xl shadow-2xl' 
          : 'bg-white/5 border-white/5 backdrop-blur-md shadow-xl'
        }
      `}>
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-black font-black text-xl italic">L</span>
          </div>
          <span className="hidden sm:inline-block text-lg font-bold tracking-tighter uppercase">Longevity</span>
        </a>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#home" className="hover:text-yellow-500 transition-colors">Home</a>
          <a href="#training" className="hover:text-yellow-500 transition-colors">Workout</a>
          <a href="#habits" className="hover:text-yellow-500 transition-colors">Steps</a>
          <a href="#nutrition" className="hover:text-yellow-500 transition-colors">Nutrition</a>
        </div>

        {/* CTA */}
        <a 
          href="#download" 
          className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-yellow-500 transition-all duration-300 shadow-lg"
        >
          Download
        </a>
      </nav>
    </div>
  );
};