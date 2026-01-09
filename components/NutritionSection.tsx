
import React from 'react';
import { PhoneMockup, AppNutritionScreen } from './PhoneMockup';

interface NutritionSectionProps {
  scrollY: number;
}

export const NutritionSection: React.FC<NutritionSectionProps> = ({ scrollY }) => {
  return (
    <section id="nutrition" className="py-32 px-6 relative overflow-hidden">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.05}px) scale(1.1)` }}
      >
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-yellow-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative py-10 lg:py-0">
            <div className="flex justify-center lg:justify-start gap-8">
               <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full" />
                  <PhoneMockup parallaxOffset={-scrollY * 0.1} className="rotate-[-6deg] lg:rotate-[-12deg] z-20 hover:rotate-0 transition-transform duration-700">
                     <AppNutritionScreen />
                  </PhoneMockup>
               </div>
               <div 
                 className="hidden lg:block w-[280px] h-[580px] bg-white/[0.02] border border-white/5 rounded-[3.5rem] mt-24 rotate-[4deg] backdrop-blur-sm p-8"
                 style={{ transform: `translateY(${scrollY * 0.05}px)` }}
               >
                 <div className="space-y-8 opacity-20">
                    <div className="h-8 w-2/3 bg-white/20 rounded-lg" />
                    <div className="h-40 w-full bg-white/10 rounded-3xl" />
                    <div className="h-32 w-full bg-white/10 rounded-3xl" />
                    <div className="h-20 w-full bg-white/10 rounded-3xl" />
                 </div>
               </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-yellow-500" />
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-[11px]">Biological Clarity</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] uppercase italic">Fuel Your <br /><span className="text-yellow-500">Evolution</span></h2>
            <p className="text-white/50 text-xl mb-12 leading-relaxed max-w-lg">
              Stop guessing. Longevity uses high-fidelity biomarker tracking and daily intake logs to calculate your exact metabolic requirements for peak performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-8 premium-card rounded-3xl border-l-4 border-yellow-500 hover:bg-white/5 transition-colors duration-300">
                  <h4 className="font-bold text-white mb-3 uppercase text-xs tracking-[0.2em]">Macro Targets</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Automated adjustments based on your real-time workout intensity.</p>
               </div>
               <div className="p-8 premium-card rounded-3xl border-l-4 border-white/10 hover:bg-white/5 transition-colors duration-300">
                  <h4 className="font-bold text-white mb-3 uppercase text-xs tracking-[0.2em]">Live Feedback</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Precision alerts when your recovery metrics fall behind your training load.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
