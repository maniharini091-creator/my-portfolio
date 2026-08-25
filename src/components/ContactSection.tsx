import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, Check, Terminal, Mail, MapPin, Globe, Shield, ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/sound';
import { initialProfile } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    sender: '',
    email: '',
    topic: 'Engineering Collaboration / Full-Time Role',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'transmitting' | 'transmitted'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(initialProfile.email);
    setCopiedEmail(true);
    playSound('success');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    if (initialProfile.phone) {
      navigator.clipboard.writeText(initialProfile.phone);
      setCopiedPhone(true);
      playSound('success');
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.sender || !formData.email || !formData.message) return;

    playSound('warp');
    setStatus('transmitting');

    setTimeout(() => {
      setStatus('transmitted');
      playSound('success');
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#FFE57F', '#E5A93C', '#B45309', '#FDD26E']
        });
      } catch {
        // no-op
      }
    }, 1000);
  };

  const resetForm = () => {
    setStatus('idle');
    setFormData({
      sender: '',
      email: '',
      topic: 'Engineering Collaboration / Full-Time Role',
      message: '',
    });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-b border-[#E5A93C]/20 bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center justify-between pb-4 mb-10 border-b border-[#E5A93C]/20">
          <span className="text-xs uppercase font-mono tracking-widest font-bold text-[#E5A93C] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
            05 // DIRECT CONTACT & OPPORTUNITIES
          </span>
          <span className="text-xs font-mono text-[#94A3B8]">
            Available for 2025 AI / Data Analytics Opportunities
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-white tracking-tight leading-tight">
            Direct Inquiries <br />
            <span className="gold-gradient-text block mt-1">
              & Collaborations.
            </span>
          </h2>
          <p className="text-sm text-[#94A3B8] font-sans mt-2">
            Looking for an ambitious AI & Data Science engineer or have an exciting project? Drop a message below.
          </p>
        </div>

        {/* Grid Layout: Form (Left) + Terminal Status HUD (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Dispatch Terminal Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 gold-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#E5A93C]/25 shadow-2xl relative"
          >
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5A93C]/20 text-xs text-white font-mono">
              <div className="flex items-center gap-2 text-[#E5A93C] font-bold">
                <Sparkles className="w-4 h-4 text-[#E5A93C]" />
                <span>DISPATCH TRANSMISSION</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#FDD26E] bg-white/[0.04] px-2.5 py-1 rounded-md border border-[#E5A93C]/30 font-bold">
                TLS 1.3 SECURE
              </span>
            </div>

            {status === 'transmitted' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E5A93C]/20 border border-[#E5A93C] text-[#FDD26E] mx-auto flex items-center justify-center shadow-lg shadow-[#E5A93C]/20">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-syne font-bold text-white">
                  Transmission Dispatched
                </h3>
                <p className="text-sm text-[#CBD5E1] max-w-md mx-auto font-sans">
                  Your message has been delivered directly to Harini M's inbox. Expect a response promptly!
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 gold-btn rounded-xl text-xs font-mono font-bold uppercase tracking-wider"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs font-mono">
                
                {/* Sender Name */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#E5A93C] flex items-center justify-between">
                    <span>Sender Name / Company</span>
                    <span className="text-[#94A3B8] text-[10px]">*Required</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.sender}
                    onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (Talent Partner)"
                    className="w-full px-4 py-3 bg-[#090D15] rounded-xl border border-[#E5A93C]/25 text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#E5A93C] transition-all font-sans text-sm"
                  />
                </div>

                {/* Return Route (Email) */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#E5A93C] flex items-center justify-between">
                    <span>Email Address</span>
                    <span className="text-[#94A3B8] text-[10px]">*Required</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-3 bg-[#090D15] rounded-xl border border-[#E5A93C]/25 text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#E5A93C] transition-all font-sans text-sm"
                  />
                </div>

                {/* Topic / Purpose */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#E5A93C]">
                    Subject Matter
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 bg-[#090D15] rounded-xl border border-[#E5A93C]/25 text-white focus:outline-none focus:border-[#E5A93C] transition-all font-sans text-sm"
                  >
                    <option value="Engineering Collaboration / Full-Time Role">Full-Time AI & Data Science Role</option>
                    <option value="Data Analytics Opportunity">Data Analytics / Business Intelligence Project</option>
                    <option value="Machine Learning Collaboration">Machine Learning & Python Development</option>
                    <option value="General Technical Inquiry">General Inquiry / Mentorship</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#E5A93C] flex items-center justify-between">
                    <span>Message Content</span>
                    <span className="text-[#94A3B8] text-[10px]">*Required</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Harini about your team, tech stack, or collaborative opportunity..."
                    className="w-full px-4 py-3 bg-[#090D15] rounded-xl border border-[#E5A93C]/25 text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#E5A93C] transition-all font-sans text-sm resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'transmitting'}
                    onMouseEnter={() => playSound('hover')}
                    className="w-full py-4 px-6 font-bold text-xs uppercase tracking-widest gold-btn rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'transmitting' ? (
                      <>
                        <span className="animate-spin">⟳</span>
                        <span>TRANSMITTING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT DISPATCH</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </motion.div>

          {/* Direct Communication & Location HUD */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 gold-card rounded-2xl border border-[#E5A93C]/25 space-y-5 shadow-xl"
            >
              <div className="flex items-center justify-between text-xs text-white font-mono">
                <span className="text-xs font-bold text-[#E5A93C]">DIRECT CHANNELS</span>
                <span className="text-[#FDD26E] flex items-center gap-1.5 text-xs font-bold bg-[#E5A93C]/10 border border-[#E5A93C]/30 px-2.5 py-0.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse" />
                  AVAILABLE
                </span>
              </div>

              {/* Email Box */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block mb-1.5">Primary Email</span>
                <div className="flex items-center justify-between gap-2 p-3 bg-[#090D15] rounded-xl border border-[#E5A93C]/25 text-xs sm:text-sm text-white">
                  <span className="truncate font-mono text-[#FDD26E]">{initialProfile.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-[#E5A93C]/20 text-[#E5A93C] shrink-0 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Box */}
              {initialProfile.phone && (
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block mb-1.5">Contact Number</span>
                  <div className="flex items-center justify-between gap-2 p-3 bg-[#090D15] rounded-xl border border-[#E5A93C]/25 text-xs sm:text-sm text-white">
                    <span className="truncate font-mono text-[#CBD5E1]">{initialProfile.phone}</span>
                    <button
                      onClick={handleCopyPhone}
                      title="Copy Phone"
                      className="p-2 rounded-lg bg-white/[0.04] hover:bg-[#E5A93C]/20 text-[#E5A93C] shrink-0 transition-colors"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>

            {/* System Coordinates & Geolocation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 sm:p-8 gold-card rounded-2xl border border-[#E5A93C]/25 text-xs font-mono space-y-3.5 shadow-xl"
            >
              <div className="text-xs uppercase tracking-wider font-bold text-[#E5A93C] pb-2 border-b border-[#E5A93C]/20 flex items-center justify-between">
                <span>SYSTEM CONTEXT</span>
                <span className="text-[10px] text-[#94A3B8]">HARINI M // 2025</span>
              </div>

              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-[#94A3B8]">Location</span>
                <span className="text-white font-medium">{initialProfile.location}</span>
              </div>

              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-[#94A3B8]">Degree</span>
                <span className="text-[#FDD26E] font-medium">B.Tech AI & Data Science</span>
              </div>

              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-[#94A3B8]">Status</span>
                <span className="text-emerald-400 font-medium">Open for Relocation / Remote</span>
              </div>

              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-[#94A3B8]">Languages</span>
                <span className="text-white font-medium">English (Proficient), Tamil (Native)</span>
              </div>
            </motion.div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <a
                href={initialProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                className="p-4 gold-card rounded-xl border border-[#E5A93C]/25 hover:border-[#E5A93C] text-white flex items-center justify-between transition-all font-bold group"
              >
                <span className="group-hover:text-[#FDD26E]">GITHUB</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5A93C]" />
              </a>

              <a
                href={initialProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                className="p-4 gold-card rounded-xl border border-[#E5A93C]/25 hover:border-[#E5A93C] text-white flex items-center justify-between transition-all font-bold group"
              >
                <span className="group-hover:text-[#FDD26E]">LINKEDIN</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5A93C]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

