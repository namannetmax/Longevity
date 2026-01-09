
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-xl italic">L</span>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase">Longevity</span>
            </div>
            <p className="text-white/30 text-sm max-w-sm leading-relaxed mb-8">
              Training for life. Designed to bridge the gap between peak fitness and long-term biological resilience. Join the movement of high-performance longevity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-widest text-[11px] mb-8 text-white/50">Navigation</h5>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-white/40 hover:text-yellow-500 transition-colors">Training</a></li>
              <li><a href="#" className="text-white/40 hover:text-yellow-500 transition-colors">Nutrition</a></li>
              <li><a href="#" className="text-white/40 hover:text-yellow-500 transition-colors">Habits</a></li>
              <li><a href="#" className="text-white/40 hover:text-yellow-500 transition-colors">Mindset</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-[11px] mb-8 text-white/50">Company</h5>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-white/40 hover:text-yellow-500 transition-colors">Support</a></li>
              <li><a href="#" className="text-white/40 hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/40 hover:text-yellow-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/40 hover:text-yellow-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.4em]">
            © {new Date().getFullYear()} Longevity App. All rights reserved. Precision Built.
          </p>
        </div>
      </div>
    </footer>
  );
};
