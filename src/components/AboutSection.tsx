import React from 'react';
import { Award, BookOpen, Code, Trophy, Sparkles, BrainCircuit, Activity, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { playSound } from '../utils/sound';
import { initialProfile } from '../data/portfolioData';
import { useProfilePhoto } from '../context/PhotoContext';

interface AboutSectionProps {
  onExploreProjects: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreProjects }) => {
  const { photoUrl, objectPosition, zoomLevel } = useProfilePhoto();

  return (
    <section id="about" className="relative py-20 sm:py-28 border-b border-[#E5A93C]/20 bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between pb-4 mb-10 border-b border-[#E5A93C]/20"
        >
          <span className="text-xs uppercase font-mono tracking-widest font-bold text-[#E5A93C] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
            01 // BIOGRAPHY & PROFILE
          </span>
          <span className="text-xs font-mono text-[#94A3B8]">
            Software Development • AI • Athletics
          </span>
        </motion.div>

        {/* Main Grid: Headline + Content + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading, Paragraphs & Key Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-white tracking-tight leading-tight">
              Disciplined by Athletics. <br />
              <span className="gold-gradient-text block mt-1">
                Powered by Code & Data.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans pt-1">
              I'm <strong className="text-[#FDD26E] font-semibold">{initialProfile.name}</strong>, a Software Developer and AI & Data Science scholar at JCT College of Engineering and Technology (CGPA: 8.56/10).
            </p>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-sans">
              I engineer robust web applications, conversational bots in TypeScript, and automated Python analytics pipelines. My track & field background fosters relentless focus and fast learning agility.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono">
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="p-4 gold-card rounded-xl space-y-1.5 group hover:border-[#E5A93C]/60 transition-all shadow-md"
              >
                <div className="flex items-center gap-2 text-[#E5A93C] font-bold">
                  <BrainCircuit className="w-4 h-4" />
                  <span>01 // AI & DATA</span>
                </div>
                <p className="text-[#94A3B8] text-xs leading-relaxed font-sans">
                  Python, Pandas, Data Pipelines, Automation & Predictive Modeling.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="p-4 gold-card rounded-xl space-y-1.5 group hover:border-[#E5A93C]/60 transition-all shadow-md"
              >
                <div className="flex items-center gap-2 text-[#E5A93C] font-bold">
                  <Activity className="w-4 h-4" />
                  <span>02 // ATHLETIC GRIT</span>
                </div>
                <p className="text-[#94A3B8] text-xs leading-relaxed font-sans">
                  State-Level track athlete & sports captain with relentless sprint stamina.
                </p>
              </motion.div>
            </div>

            {/* Certifications Row */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2 font-bold">
                VERIFIED CERTIFICATIONS:
              </div>
              <div className="flex flex-wrap gap-2.5">
                {initialProfile.certifications?.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-[#E5A93C]/25 text-xs font-mono text-[#FDD26E] flex items-center gap-2 hover:border-[#E5A93C]/60 transition-all"
                  >
                    <Award className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
                    <div>
                      <span className="font-bold text-white">{cert.title}</span>
                      <span className="text-[#94A3B8] text-[11px] ml-1.5">({cert.issuer})</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Gold Museum Mount */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="w-full max-w-sm gold-card p-4 rounded-2xl shadow-2xl border border-[#E5A93C]/35 relative overflow-hidden group"
            >
              {/* Top micro bar */}
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E5A93C]/20 text-[11px] font-mono">
                <span className="text-[#E5A93C] font-bold">PROFILE PORTRAIT</span>
                <span className="text-[#94A3B8] text-[10px]">VERIFIED 2025</span>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl bg-[#0F1420] mb-3.5 border border-[#E5A93C]/20">
                <img
                  src={photoUrl}
                  alt="Harini M - Software Developer"
                  referrerPolicy="no-referrer"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: objectPosition === 'object-top' ? 'top center' : objectPosition === 'object-bottom' ? 'bottom center' : 'center center',
                  }}
                  className={`w-full h-full object-cover ${objectPosition} filter contrast-[1.05] brightness-105 group-hover:scale-105 transition-all duration-700`}
                />
                
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-65 pointer-events-none" />

                {/* Signature Overlay */}
                <div className="absolute bottom-3 right-4 text-right z-10 select-none">
                  <span className="font-signature text-4xl text-[#FDD26E] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    Harini M
                  </span>
                </div>
              </div>

              {/* Micro info footer on card */}
              <div className="flex items-center justify-between text-xs font-mono text-[#CBD5E1] pt-1">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#E5A93C]" />
                  <span className="font-bold text-white">JCT College of Eng & Tech</span>
                </div>
                <span className="text-[#E5A93C] text-[11px] font-semibold">2023 – 2027</span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* 4 Core Stat Boxes Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-10 border-t border-[#E5A93C]/20">
          {initialProfile.stats.map((stat, idx) => {
            const icons = [Code, BookOpen, Award, Trophy];
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onMouseEnter={() => playSound('hover')}
                className="p-5 gold-card rounded-2xl border border-[#E5A93C]/20 hover:border-[#E5A93C]/60 transition-all duration-300 group cursor-default shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#E5A93C]/60">
                    // 0{idx + 1}
                  </span>
                  <div className="p-2 rounded-lg bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#E5A93C] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-outfit font-extrabold gold-gradient-text tracking-tight mb-1.5">
                  {stat.value}
                </div>

                <div className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                  {stat.label}
                </div>

                {stat.sublabel && (
                  <div className="text-xs text-[#94A3B8] mt-1 font-sans">
                    {stat.sublabel}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

