import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Layout, Database, Brain, Cpu, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { playSound } from '../utils/sound';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    'ai-ml': <Brain className="w-4 h-4 text-[#E5A93C]" />,
    'frontend-systems': <Layout className="w-4 h-4 text-[#E5A93C]" />,
    'data-backend': <Database className="w-4 h-4 text-[#E5A93C]" />,
    'analytics-tools': <Layers className="w-4 h-4 text-[#E5A93C]" />,
  };

  return (
    <section id="skills" className="relative py-20 sm:py-28 border-b border-[#E5A93C]/20 bg-[#07090E]">
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
            03 // TECHNICAL PROFICIENCIES
          </span>
          <span className="text-xs font-mono text-[#94A3B8]">
            AI • Data Analytics • Web Development
          </span>
        </motion.div>

        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-white tracking-tight leading-tight">
            Technical Stack <br />
            <span className="gold-gradient-text block mt-1">
              & Core Specializations.
            </span>
          </h2>
          <p className="text-sm text-[#94A3B8] font-sans mt-2">
            Handcrafted machine learning models, structured data analytics pipelines, and scalable web solutions.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {skillCategories.map((category, idx) => {
            const isHovered = activeCategory === category.id;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                onMouseEnter={() => {
                  playSound('hover');
                  setActiveCategory(category.id);
                }}
                onMouseLeave={() => setActiveCategory(null)}
                className={`p-6 sm:p-7 gold-card rounded-2xl border transition-all duration-300 ${
                  isHovered
                    ? 'border-[#E5A93C] shadow-[0_0_25px_rgba(229,169,60,0.2)]'
                    : 'border-[#E5A93C]/20 hover:border-[#E5A93C]/50'
                }`}
              >
                {/* Top Code Badge & Metric Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#E5A93C]/20 text-xs font-mono">
                  <div className="flex items-center gap-2 text-white">
                    <div className="p-1.5 rounded-lg bg-[#E5A93C]/10 border border-[#E5A93C]/30">
                      {categoryIcons[category.id] || <Cpu className="w-4 h-4 text-[#E5A93C]" />}
                    </div>
                    <span className="text-xs font-bold text-[#E5A93C]">{category.code}</span>
                  </div>

                  {category.metrics && (
                    <div className="text-[11px] font-mono text-[#FDD26E] bg-white/[0.04] px-2.5 py-0.5 rounded-lg border border-[#E5A93C]/30">
                      <span className="text-[#94A3B8] mr-1.5">{category.metrics.label}:</span>
                      <span className="font-bold">{category.metrics.value}</span>
                    </div>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div className="mt-4 space-y-1">
                  <h3 className="text-xl sm:text-2xl font-outfit font-bold text-white group-hover:text-[#FDD26E] transition-colors">
                    {category.title}
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#E5A93C] tracking-wide">
                    {category.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#CBD5E1] leading-relaxed mt-2.5 mb-5 font-sans">
                  {category.description}
                </p>

                {/* Skills Pills Matrix */}
                <div className="pt-3.5 border-t border-[#E5A93C]/20">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2.5 flex items-center justify-between">
                    <span>TECHNOLOGIES & TOOLS</span>
                    <span className="text-[#E5A93C]">{category.skills.length} MODULES</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-lg bg-[#0F1420] border border-[#E5A93C]/25 text-xs font-mono font-semibold text-[#CBD5E1] hover:border-[#E5A93C] hover:text-[#FDD26E] hover:bg-[#E5A93C]/10 transition-all cursor-default shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

