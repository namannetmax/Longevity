
import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  parallaxOffset?: number;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = "", parallaxOffset = 0 }) => {
  return (
    <div 
      className={`relative w-[280px] h-[580px] bg-[#111] rounded-[3.5rem] border-[10px] border-[#1a1a1a] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-300 ease-out ${className}`}
      style={{ transform: `translateY(${parallaxOffset}px)` }}
    >
      {/* Device Hardware Details */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-30" />
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#222] rounded-full z-40" />
      
      {/* Screen Content */}
      <div className="h-full w-full bg-[#0a0a0a] p-5 pt-12 flex flex-col gap-4 overflow-hidden select-none">
        {children}
      </div>
      
      {/* Screen Glare Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent z-20" />
    </div>
  );
};

export const AppTrainingScreen: React.FC = () => (
  <>
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-bold">Training</h3>
      <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
        <i className="fas fa-plus text-yellow-500 text-xs" />
      </div>
    </div>
    <div className="space-y-3">
      {[
        { title: 'Barbell Deadlift', sets: '4x5', progress: 80 },
        { title: 'Weighted Pullups', sets: '3x10', progress: 40 },
        { title: 'Military Press', sets: '3x8', progress: 60 }
      ].map((item, i) => (
        <div key={i} className="bg-white/5 p-3 rounded-2xl border border-white/5">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-bold text-white/80">{item.title}</p>
            <p className="text-[10px] text-yellow-500 font-bold">{item.sets}</p>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${item.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-auto bg-gradient-gold p-4 rounded-2xl flex items-center justify-between shadow-lg shadow-yellow-500/20">
      <div>
        <p className="text-black text-[10px] font-bold uppercase tracking-widest opacity-70">Next Session</p>
        <p className="text-black text-sm font-black">LEG DAY A</p>
      </div>
      <i className="fas fa-play-circle text-black text-2xl" />
    </div>
  </>
);

export const AppStepsScreen: React.FC = () => (
  <>
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-bold">Activity</h3>
      <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40 font-bold">LIVE</span>
    </div>
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="relative w-40 h-40 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
          <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-yellow-500" strokeDasharray="251.2" strokeDashoffset="50" strokeLinecap="round" />
        </svg>
        <div className="text-center">
          <p className="text-3xl font-black">12,482</p>
          <p className="text-[10px] text-white/40 uppercase font-bold">Steps</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full mt-8">
        <div className="bg-white/5 p-3 rounded-2xl">
          <p className="text-[10px] text-white/40 font-bold uppercase">Distance</p>
          <p className="text-md font-bold text-yellow-500">8.4 km</p>
        </div>
        <div className="bg-white/5 p-3 rounded-2xl">
          <p className="text-[10px] text-white/40 font-bold uppercase">Active</p>
          <p className="text-md font-bold text-yellow-500">124 min</p>
        </div>
      </div>
    </div>
    <div className="mt-auto p-4 bg-white/5 rounded-2xl flex items-center gap-3">
       <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <i className="fas fa-fire text-yellow-500" />
       </div>
       <div>
          <p className="text-[10px] text-white/40 font-bold uppercase">Streak</p>
          <p className="text-sm font-black">14 DAYS</p>
       </div>
    </div>
  </>
);

export const AppProgramScreen: React.FC = () => (
  <>
    <h3 className="text-lg font-bold mb-4">Plan</h3>
    <div className="bg-yellow-500 p-4 rounded-2xl mb-4">
       <p className="text-black text-[10px] font-bold uppercase tracking-widest opacity-60">Personalized Goal</p>
       <h4 className="text-black text-lg font-black leading-tight">Hypertrophy & <br/>Longevity Phase II</h4>
    </div>
    <div className="space-y-2">
       {['Monday', 'Wednesday', 'Friday'].map((day, i) => (
         <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
            <span className="text-xs font-bold text-white/60">{day}</span>
            <span className="text-[10px] text-yellow-500 font-bold uppercase italic">Strength Focus</span>
         </div>
       ))}
    </div>
    <div className="mt-auto border-t border-white/10 pt-4">
       <p className="text-[10px] text-white/30 font-bold uppercase mb-2">Current Focus</p>
       <div className="flex gap-2">
          <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-white/60">Legs</div>
          <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-white/60">Core</div>
       </div>
    </div>
  </>
);

export const AppCustomWorkoutScreen: React.FC = () => (
  <>
    <div className="flex justify-between items-center mb-4">
       <h3 className="text-lg font-bold">Custom</h3>
       <i className="fas fa-sliders-h text-white/40" />
    </div>
    <div className="flex-1 space-y-4">
       <div className="space-y-2">
          <label className="text-[10px] font-bold text-white/30 uppercase">Workout Name</label>
          <div className="p-3 bg-white/5 rounded-xl border border-yellow-500/20 text-sm font-bold">Morning Burn</div>
       </div>
       <div className="space-y-2">
          <label className="text-[10px] font-bold text-white/30 uppercase">Exercises</label>
          {['Pushups', 'Squats', 'Plank'].map((ex, i) => (
            <div key={i} className="flex items-center justify-between text-xs py-1">
               <span className="text-white/70">{ex}</span>
               <i className="fas fa-minus-circle text-red-500/40" />
            </div>
          ))}
          <button className="w-full py-2 border border-dashed border-white/10 rounded-xl text-[10px] font-bold text-white/40 uppercase mt-2">+ Add Exercise</button>
       </div>
    </div>
    <button className="mt-auto w-full py-4 bg-white/5 hover:bg-yellow-500 hover:text-black transition-all rounded-2xl text-xs font-bold uppercase tracking-widest">
       Save Workout
    </button>
  </>
);

export const AppNutritionScreen: React.FC = () => (
  <>
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-bold">Nutrition</h3>
      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Today</p>
    </div>
    <div className="aspect-square w-full rounded-full border-[10px] border-white/5 flex flex-col items-center justify-center relative mb-4">
      <svg className="absolute inset-0 w-full h-full -rotate-90">
        <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-white/5" />
        <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-yellow-500" strokeDasharray="280" strokeDashoffset="70" />
      </svg>
      <p className="text-3xl font-black">2,140</p>
      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Kcal Left</p>
    </div>
    <div className="grid grid-cols-3 gap-2">
       {[
         { l: 'P', v: '142g', c: 'text-yellow-500' },
         { l: 'C', v: '210g', c: 'text-white/40' },
         { l: 'F', v: '65g', c: 'text-white/20' }
       ].map((m, i) => (
         <div key={i} className="bg-white/5 p-2 rounded-xl text-center">
            <p className={`text-[10px] font-bold mb-1 ${m.c}`}>{m.l}</p>
            <p className="text-xs font-black">{m.v}</p>
         </div>
       ))}
    </div>
    <div className="mt-auto space-y-2">
      <div className="bg-white/5 p-3 rounded-xl border-l-4 border-yellow-500">
         <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">Insight</p>
         <p className="text-[11px] text-white/60">High activity detected. Increase protein.</p>
      </div>
    </div>
  </>
);
