import React, { useState } from 'react';
import { ArrowUpRight, Github, Cpu, Activity, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { playSound } from '../utils/sound';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'ALL' | 'AI' | 'SYSTEMS' | 'ANALYTICS'>('ALL');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'AI') return p.tags.some(t => t.includes('AI') || t.includes('BOT') || t.includes('PYTHON') || t.includes('ML')) || p.type.includes('AI') || p.type.includes('BOT');
    if (filter === 'SYSTEMS') return p.tags.some(t => t.includes('WEB') || t.includes('REACT') || t.includes('TAILWIND') || t.includes('TYPESCRIPT') || t.includes('HTML5')) || p.type.includes('WEB') || p.type.includes('SECURITY');
    if (filter === 'ANALYTICS') return p.type.includes('ANALYTICS') || p.tags.some(t => t.includes('ANALYTICS') || t.includes('DATA') || t.includes('PANDAS'));
    return true;
  });

  return (
    <section id="projects" className="relative py-20 sm:py-28 border-b border-[#E5A93C]/20 bg-[#07090E]">
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
            02 // FEATURED PROJECTS & REPOSITORIES
          </span>
          <span className="text-xs font-mono text-[#94A3B8]">
            AI • Data Analytics • Web Systems
          </span>
        </motion.div>

        {/* Header Title & Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-white tracking-tight leading-tight">
              Featured Work <br />
              <span className="gold-gradient-text block mt-1">
                & Core Systems.
              </span>
            </h2>
            <p className="text-sm text-[#94A3B8] mt-2 max-w-xl font-sans">
              Handcrafted conversational bots, automated data processing pipelines, and high-performance web platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
            {(['ALL', 'AI', 'SYSTEMS', 'ANALYTICS'] as const).map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  playSound('tab');
                  setFilter(cat);
                }}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  filter === cat
                    ? 'gold-btn shadow-md'
                    : 'bg-white/[0.03] text-[#CBD5E1] border border-[#E5A93C]/20 hover:border-[#E5A93C] hover:text-white'
                }`}
              >
                {cat === 'ALL' ? 'ALL PROJECTS' : cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative gold-card rounded-2xl p-6 sm:p-8 lg:p-9 shadow-xl border border-[#E5A93C]/25 hover:border-[#E5A93C]/60 transition-all duration-300"
              >
                <div>
                  {/* Meta Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E5A93C]/20 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#E5A93C]">{project.index}</span>
                      <span className="text-white/20">/</span>
                      <span className="text-[#CBD5E1]">{project.year}</span>
                      <span className="text-white/20">/</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-[#FDD26E] text-[10px] font-bold">
                        {project.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#E5A93C] font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-ping" />
                      <span>PRODUCTION READY</span>
                    </div>
                  </div>

                  {/* Main Content Grid: Description (Left) + Architecture Matrix (Right) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 py-6 items-start">
                    
                    {/* Left Column: Title & Description */}
                    <div className="lg:col-span-7 space-y-3.5">
                      <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-white group-hover:text-[#FDD26E] transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs font-mono uppercase tracking-wider font-bold text-[#E5A93C]">
                        {project.tagline}
                      </p>

                      <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-sans">
                        {project.description}
                      </p>

                      {/* Key Engineering Highlights */}
                      <div className="space-y-1.5 pt-1">
                        {project.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8] font-sans">
                            <span className="text-[#E5A93C] font-mono font-bold mt-0.5">✦</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: High-Craft Architecture Matrix in Gold HUD Card */}
                    <div className="lg:col-span-5 bg-[#090D15] p-4 sm:p-5 rounded-xl border border-[#E5A93C]/25 text-xs font-mono space-y-2.5 shadow-inner">
                      <div className="flex items-center justify-between pb-2 border-b border-[#E5A93C]/20 text-xs">
                        <span className="flex items-center gap-1.5 font-bold text-[#E5A93C]">
                          <Cpu className="w-3.5 h-3.5 text-[#E5A93C]" />
                          SYSTEM SPECS
                        </span>
                        <span className="text-[#FDD26E] bg-[#E5A93C]/10 border border-[#E5A93C]/30 px-2 py-0.5 rounded text-[10px] font-bold">
                          ACTIVE
                        </span>
                      </div>

                      <div className="space-y-2 pt-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[#94A3B8]">FRAMEWORK</span>
                          <span className="text-[#FDD26E] font-semibold">{project.architecture.protocol}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#94A3B8]">ACCURACY / SLA</span>
                          <span className="text-white font-semibold">{project.architecture.uptime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#94A3B8]">OPTIMIZATION</span>
                          <span className="text-white font-semibold">{project.architecture.security}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#94A3B8]">LATENCY</span>
                          <span className="text-[#E5A93C] font-semibold">{project.architecture.latency}</span>
                        </div>
                      </div>

                      {/* Quick Metrics Bar */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-[#E5A93C]/20 text-center">
                          {project.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="bg-white/[0.03] p-1.5 rounded-lg border border-[#E5A93C]/15">
                              <div className="text-xs font-bold text-[#FDD26E] font-outfit">{m.value}</div>
                              <div className="text-[9px] uppercase tracking-wider text-[#94A3B8] truncate">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Tech Stack Badges & Actions Footer */}
                  <div className="pt-5 border-t border-[#E5A93C]/20 flex flex-col md:flex-row md:items-center justify-between gap-5">
                    
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-[#E5A93C]/20 text-[10px] font-mono uppercase tracking-wider text-[#CBD5E1]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions Buttons */}
                    <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          playSound('click');
                          onSelectProject(project);
                        }}
                        onMouseEnter={() => playSound('hover')}
                        className="px-4 py-2.5 rounded-xl font-bold text-[#FDD26E] bg-white/[0.03] border border-[#E5A93C]/35 hover:border-[#E5A93C] hover:bg-[#E5A93C]/10 transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <span>DETAILS</span>
                        <Activity className="w-3.5 h-3.5 text-[#E5A93C]" />
                      </motion.button>

                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playSound('click')}
                        onMouseEnter={() => playSound('hover')}
                        className="px-4 py-2.5 rounded-xl font-bold gold-btn flex items-center gap-2 cursor-pointer shadow-md"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>SOURCE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

