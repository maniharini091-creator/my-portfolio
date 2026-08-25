import React, { useState, useEffect } from 'react';
import { Search, X, FolderGit2, Cpu, FileText, Mail, ArrowRight, Volume2, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { playSound } from '../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (id: string) => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          playSound('click');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  const navigateTo = (sectionId: string) => {
    playSound('click');
    onClose();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl gold-card rounded-2xl border border-[#E5A93C]/40 shadow-[0_0_50px_rgba(229,169,60,0.25)] overflow-hidden flex flex-col text-xs text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E5A93C]/20 bg-[#090D15]">
          <Search className="w-4 h-4 text-[#E5A93C] mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search projects, AI models, skill matrix, or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-[#94A3B8] text-sm focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/[0.04] hover:bg-[#E5A93C]/20 text-[#CBD5E1] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 font-sans bg-[#07090E]">
          
          {/* Quick Navigation Sections */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#E5A93C] font-bold uppercase tracking-wider block px-2 mb-1">
              Command Quick Jump
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { label: '01 / About & Bio', id: 'about' },
                { label: '02 / Featured Projects', id: 'projects' },
                { label: '03 / Technical Skills', id: 'skills' },
                { label: '04 / Experience & Roles', id: 'experience' },
                { label: '05 / Contact & Inquiries', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-[#E5A93C]/15 border border-[#E5A93C]/15 hover:border-[#E5A93C]/40 text-left text-white transition-colors text-xs font-mono"
                >
                  <span className="font-medium">{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5A93C]" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#E5A93C] font-bold uppercase tracking-wider block px-2 mb-1">
              Documents & Credentials
            </span>
            <div className="space-y-1.5">
              <button
                onClick={() => {
                  playSound('click');
                  onClose();
                  onOpenResume();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-[#E5A93C]/15 border border-[#E5A93C]/15 hover:border-[#E5A93C]/40 text-left text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#E5A93C]" />
                  <div>
                    <span className="font-outfit font-bold text-sm">Curriculum Vitae / Resume (Official Document)</span>
                    <div className="text-[11px] text-[#94A3B8]">Verified academic records, sports captaincy & tech stack</div>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#FDD26E] bg-white/[0.05] px-2.5 py-1 rounded border border-[#E5A93C]/30">VIEW CV</span>
              </button>
            </div>
          </div>

          {/* Projects Results */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#E5A93C] font-bold uppercase tracking-wider block px-2 mb-1">
              Projects Index ({filteredProjects.length})
            </span>
            <div className="space-y-1">
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    playSound('click');
                    onClose();
                    onSelectProject(p.id);
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-[#E5A93C]/15 border border-[#E5A93C]/15 hover:border-[#E5A93C]/40 text-left text-white transition-colors"
                >
                  <div>
                    <div className="font-syne font-bold text-sm text-white flex items-center gap-2">
                      <span>{p.title}</span>
                      <span className="font-mono text-[10px] text-[#FDD26E] bg-white/[0.04] border border-[#E5A93C]/20 px-1.5 py-0.5 rounded">{p.architecture.protocol}</span>
                    </div>
                    <div className="text-xs text-[#94A3B8] truncate max-w-md mt-0.5">{p.tagline}</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#090D15] border-t border-[#E5A93C]/20 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#E5A93C]" />
            Use ⌘K to toggle command HUD anytime
          </span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};

