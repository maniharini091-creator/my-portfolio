import React, { useState } from 'react';
import { milestonesData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Trophy, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { playSound } from '../utils/sound';

export const ExperienceSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(milestonesData[0].id);

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-[#E5A93C]" />;
      case 'achievement':
        return <Trophy className="w-4 h-4 text-[#E5A93C]" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-[#E5A93C]" />;
      default:
        return <Award className="w-4 h-4 text-[#E5A93C]" />;
    }
  };

  return (
    <section id="experience" className="relative py-20 sm:py-28 border-b border-[#E5A93C]/20 bg-[#07090E]">
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
            04 // EXPERIENCE & EDUCATION
          </span>
          <span className="text-xs font-mono text-[#94A3B8]">
            Internships • B.Tech AI & DS • Athletic Leadership
          </span>
        </motion.div>

        {/* Header Title */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-white tracking-tight leading-tight">
            Trajectory <br />
            <span className="gold-gradient-text block mt-1">
              & Key Milestones.
            </span>
          </h2>
          <p className="text-sm text-[#94A3B8] font-sans mt-2">
            A track record of data analytics internships, academic excellence, and sports leadership.
          </p>
        </div>

        {/* Timeline List Stack */}
        <div className="relative border-l-2 border-[#E5A93C]/30 ml-3 sm:ml-6 pl-6 sm:pl-9 space-y-6">
          
          {milestonesData.map((item, idx) => {
            const isSelected = selectedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ scale: 1.01 }}
                onClick={() => {
                  playSound('click');
                  setSelectedId(item.id);
                }}
                onMouseEnter={() => playSound('hover')}
                className={`p-5 sm:p-7 gold-card rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  isSelected
                    ? 'border-[#E5A93C] shadow-[0_0_25px_rgba(229,169,60,0.2)]'
                    : 'border-[#E5A93C]/20 hover:border-[#E5A93C]/50'
                }`}
              >
                {/* Timeline node dot on vertical track */}
                <div
                  className={`absolute -left-[31px] sm:-left-[45px] top-7 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#E5A93C] border-white shadow-[0_0_10px_#E5A93C] scale-125'
                      : 'bg-[#07090E] border-[#E5A93C]/50'
                  }`}
                />

                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2.5 border-b border-[#E5A93C]/20 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-white/[0.04] border border-[#E5A93C]/30 text-[#FDD26E] rounded-md text-xs font-bold">
                      {item.period}
                    </span>
                    <span className="text-white/20">/</span>
                    <span className="text-white font-semibold">{item.organization}</span>
                  </div>

                  {item.badge && (
                    <span className="px-2.5 py-0.5 gold-btn rounded-md text-[10px] font-bold tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Role Title */}
                <div className="mt-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-[#E5A93C]/10 border border-[#E5A93C]/30">
                      {getIcon(item.type)}
                    </div>
                    <h3 className="text-lg sm:text-xl font-outfit font-bold text-white group-hover:text-[#FDD26E] transition-colors">
                      {item.role}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#CBD5E1] leading-relaxed mt-2.5 font-sans">
                  {item.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-1.5 mt-3.5 pt-2.5 border-t border-[#E5A93C]/20">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#94A3B8] font-sans">
                      <span className="text-[#E5A93C] font-bold mt-0.5">✦</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-2.5 border-t border-[#E5A93C]/20">
                  {item.skills.map((skill, skIdx) => (
                    <span
                      key={skIdx}
                      className="px-2 py-0.5 bg-[#0F1420] border border-[#E5A93C]/25 rounded text-[10px] font-mono uppercase tracking-wider text-[#CBD5E1]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

