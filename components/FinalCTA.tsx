
import React from 'react';
import { StoreButtons } from './StoreButtons';

interface FinalCTAProps {
  scrollY: number;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ scrollY }) => {
  return (
    <section id="download" className="relative py-60 px-6 overflow-hidden">
      {/* Immersive Parallax Background */}
      <div 
        className="absolute inset-0 -z-10 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 flex justify-center">
           <div className="w-16 h-1 bg-yellow-500 rounded-full opacity-20" />
        </div>
        
        <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter uppercase italic leading-none">
          OWN YOUR <br />
          <span className="text-yellow-500">PRIME</span>.
        </h2>
        
        <p className="text-xl text-white/40 mb-16 max-w-xl mx-auto leading-relaxed">
          The system is ready. The discipline is yours to find. Start your infinite training program today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <StoreButtons />
        </div>
        
        <div className="mt-20">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">v2.5 Core Fully Operational</span>
           </div>
        </div>
      </div>
    </section>
  );
};
