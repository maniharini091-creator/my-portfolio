import React from 'react';
import { ArrowUp, Terminal, Shield, Sparkles, Heart } from 'lucide-react';
import { playSound } from '../utils/sound';
import { initialProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playSound('warp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#E5A93C]/20 bg-[#05070A] py-14 text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E5A93C]/20">
          
          <div className="flex items-center gap-3">
            <span className="font-outfit font-extrabold text-2xl tracking-tight text-white">
              HARINI <span className="text-[#E5A93C]">M</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#FDD26E] bg-white/[0.04] px-2.5 py-1 rounded-md border border-[#E5A93C]/30">
              EDITION 2025
            </span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => playSound('hover')}
            className="flex items-center gap-2 px-5 py-2.5 gold-btn rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8] font-sans">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Designed & Engineered with Luxury Obsidian & Gold Aesthetics</span>
          </div>
          <div className="font-mono text-[11px]">
            © {new Date().getFullYear()} {initialProfile.name}. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

