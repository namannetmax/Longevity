
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { NutritionSection } from './components/NutritionSection';
import { ValuesSection } from './components/ValuesSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      <Navbar scrolled={scrollY > 50} />
      
      {/* Global Background Parallax Elements */}
      <div 
        className="fixed top-[-10%] left-[-5%] w-[40%] h-[40%] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none z-0"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="fixed bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none z-0"
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      />

      <main className="relative z-10">
        <Hero scrollY={scrollY} />
        <Features scrollY={scrollY} />
        <NutritionSection scrollY={scrollY} />
        <ValuesSection scrollY={scrollY} />
        <FinalCTA scrollY={scrollY} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
