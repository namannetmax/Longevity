
import React from 'react';
import { PhoneMockup, AppStepsScreen, AppProgramScreen, AppCustomWorkoutScreen } from './PhoneMockup';

interface FeaturesProps {
  scrollY: number;
}

export const Features: React.FC<FeaturesProps> = ({ scrollY }) => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-48 lg:space-y-64">
        
        {/* Feature 1: Personalized Program */}
        <div id="training" className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-yellow-500" />
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-[11px]">Elite Programming</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] uppercase italic">The Plan. <br/><span className="text-yellow-500">Starts Now.</span></h2>
            <p className="text-white/50 text-xl mb-10 leading-relaxed max-w-lg">
              Unlock elite-level progress with programs that evolve with you. No generic plans—only data-driven, goal-oriented training cycles designed for the long game.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 group">
                <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 transition-colors duration-300">
                  <i className="fas fa-check text-yellow-500 text-[10px] group-hover:text-black" />
                </div>
                <p className="text-white/70 font-medium">Structured phase-based progression.</p>
              </li>
              <li className="flex gap-4 group">
                <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 transition-colors duration-300">
                  <i className="fas fa-check text-yellow-500 text-[10px] group-hover:text-black" />
                </div>
                <p className="text-white/70 font-medium">Automatic intensity adjustments based on fatigue.</p>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end py-10 lg:py-0">
             <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/10 blur-[120px] rounded-full" />
                <PhoneMockup parallaxOffset={-scrollY * 0.1} className="rotate-[4deg] lg:rotate-[8deg] z-20 hover:rotate-0 transition-transform duration-700">
                   <AppProgramScreen />
                </PhoneMockup>
             </div>
          </div>
        </div>

        {/* Feature 2: Step Tracker */}
        <div id="habits" className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-1 flex justify-center lg:justify-start py-10 lg:py-0">
             <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/10 blur-[120px] rounded-full" />
                <PhoneMockup parallaxOffset={-scrollY * 0.08} className="rotate-[-4deg] lg:rotate-[-8deg] z-20 hover:rotate-0 transition-transform duration-700">
                   <AppStepsScreen />
                </PhoneMockup>
             </div>
          </div>
          <div className="order-2 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-yellow-500" />
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-[11px]">Daily Habit Tracking</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] uppercase italic">Every Step <br/><span className="text-yellow-500">Counts.</span></h2>
            <p className="text-white/50 text-xl mb-10 leading-relaxed max-w-lg">
              Consistency is the foundation of longevity. Track every movement and turn daily discipline into an unbreakable ritual that fuels your vitality.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/[0.07] transition-colors duration-300">
                  <h4 className="text-3xl font-black text-white italic mb-1">14+</h4>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Goal Streaks</p>
               </div>
               <div className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/[0.07] transition-colors duration-300">
                  <h4 className="text-3xl font-black text-white italic mb-1">12K</h4>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Daily Average</p>
               </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Custom Workout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-yellow-500" />
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-[11px]">Full Flexibility</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] uppercase italic">Your Workout. <br/><span className="text-yellow-500">Your Rules.</span></h2>
            <p className="text-white/50 text-xl mb-10 leading-relaxed max-w-lg">
              Sometimes you need to call the shots. Build and save custom routines that fit your equipment, your schedule, and your specific physiological needs.
            </p>
            <div className="flex">
              <button className="group relative px-10 py-5 bg-white text-black hover:bg-yellow-500 transition-all rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-white/5">
                 Launch Custom Builder
                 <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end py-10 lg:py-0">
             <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/10 blur-[120px] rounded-full" />
                <PhoneMockup parallaxOffset={-scrollY * 0.1} className="rotate-[2deg] lg:rotate-[4deg] z-20 hover:rotate-0 transition-transform duration-700">
                   <AppCustomWorkoutScreen />
                </PhoneMockup>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
