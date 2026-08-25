import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Command, Menu, X, ArrowUpRight, Sparkles, FileText } from 'lucide-react';
import { playSound, toggleMuteSound, getIsMuted } from '../utils/sound';

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommand, onOpenResume, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted] = useState(getIsMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    playSound('click');
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAudio = () => {
    const newMuted = toggleMuteSound();
    setMuted(newMuted);
    if (!newMuted) {
      playSound('success');
    }
  };

  const navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090E]/90 backdrop-blur-xl border-b border-[#E5A93C]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name Tag with Gold Glowing Pulse */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#E5A93C]/20 to-[#92400E]/20 border border-[#E5A93C]/40 group-hover:border-[#E5A93C] transition-all shadow-[0_0_15px_rgba(229,169,60,0.2)]">
            <span className="font-mono text-xs font-bold text-[#E5A93C]">H</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#E5A93C] animate-ping opacity-75" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#E5A93C]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-outfit font-black tracking-wider text-white group-hover:text-[#FDD26E] transition-colors">
              HARINI <span className="text-[#E5A93C]">M</span>
            </span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#94A3B8] group-hover:text-[#CBD5E1] transition-colors">
              AI & Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest text-[#94A3B8]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => playSound('hover')}
                className={`relative py-1 transition-all duration-200 hover:text-white ${
                  isActive ? 'text-[#E5A93C] font-semibold' : 'text-[#94A3B8]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent shadow-[0_0_8px_#E5A93C]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Resume Modal Trigger */}
          <button
            onClick={() => {
              playSound('click');
              onOpenResume();
            }}
            title="View Resume / CV"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-[#E5A93C]/30 hover:border-[#E5A93C] text-xs font-mono text-[#FDD26E] hover:bg-[#E5A93C]/10 transition-all shadow-[0_0_12px_rgba(229,169,60,0.15)]"
          >
            <FileText className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span className="font-semibold">RESUME</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              playSound('click');
              onOpenCommand();
            }}
            title="Search commands (⌘K)"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#E5A93C]/40 text-xs font-mono text-[#94A3B8] hover:text-white transition-all"
          >
            <Command className="w-3 h-3 text-[#E5A93C]" />
            <span className="text-[10px] font-bold">⌘K</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleAudio}
            title={muted ? 'Enable sound effects' : 'Mute sound effects'}
            className="p-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#E5A93C]/40 text-[#94A3B8] hover:text-[#E5A93C] transition-all"
          >
            {muted ? (
              <VolumeX className="w-3.5 h-3.5 opacity-40" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-[#E5A93C]" />
            )}
          </button>

          {/* Contact Button */}
          <button
            onClick={() => handleNavClick('contact')}
            onMouseEnter={() => playSound('hover')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider gold-btn"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playSound('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-lg border border-[#E5A93C]/30 text-[#E5A93C] bg-white/[0.04]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F17]/95 backdrop-blur-2xl border-b border-[#E5A93C]/20 px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 font-mono">
          <div className="flex flex-col gap-3 text-xs">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-2.5 text-[#CBD5E1] hover:text-[#E5A93C] border-b border-white/5 transition-colors flex items-center justify-between tracking-wider"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A93C] opacity-60" />
              </button>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-4 bg-[#E5A93C]/10 border border-[#E5A93C]/40 text-center text-xs font-bold text-[#FDD26E] rounded-lg flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#E5A93C]" />
                <span>VIEW ATS RESUME (PDF)</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-2.5 px-4 gold-btn text-center text-xs font-bold rounded-lg flex items-center justify-center gap-2"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

