
import React from 'react';

export const StoreButtons: React.FC = () => {
  return (
    <>
      <button className="group relative bg-[#1a1a1a] hover:bg-white text-white hover:text-black px-8 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border border-white/5 hover:border-transparent custom-shadow">
        <i className="fab fa-apple text-3xl" />
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Download on the</p>
          <p className="text-xl font-bold -mt-1 tracking-tight">App Store</p>
        </div>
        <div className="absolute -inset-0.5 bg-yellow-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      </button>

      <button className="group relative bg-[#1a1a1a] hover:bg-white text-white hover:text-black px-8 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border border-white/5 hover:border-transparent custom-shadow">
        <i className="fab fa-google-play text-2xl" />
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Get it on</p>
          <p className="text-xl font-bold -mt-1 tracking-tight">Google Play</p>
        </div>
        <div className="absolute -inset-0.5 bg-yellow-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      </button>
    </>
  );
};
