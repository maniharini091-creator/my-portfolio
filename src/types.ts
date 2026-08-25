export interface ProjectArchitecture {
  protocol: string;
  uptime: string;
  security: string;
  database: string;
  latency: string;
  throughput?: string;
}

export interface Project {
  id: string;
  index: string;
  year: string;
  type: string;
  title: string;
  tagline: string;
  description: string;
  architecture: ProjectArchitecture;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  accentColor?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  metrics?: { label: string; value: string };
}

export interface Milestone {
  id: string;
  period: string;
  startYear: string;
  endYear: string;
  role: string;
  organization: string;
  type: 'work' | 'achievement' | 'education';
  badge?: string;
  description: string;
  points: string[];
  skills: string[];
  highlight?: boolean;
}

export interface ProfileStat {
  value: string;
  label: string;
  sublabel?: string;
  numericValue?: number;
  suffix?: string;
}

export interface PortfolioProfile {
  name: string;
  title?: string;
  tagline?: string;
  shortTag: string;
  signatureName: string;
  headline: string;
  roles: string[];
  shortBio: string;
  aboutHeadline: string;
  aboutBio: string;
  quote: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  twitter?: string;
  leetcode?: string;
  location: string;
  timezone: string;
  status: string;
  stats: ProfileStat[];
  education?: {
    degree: string;
    institution: string;
    cgpa: string;
    year: string;
  };
  certifications?: { title: string; issuer: string; date: string; credential?: string }[];
  languages?: { name: string; level: string }[];
}

