import React from 'react';
import { X, ArrowUpRight, Github, ExternalLink, Cpu, Shield, Database, Activity, CheckCircle2, Server, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { playSound } from '../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] gold-card rounded-2xl border border-[#E5A93C]/40 shadow-[0_0_50px_rgba(229,169,60,0.25)] overflow-hidden flex flex-col text-xs text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5A93C]/20 bg-[#090D15]">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#E5A93C]" />
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#E5A93C]">
              {project.index} // ARCHITECTURAL SPECIFICATION & TELEMETRY
            </span>
          </div>
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-[#E5A93C]/20 text-[#CBD5E1] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 font-sans bg-[#07090E]">
          
          {/* Main Title & Tagline */}
          <div>
            <div className="text-xs font-mono text-[#E5A93C] uppercase tracking-wider font-bold mb-1.5 flex items-center gap-2">
              <span>{project.type}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-outfit font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm font-semibold text-[#FDD26E]">
              {project.tagline}
            </p>
            <p className="text-sm text-[#CBD5E1] leading-relaxed mt-3">
              {project.description}
            </p>
          </div>

          {/* Architecture Matrix HUD */}
          <div className="bg-[#090D15] p-6 rounded-xl border border-[#E5A93C]/25 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5A93C]/20 text-xs font-mono">
              <span className="text-xs uppercase tracking-wider font-bold text-[#E5A93C] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#E5A93C]" />
                SYSTEM RUNTIME METRICS
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#FDD26E] bg-[#E5A93C]/10 px-2.5 py-0.5 rounded border border-[#E5A93C]/30">
                ACTIVE DEPLOYMENT
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono">
              <div className="bg-white/[0.03] p-3 rounded-lg border border-[#E5A93C]/20">
                <span className="text-[#94A3B8] text-[10px] uppercase tracking-wider block">FRAMEWORK / PROTOCOL</span>
                <span className="text-white font-bold text-xs mt-1 block">{project.architecture.protocol}</span>
              </div>
              <div className="bg-white/[0.03] p-3 rounded-lg border border-[#E5A93C]/20">
                <span className="text-[#94A3B8] text-[10px] uppercase tracking-wider block">ACCURACY / SLA</span>
                <span className="text-[#FDD26E] font-bold text-xs mt-1 block">{project.architecture.uptime}</span>
              </div>
              <div className="bg-white/[0.03] p-3 rounded-lg border border-[#E5A93C]/20">
                <span className="text-[#94A3B8] text-[10px] uppercase tracking-wider block">SECURITY & ENCRYPTION</span>
                <span className="text-white font-bold text-xs mt-1 block">{project.architecture.security}</span>
              </div>
              <div className="bg-white/[0.03] p-3 rounded-lg border border-[#E5A93C]/20">
                <span className="text-[#94A3B8] text-[10px] uppercase tracking-wider block">STORAGE / DATA LAYER</span>
                <span className="text-white font-bold text-xs mt-1 block">{project.architecture.database}</span>
              </div>
              <div className="bg-white/[0.03] p-3 rounded-lg border border-[#E5A93C]/20">
                <span className="text-[#94A3B8] text-[10px] uppercase tracking-wider block">MEDIAN LATENCY</span>
                <span className="text-[#E5A93C] font-bold text-xs mt-1 block">{project.architecture.latency}</span>
              </div>
              {project.architecture.throughput && (
                <div className="bg-white/[0.03] p-3 rounded-lg border border-[#E5A93C]/20">
                  <span className="text-[#94A3B8] text-[10px] uppercase tracking-wider block">PEAK THROUGHPUT</span>
                  <span className="text-white font-bold text-xs mt-1 block">{project.architecture.throughput}</span>
                </div>
              )}
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E5A93C]">
              ENGINEERING HIGHLIGHTS & ARCHITECTURAL TRADEOFFS
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-[#E5A93C]/20 text-xs text-[#CBD5E1]">
                  <span className="text-[#E5A93C] font-bold">✦</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Tech Stack Pills */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8]">
              DEPLOYED COMPONENT MODULES
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#0F1420] border border-[#E5A93C]/30 rounded-lg text-xs font-mono uppercase tracking-wider text-[#CBD5E1]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#090D15] border-t border-[#E5A93C]/20 flex flex-wrap items-center justify-between gap-4 font-mono">
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="px-5 py-2.5 bg-white/[0.03] border border-[#E5A93C]/30 text-[#CBD5E1] hover:border-[#E5A93C] hover:text-white rounded-xl transition-colors text-xs font-bold"
          >
            DISMISS
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click')}
              className="px-6 py-2.5 gold-btn rounded-xl font-bold text-xs flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>OPEN REPOSITORY</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

