
import React, { useState, useEffect, useRef } from 'react';
import { StoreButtons } from './StoreButtons';
import { PhoneMockup, AppTrainingScreen } from './PhoneMockup';

interface HeroProps {
  scrollY: number;
}

declare global {
  interface Window {
    UnicornStudio: any;
  }
}

export const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Re-initialize Unicorn Studio after component mounts to ensure it picks up the DOM element
    if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
      try {
        window.UnicornStudio.init();
      } catch (e) {
        console.warn('UnicornStudio init failed', e);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePos({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-20"
    >
      {/* Unicorn Studio Background Embed */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-80">
        <div 
          className="w-full h-full min-w-full min-h-full"
          data-us-project="v6F4mU2AmmOg5baT9y1N"
        ></div>
        
        {/* Ambient Dark Overlay to ensure readability and blend with the dark mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[#0a0a0a]/30" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
        <div className="text-left">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-500 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
            Precision Longevity
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase italic">
            Train <br />
            <span className="text-yellow-500">Beyond</span><br />
            Years.
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-lg leading-relaxed">
            The elite hub for long-term health. Experience an interface built for discipline, 
            backed by performance science, and designed for your prime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <StoreButtons />
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* Main Phone with tilt effect */}
          <div 
            className="transition-transform duration-700 ease-out"
            style={{
              transform: `
                translateY(${-scrollY * 0.15}px) 
                rotateX(${(mousePos.y - 0.5) * -10}deg) 
                rotateY(${(mousePos.x - 0.5) * 15}deg)
              `
            }}
          >
            <PhoneMockup className="z-20 relative">
              <AppTrainingScreen />
            </PhoneMockup>
          </div>

          {/* Subtle Background Glow behind phone to integrate with the Unicorn Studio bg */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full -z-10" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <i className="fas fa-chevron-down text-2xl" />
      </div>
    </section>
  );
};
