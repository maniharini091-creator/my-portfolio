import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Globe, CheckCircle2, Award, Briefcase, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { initialProfile, milestonesData, projectsData, skillCategories } from '../data/portfolioData';
import { playSound } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    playSound('click');
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[92vh] gold-card rounded-2xl border border-[#E5A93C]/40 shadow-[0_0_50px_rgba(229,169,60,0.25)] overflow-hidden flex flex-col text-xs text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5A93C]/20 bg-[#090D15]">
          <div className="flex items-center gap-2 text-white font-mono">
            <Sparkles className="w-4 h-4 text-[#E5A93C]" />
            <span className="font-bold text-xs uppercase tracking-wider text-[#E5A93C]">Curriculum Vitae // Official Verified Document</span>
          </div>

          <div className="flex items-center gap-2 font-mono">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 gold-btn rounded-lg text-xs uppercase tracking-wider font-bold transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>
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
        </div>

        {/* ATS Resume View Document */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-[#07090E] space-y-8 text-white font-sans print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-[#E5A93C]/20 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-outfit font-bold text-white tracking-tight">
                {initialProfile.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#E5A93C] font-mono font-medium mt-1">
                {initialProfile.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-[#CBD5E1] space-y-1 font-mono">
              <span className="flex items-center gap-1.5 sm:justify-end">
                <Mail className="w-3.5 h-3.5 text-[#E5A93C]" />
                {initialProfile.email}
              </span>
              {initialProfile.phone && (
                <span className="flex items-center gap-1.5 sm:justify-end">
                  <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
                  {initialProfile.phone}
                </span>
              )}
              <span className="flex items-center gap-1.5 sm:justify-end">
                <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
                {initialProfile.location}
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E5A93C] flex items-center gap-2 border-b border-[#E5A93C]/20 pb-1">
              <GraduationCap className="w-4 h-4 text-[#E5A93C]" />
              EDUCATION & ACADEMICS
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row justify-between text-xs bg-white/[0.02] p-3 rounded-lg border border-[#E5A93C]/15">
                <div>
                  <strong className="text-white font-syne font-bold text-sm">B.Tech in Artificial Intelligence & Data Science</strong>
                  <div className="text-[#94A3B8]">JCT College of Engineering & Technology, Coimbatore</div>
                </div>
                <div className="text-left sm:text-right text-xs font-mono mt-1 sm:mt-0">
                  <span className="font-bold text-[#FDD26E]">CGPA: 8.56 / 10.0</span>
                  <div className="text-[#94A3B8]">2023 – 2027</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between text-xs bg-white/[0.02] p-3 rounded-lg border border-[#E5A93C]/15">
                <div>
                  <strong className="text-white font-syne font-bold text-sm">Higher Secondary Certificate (HSC) — Maths with Biology</strong>
                  <div className="text-[#94A3B8]">St. Mary's Girls Higher Secondary School, Coonoor</div>
                </div>
                <div className="text-left sm:text-right text-xs font-mono mt-1 sm:mt-0">
                  <span className="text-[#FDD26E] font-bold">School Sports Captain</span>
                  <div className="text-[#94A3B8]">2021 – 2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E5A93C] flex items-center gap-2 border-b border-[#E5A93C]/20 pb-1">
              <Briefcase className="w-4 h-4 text-[#E5A93C]" />
              EXPERIENCE & TRACK RECORD
            </h2>

            {milestonesData.map(item => (
              <div key={item.id} className="space-y-1.5 bg-white/[0.02] p-4 rounded-xl border border-[#E5A93C]/15">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="text-white font-syne font-bold text-sm">{item.role}</span>
                    <span className="text-white/30 mx-2">/</span>
                    <span className="text-[#FDD26E] font-medium">{item.organization}</span>
                  </div>
                  <span className="text-[#E5A93C] text-[11px] font-mono font-bold tracking-wider">{item.period}</span>
                </div>
                <ul className="space-y-1 text-xs text-[#CBD5E1] list-disc list-inside mt-2">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Architecture Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E5A93C] flex items-center gap-2 border-b border-[#E5A93C]/20 pb-1">
              <Code2 className="w-4 h-4 text-[#E5A93C]" />
              NOTABLE ARCHITECTURE & PLATFORMS
            </h2>

            <div className="space-y-3">
              {projectsData.map(p => (
                <div key={p.id} className="space-y-1 text-xs bg-white/[0.02] p-3.5 rounded-xl border border-[#E5A93C]/15">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-syne font-bold text-sm">{p.title}</span>
                    <span className="text-[#FDD26E] text-[10px] font-mono uppercase tracking-wider bg-white/[0.04] px-2 py-0.5 rounded border border-[#E5A93C]/20">{p.architecture.protocol}</span>
                  </div>
                  <p className="text-xs text-[#CBD5E1]">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E5A93C] flex items-center gap-2 border-b border-[#E5A93C]/20 pb-1">
              <Award className="w-4 h-4 text-[#E5A93C]" />
              TECHNICAL COMPETENCIES & CERTIFICATIONS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white/[0.02] p-3.5 rounded-xl border border-[#E5A93C]/15 font-mono">
                <span className="text-[#E5A93C] font-bold text-xs uppercase tracking-wider block mb-1">Programming & AI:</span>
                <span className="text-[#CBD5E1] text-xs font-sans">Python, C++, Java, Machine Learning, Deep Learning, TensorFlow, Scikit-Learn, Pandas, NumPy.</span>
              </div>
              <div className="bg-white/[0.02] p-3.5 rounded-xl border border-[#E5A93C]/15 font-mono">
                <span className="text-[#E5A93C] font-bold text-xs uppercase tracking-wider block mb-1">Web & Database:</span>
                <span className="text-[#CBD5E1] text-xs font-sans">HTML5, CSS3, JavaScript, React.js, Tailwind CSS, SQL, MySQL, MongoDB, Firebase.</span>
              </div>
              <div className="bg-white/[0.02] p-3.5 rounded-xl border border-[#E5A93C]/15 font-mono">
                <span className="text-[#E5A93C] font-bold text-xs uppercase tracking-wider block mb-1">Data Analytics & BI:</span>
                <span className="text-[#CBD5E1] text-xs font-sans">Power BI, Tableau, Excel (Advanced), Jupyter Notebook, Data Wrangling, Statistical Inference.</span>
              </div>
              <div className="bg-white/[0.02] p-3.5 rounded-xl border border-[#E5A93C]/15 font-mono">
                <span className="text-[#E5A93C] font-bold text-xs uppercase tracking-wider block mb-1">Athletic & Leadership:</span>
                <span className="text-[#CBD5E1] text-xs font-sans">State Level Athlete (Sprint / Track & Field), College Sports Captain, Problem Solving, Agile Teamwork.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#090D15] border-t border-[#E5A93C]/20 flex items-center justify-between text-xs text-[#94A3B8] font-mono">
          <span>Official Verified Resume</span>
          <button
            onClick={handlePrint}
            className="px-5 py-2 gold-btn rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>SAVE AS PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
};

