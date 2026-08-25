import React from 'react';
import { ArrowUpRight, Download, Sparkles, Cpu, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { playSound } from '../utils/sound';
import { initialProfile } from '../data/portfolioData';
import { useProfilePhoto } from '../context/PhotoContext';

interface HeroSectionProps {
  onOpenResume: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onExploreWork }) => {
  const { photoUrl, objectPosition, zoomLevel } = useProfilePhoto();

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden border-b border-[#E5A93C]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Tech Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-[#E5A93C]/20"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-xs font-mono text-[#FDD26E]">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-ping" />
              AVAILABLE FOR ENTRY-LEVEL ROLES
            </span>
            <span className="hidden sm:inline text-white/20">/</span>
            <span className="hidden sm:inline text-xs font-mono text-[#94A3B8]">
              AI & Software Engineering
            </span>
          </div>
          <div className="text-xs font-mono tracking-wider text-[#E5A93C] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
            {initialProfile.location}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start space-y-5"
          >
            
            {/* Title Badge */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-[#E5A93C]/25 text-xs font-mono text-[#E5A93C]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E5A93C] animate-spin" style={{ animationDuration: '8s' }} />
              <span>SOFTWARE DEVELOPER // AI & DATA</span>
            </motion.div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-outfit font-black tracking-tight leading-[0.98] text-white">
                Hi, I'm{' '}
                <span className="gold-gradient-text inline-block">
                  {initialProfile.name}
                </span>
              </h1>
              <p className="text-base sm:text-xl font-mono text-[#FDD26E] mt-2.5 font-semibold tracking-wide">
                {initialProfile.title}
              </p>
            </div>

            {/* Role Tags Bar */}
            <div className="flex flex-wrap gap-2 pt-0.5">
              {initialProfile.roles.map((role, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-[#E5A93C]/20 hover:border-[#E5A93C]/60 text-xs font-mono text-[#CBD5E1] transition-colors"
                >
                  {role}
                </motion.span>
              ))}
            </div>

            {/* Narrative */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed font-sans">
              {initialProfile.shortBio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <motion.button
                id="hero-explore-work"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  playSound('click');
                  onExploreWork();
                }}
                onMouseEnter={() => playSound('hover')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-mono font-bold tracking-widest gold-btn rounded-xl shadow-lg cursor-pointer"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                id="hero-download-resume"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  playSound('click');
                  onOpenResume();
                }}
                onMouseEnter={() => playSound('hover')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-mono font-bold tracking-widest text-[#FDD26E] bg-white/[0.03] border border-[#E5A93C]/35 hover:border-[#E5A93C] hover:bg-[#E5A93C]/10 rounded-xl transition-all shadow-[0_0_20px_rgba(229,169,60,0.1)] cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#E5A93C]" />
                <span>VIEW ATS RESUME</span>
              </motion.button>
            </div>

            {/* Key Telemetry Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-5 w-full border-t border-[#E5A93C]/20">
              <motion.div whileHover={{ y: -3 }} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-outfit font-black gold-gradient-text">
                  {initialProfile.stats[0]?.value || '8.56'}
                </span>
                <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mt-0.5">
                  B.Tech CGPA
                </span>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-outfit font-black text-white">
                  {initialProfile.stats[3]?.value || '5+'}
                </span>
                <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mt-0.5">
                  AI & Web Apps
                </span>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-outfit font-black gold-gradient-text">
                  State
                </span>
                <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mt-0.5">
                  Athlete & Captain
                </span>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Column: Museum Framed Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-center relative"
          >
            {/* Glow Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#E5A93C]/25 to-[#D97706]/25 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 -z-10" />

            {/* Gold Framed Portrait Card */}
            <motion.div
              whileHover={{ y: -4, rotateY: 2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="gold-card p-4 sm:p-5 rounded-2xl relative overflow-hidden group shadow-[0_10px_50px_rgba(0,0,0,0.8)] border border-[#E5A93C]/35"
            >
              {/* Top Card Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5A93C]/20 text-xs font-mono">
                <span className="text-[#E5A93C] flex items-center gap-1.5 font-bold">
                  <Cpu className="w-3.5 h-3.5" />
                  HARINI M
                </span>
                <span className="text-[10px] text-[#94A3B8] tracking-widest font-bold">
                  AI & DATA SCIENCE
                </span>
              </div>

              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#0F1420] border border-[#E5A93C]/20">
                <img
                  src={photoUrl}
                  alt="Harini M - Software Developer & Data Analytics Specialist"
                  referrerPolicy="no-referrer"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: objectPosition === 'object-top' ? 'top center' : objectPosition === 'object-bottom' ? 'bottom center' : 'center center',
                  }}
                  className={`w-full h-full object-cover ${objectPosition} filter contrast-[1.05] brightness-105 group-hover:scale-105 transition-all duration-700`}
                />
                
                {/* Dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-75 pointer-events-none" />

                {/* Floating Gold Badge on image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-3 left-3 bg-[#07090E]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#E5A93C]/40 text-[10px] font-mono font-bold text-[#FDD26E] shadow-lg flex items-center gap-1.5 z-10"
                >
                  <Award className="w-3 h-3 text-[#E5A93C]" />
                  <span>DATA ANALYTICS INTERN</span>
                </motion.div>

                {/* Signature Overlay */}
                <div className="absolute bottom-4 right-5 text-right select-none z-10">
                  <span className="font-signature text-4xl sm:text-5xl text-[#FDD26E] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                    {initialProfile.signatureName}
                  </span>
                </div>
              </div>

              {/* Caption metadata */}
              <div className="flex justify-between items-center pt-3.5 text-xs font-mono">
                <span className="font-bold text-white tracking-wider">{initialProfile.name}</span>
                <span className="text-[#E5A93C] text-[11px] font-bold">JCT College • CGPA 8.56</span>
              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

