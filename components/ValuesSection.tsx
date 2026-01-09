
import React from 'react';

interface ValuesSectionProps {
  scrollY: number;
}

const values = [
  {
    icon: 'fa-dumbbell',
    title: 'Absolute Strength',
    desc: 'Functional power that translates into real-world longevity and freedom.'
  },
  {
    icon: 'fa-brain',
    title: 'Mental Clarity',
    desc: 'Exercise is the best medicine for a sharp, resilient mind.'
  },
  {
    icon: 'fa-shield-heart',
    title: 'Biomarker Focus',
    desc: 'Tracking what matters: HRV, Resting Heart Rate, and Recovery.'
  },
  {
    icon: 'fa-infinity',
    title: 'Discipline Forever',
    desc: 'Moving beyond motivation into the realm of consistent habit.'
  }
];

export const ValuesSection: React.FC<ValuesSectionProps> = ({ scrollY }) => {
  return (
    <section id="values" className="py-32 px-6 relative">
      {/* Background decoration */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-full -z-10 opacity-5"
        style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
      >
        <span className="text-[20rem] font-black uppercase italic leading-none select-none text-white block transform rotate-90 origin-top-right">LONGEVITY</span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-black tracking-tight uppercase italic mb-12 border-l-4 border-yellow-500 pl-6">The Longevity Philosophy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((v, i) => (
              <div key={i} className="group cursor-default relative">
                <div 
                   className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-all duration-300 transform group-hover:-translate-y-1"
                >
                  <i className={`fas ${v.icon} text-white group-hover:text-black transition-colors`} />
                </div>
                <h4 className="text-xl font-bold mb-3 uppercase italic tracking-tighter">{v.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative p-12 text-center overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5">
           <div 
             className="absolute -top-24 -left-24 w-64 h-64 bg-yellow-500/10 blur-3xl rounded-full"
             style={{ transform: `translateY(${scrollY * 0.03}px)` }}
           />
           <p className="text-2xl md:text-4xl font-light text-white/80 leading-tight italic max-w-4xl mx-auto relative z-10">
             "Longevity is not just living longer; it is the aggressive pursuit of vitality. We train today so we can be dangerous at ninety."
           </p>
           <p className="mt-8 text-yellow-500 font-bold uppercase tracking-[0.4em] text-[10px] relative z-10">— THE CREED</p>
        </div>
      </div>
    </section>
  );
};
