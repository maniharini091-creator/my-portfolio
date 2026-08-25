/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { projectsData } from './data/portfolioData';
import { Project } from './types';
import { playSound } from './utils/sound';
import { PhotoProvider } from './context/PhotoContext';

export default function App() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy for current active section in navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectProjectById = (id: string) => {
    const proj = projectsData.find((p) => p.id === id);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const handleExploreWork = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PhotoProvider>
      <div className="relative min-h-screen bg-[#07090E] text-white selection:bg-[#E5A93C] selection:text-black font-sans">
        {/* Dynamic Starlight & Golden Ambient Particle Canvas */}
        <ParticlesBackground />

        {/* Futuristic HUD Navigation */}
        <Navbar
          onOpenCommand={() => setIsCommandOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          activeSection={activeSection}
        />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection
            onOpenResume={() => setIsResumeOpen(true)}
            onExploreWork={handleExploreWork}
          />
          <AboutSection onExploreProjects={handleExploreWork} />
          <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Global Command Palette (Cmd+K) */}
        <CommandPalette
          isOpen={isCommandOpen}
          onClose={() => setIsCommandOpen(false)}
          onSelectProject={handleSelectProjectById}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Architectural Project Inspection Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Printable / ATS Resume Viewer Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </PhotoProvider>
  );
}
