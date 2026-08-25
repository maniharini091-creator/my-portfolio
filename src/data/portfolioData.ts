import { Milestone, PortfolioProfile, Project, SkillCategory } from '../types';

export const initialProfile: PortfolioProfile = {
  name: 'Harini M',
  title: 'SOFTWARE DEVELOPER & DATA ANALYTICS SPECIALIST',
  tagline: 'Full Stack Software Engineer • Data Analytics Specialist • State-Level Athlete',
  shortTag: 'HARINI M',
  signatureName: 'Harini M',
  headline: 'SOFTWARE DEVELOPER & DATA ANALYTICS SPECIALIST',
  roles: [
    'SOFTWARE DEVELOPER',
    'AI & DATA SCIENCE SPECIALIST',
    'PYTHON & TYPESCRIPT ENGINEER',
    'STATE-LEVEL ATHLETE & LEADER'
  ],
  shortBio: 'Software developer and AI & Data Science scholar specializing in Python, TypeScript, and modern web architectures, with industry data analytics experience and state-level athletic discipline.',
  aboutHeadline: 'DISCIPLINED BY ATHLETICS. POWERED BY CODE.',
  aboutBio: "I'm Harini M, a Software Developer and AI & Data Science scholar at JCT College of Engineering and Technology (CGPA: 8.56/10). Experienced in building TypeScript chatbot engines, responsive web platforms, and automated Python analytics pipelines. My track & field athletic background instills razor-sharp focus and rapid execution under pressure.",
  quote: 'DISCIPLINE IN EXECUTION. PRECISION IN CODE. RELENTLESS IN IMPACT.',
  email: 'harinimani091@gmail.com',
  phone: '+91 8637608415',
  github: 'https://github.com/maniharini091-creator',
  linkedin: 'https://linkedin.com/in/harini-mani-501aa632a',
  location: 'Coimbatore, Tamil Nadu, India',
  timezone: 'UTC+05:30 (IST)',
  status: 'OPEN TO ENTRY-LEVEL DEVELOPER ROLES (IMMEDIATE)',
  education: {
    degree: 'B.Tech in AI & Data Science',
    institution: 'JCT College of Engineering & Tech',
    cgpa: '8.56 / 10',
    year: '2023 – 2027'
  },
  stats: [
    {
      value: '8.56',
      label: 'B.TECH CGPA',
      sublabel: 'AI & Data Science (JCT)',
      numericValue: 8.56,
      suffix: '/10'
    },
    {
      value: '100%',
      label: 'DATA PIPELINE ACCURACY',
      sublabel: 'Design Edge Internship',
      numericValue: 100,
      suffix: '%'
    },
    {
      value: 'STATE',
      label: 'ATHLETICS LEVEL',
      sublabel: 'National Selection Qualifier',
      numericValue: 1,
      suffix: ''
    },
    {
      value: '5+',
      label: 'CORE PROJECTS & PLATFORMS',
      sublabel: 'Python, TS & Web Systems',
      numericValue: 5,
      suffix: '+'
    }
  ],
  certifications: [
    {
      title: 'Data Analytics Course',
      issuer: 'Novitech',
      date: 'Feb 2024 – Apr 2024',
      credential: 'Verified Data Specialist'
    },
    {
      title: 'Cloud Security Fundamentals',
      issuer: 'Infosys Springboard',
      date: 'Nov 2023',
      credential: 'Cloud Security Foundation'
    }
  ],
  languages: [
    { name: 'English', level: 'Upper Intermediate (B2)' },
    { name: 'Tamil', level: 'Bilingual / Proficient (C2)' },
    { name: 'Hindi', level: 'Elementary (A2)' }
  ]
};

export const projectsData: Project[] = [
  {
    id: 'zylo-pro-chatbot',
    index: '01',
    year: '2024',
    type: 'CONVERSATIONAL BOT / TYPESCRIPT',
    title: 'ZYLO-PRO // CHATBOT APPLICATION',
    tagline: 'Intelligent Conversational Bot & Interactive Workflow Engine',
    description: 'Architected and built a responsive conversational chatbot application in TypeScript. Designed the entire dialogue flow graph, multi-turn state manager, and sleek frontend client interface with rigorous Git version control governance.',
    architecture: {
      protocol: 'REST / ASYNC EVENT BUS',
      uptime: '99.98%',
      security: 'INPUT SANITIZATION + XSS SHIELD',
      database: 'LOCAL CACHE + STATE STORE',
      latency: '< 18ms',
      throughput: '1.2k msg/s'
    },
    tags: ['TYPESCRIPT', 'JAVASCRIPT', 'TAILWIND CSS', 'ASYNC ARCHITECTURE', 'GIT & GITHUB', 'AGILE', 'RESPONSIVE UI'],
    githubUrl: 'https://github.com/maniharini091-creator',
    liveUrl: '#',
    highlights: [
      'Engineered structured conversation flow graphs handling multi-intent dialog branches.',
      'Designed a sleek, accessible front-end interface optimized for instant user response and zero layout shift.',
      'Enforced agile version control with modular component decoupling on GitHub.'
    ],
    metrics: [
      { label: 'Response Latency', value: '< 18ms' },
      { label: 'Intent Accuracy', value: '98.5%' },
      { label: 'Dialogue Flow Depth', value: '10+ Branches' }
    ],
    accentColor: '#D4AF37',
    featured: true
  },
  {
    id: 'data-analytics-pipeline',
    index: '02',
    year: '2025',
    type: 'DATA SCIENCE / AUTOMATION',
    title: 'PYTHON DATA ANALYTICS & DASHBOARD SUITE',
    tagline: 'Automated ETL Processing, Analytics & Stakeholder Dashboards',
    description: 'Engineered during Data Analytics Internship at Design Edge. Developed custom Python automation scripts to clean, process, and analyze complex structured and unstructured datasets, outputting stakeholder-ready analytical dashboards.',
    architecture: {
      protocol: 'ETL PIPELINE / PYTHON RUNTIME',
      uptime: '100% RELIABILITY',
      security: 'DATA ANONYMIZATION + MD5 HASH',
      database: 'CSV / SQL / DATAFRAMES',
      latency: '< 45ms',
      throughput: '50k rows/sec'
    },
    tags: ['PYTHON', 'PANDAS', 'NUMPY', 'MATPLOTLIB', 'SEABORN', 'DATA CLEANING', 'AUTOMATION', 'SQL'],
    githubUrl: 'https://github.com/maniharini091-creator',
    liveUrl: '#',
    highlights: [
      'Automated manual data handling workflows, cutting dataset preparation turnaround time significantly.',
      'Constructed interactive data visualization dashboards presenting crucial business metrics to stakeholders.',
      'Debugged complex data pipelines collaboratively in a technical team to guarantee 100% data integrity.'
    ],
    metrics: [
      { label: 'Processing Speedup', value: '80% Faster' },
      { label: 'Pipeline Integrity', value: '99.99%' },
      { label: 'Data Points Normalized', value: '150K+' }
    ],
    accentColor: '#F59E0B',
    featured: true
  },
  {
    id: 'veloria-luxury-fashion',
    index: '03',
    year: '2024',
    type: 'EDITORIAL E-COMMERCE / WEB',
    title: 'VELORIA // LUXURY FASHION PLATFORM',
    tagline: 'High-Fashion Digital E-Commerce Experience & Editorial Showcase',
    description: 'Designed and engineered a high-impact, fully responsive landing page and showcase platform for a luxury fashion brand. Built with semantic HTML5, modern CSS3 layout paradigms, and fluid typography with micro-interactions.',
    architecture: {
      protocol: 'HTTPS / STATIC EDGE CDN',
      uptime: '100%',
      security: 'TLS 1.3 + CONTENT SECURITY POLICY',
      database: 'STATIC CATALOG DATA',
      latency: '< 12ms',
      throughput: 'SUB-SECOND LCP'
    },
    tags: ['HTML5', 'CSS3', 'FLEXBOX / GRID', 'JAVASCRIPT', 'RESPONSIVE DESIGN', 'LUXURY UI/UX', 'SEO OPTIMIZATION'],
    githubUrl: 'https://github.com/maniharini091-creator',
    liveUrl: '#',
    highlights: [
      'Designed responsive visual lookbook with smooth scroll physics and editorial gold accents.',
      'Achieved 100/100 Lighthouse scores across Performance, Accessibility, and Best Practices.',
      'Engineered cross-device adaptive navigation with optimized touch targets for mobile and tablet.'
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '100 / 100' },
      { label: 'Layout Shift (CLS)', value: '0.00' },
      { label: 'Mobile Fluidity', value: '60 FPS' }
    ],
    accentColor: '#FDD26E',
    featured: true
  },
  {
    id: 'cloud-security-auditor',
    index: '04',
    year: '2023 - 2024',
    type: 'SECURITY & CLOUD INFRASTRUCTURE',
    title: 'CLOUD SECURITY & RBAC ACCESS AUDITOR',
    tagline: 'Infosys Certified Cloud Access Governance & Threat Modeling',
    description: 'Developed security verification scripts and role-based access control (RBAC) validators aligned with Infosys Springboard Cloud Security Fundamentals. Enforces least-privilege boundary rules and token authentication safeguards.',
    architecture: {
      protocol: 'REST + OAUTH2 / JWT',
      uptime: '99.99%',
      security: 'RBAC + LEAST PRIVILEGE + AES-256',
      database: 'ENCRYPTED AUDIT LOGS',
      latency: '< 25ms',
      throughput: '10k audit events/s'
    },
    tags: ['CLOUD SECURITY', 'RBAC', 'INFOSYS SPRINGBOARD', 'PYTHON', 'JWT / OAUTH', 'THREAT MODELING', 'AGILE'],
    githubUrl: 'https://github.com/maniharini091-creator',
    liveUrl: '#',
    highlights: [
      'Implemented policy compliance engines flagging unauthorized privilege escalations.',
      'Engineered end-to-end encryption audit monitors for structured data exchanges.',
      'Certified in Cloud Security Fundamentals by Infosys Springboard with distinction.'
    ],
    metrics: [
      { label: 'Security Compliance', value: '100% Pass' },
      { label: 'Privilege Check SLA', value: '< 5ms' },
      { label: 'Audit Telemetry', value: 'Real-time' }
    ],
    accentColor: '#D4AF37',
    featured: true
  },
  {
    id: 'personal-portfolio-site',
    index: '05',
    year: '2024',
    type: 'INTERACTIVE WEB APPLICATION',
    title: 'PERSONAL PORTFOLIO & TELEMETRY HUB',
    tagline: 'High-Impact Black & Gold Developer Showcase',
    description: 'Engineered a modern, interactive personal portfolio website deployed via GitHub Pages and modern cloud hosting. Built to showcase software projects, data science capabilities, athletic achievements, and ATS resume verification.',
    architecture: {
      protocol: 'HTTPS / VITE SPA',
      uptime: '99.99%',
      security: 'TLS 1.3 ENCRYPTED',
      database: 'REACT STATE + LOCAL STORE',
      latency: '< 10ms',
      throughput: 'CLIENT ACCELERATED'
    },
    tags: ['REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'FRAMER MOTION', 'CANVAS PARTICLES', 'GITHUB PAGES', 'AUDIO API'],
    githubUrl: 'https://github.com/maniharini091-creator',
    liveUrl: 'https://github.com/maniharini091-creator',
    highlights: [
      'Designed bespoke Black & Gold aesthetic with golden particle systems and dynamic kinetic animations.',
      'Integrated interactive Command Palette (⌘K) and complete ATS-compliant printable CV viewer.',
      'Shipped responsive touch-friendly layout with audio micro-feedback and project specification modal.'
    ],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Bundle Size', value: 'Optimized' }
    ],
    accentColor: '#FFE57F'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    code: 'LANGUAGES // 01',
    title: 'PROGRAMMING & CORE',
    subtitle: 'PYTHON, TYPESCRIPT & JAVASCRIPT',
    description: 'Solid algorithmic foundations and object-oriented principles. Proficient in writing clean, modular Python and TypeScript code across web services, bots, and automation scripts.',
    skills: ['PYTHON', 'TYPESCRIPT', 'JAVASCRIPT', 'HTML5', 'CSS3', 'SQL', 'C PROGRAMMING', 'DATA STRUCTURES'],
    metrics: { label: 'Code Quality', value: 'High Standards' }
  },
  {
    id: 'web-frontend',
    code: 'FRONTEND // 02',
    title: 'WEB & CLIENT ARCHITECTURE',
    subtitle: 'RESPONSIVE INTERFACES & PERFORMANCE',
    description: 'Crafting responsive, high-performance web applications with semantic markup, dynamic state management, custom micro-animations, and luxury editorial aesthetics.',
    skills: ['REACT.JS', 'TAILWIND CSS', 'VITE', 'RESPONSIVE WEB DESIGN', 'MODERN CSS (GRID/FLEX)', 'ASYNC JAVASCRIPT', 'DOM MANIPULATION', 'UI/UX DESIGN'],
    metrics: { label: 'Frontend Fluidity', value: '60 FPS' }
  },
  {
    id: 'data-analytics',
    code: 'ANALYTICS // 03',
    title: 'DATA ANALYTICS & AI',
    subtitle: 'ETL, VISUALIZATION & DASHBOARDS',
    description: 'Cleaning, processing, and analyzing structured/unstructured datasets with Python. Building stakeholder-ready visual dashboards with statistical rigor (Novitech Certified).',
    skills: ['PANDAS', 'NUMPY', 'MATPLOTLIB', 'SEABORN', 'DATA PROCESSING', 'DATA VISUALIZATION', 'REPORTING & DASHBOARDS', 'STATISTICAL ANALYSIS'],
    metrics: { label: 'ETL Automation', value: 'Python Native' }
  },
  {
    id: 'tools-practices',
    code: 'DEVOPS_SECURITY // 04',
    title: 'TOOLS, CLOUD & DISCIPLINE',
    subtitle: 'GIT, CLOUD SECURITY & TEAM LEADERSHIP',
    description: 'Version control workflows, cloud security foundations (Infosys Springboard), agile collaboration, and state-level athletic leadership that drives resilient teamwork.',
    skills: ['GIT & GITHUB', 'CLOUD SECURITY FUNDAMENTALS', 'AGILE METHODOLOGIES', 'PROJECT COORDINATION', 'STAKEHOLDER COLLABORATION', 'ATHLETIC DISCIPLINE', 'TEAM LEADERSHIP'],
    metrics: { label: 'Cloud Security', value: 'Infosys Certified' }
  }
];

export const milestonesData: Milestone[] = [
  {
    id: 'm-1',
    period: 'DEC 2025',
    startYear: '2025',
    endYear: '2025',
    role: 'DATA ANALYTICS INTERN',
    organization: 'Design Edge, Coimbatore, India',
    type: 'work',
    badge: 'INDUSTRY INTERNSHIP',
    description: 'Applied Python for advanced automated data processing, cleaning, and stakeholder dashboard generation under fast-paced project schedules.',
    points: [
      'Wrote Python scripts to clean, process, and analyze structured and unstructured datasets, automating manual data workflows.',
      'Built data visualization dashboards using Python to present key findings in a stakeholder-ready format.',
      'Collaborated with a technical team to debug data pipelines and enhance processing accuracy.',
      'Delivered actionable analytical insights within tight deadlines by optimizing Python-based data processing scripts.'
    ],
    skills: ['Python', 'Pandas', 'Data Visualization', 'Pipeline Debugging', 'Dashboards'],
    highlight: true
  },
  {
    id: 'm-2',
    period: '2023 - 2027 (EXPECTED)',
    startYear: '2023',
    endYear: '2027',
    role: 'B.TECH IN ARTIFICIAL INTELLIGENCE & DATA SCIENCE',
    organization: 'JCT College of Engineering and Technology, Coimbatore',
    type: 'education',
    badge: 'CGPA: 8.56 / 10',
    description: 'Comprehensive engineering degree focused on Artificial Intelligence, Machine Learning algorithms, Data Structures, Database Systems, and Software Architecture.',
    points: [
      'Maintained consistent top academic excellence with CGPA 8.56 / 10.0.',
      'Balancing high-rigor technical academics with competitive athletics and sports captaincy.',
      'Active developer and contributor in collegiate coding and tech events.'
    ],
    skills: ['Artificial Intelligence', 'Data Science', 'Python', 'TypeScript', 'DBMS', 'Algorithms'],
    highlight: true
  },
  {
    id: 'm-3',
    period: '2021 - 2024',
    startYear: '2021',
    endYear: '2024',
    role: 'STATE-LEVEL ATHLETE & NATIONAL SELECTION QUALIFIER',
    organization: 'Track & Field Athletics & Regional Marathons',
    type: 'achievement',
    badge: 'STATE-LEVEL ATHLETE',
    description: 'Competitive track and field athlete representing district and state levels with advancement to National-level selection trials.',
    points: [
      'Competed as a State-level athlete in track and field events; advanced to National-level selection trials.',
      'Secured podium placements in multiple regional and inter-district marathon competitions.',
      'Captained school sports teams, coordinating rigorous training schedules, tournament logistics, and team morale under pressure.',
      'Honed exceptional mental stamina, strategic pacing, and reliable leadership directly applied to software engineering sprints.'
    ],
    skills: ['Leadership', 'High-Pressure Composure', 'Endurance', 'Team Coordination', 'Discipline'],
    highlight: true
  },
  {
    id: 'm-4',
    period: 'FEB 2024 - APR 2024',
    startYear: '2024',
    endYear: '2024',
    role: 'DATA ANALYTICS CERTIFICATION',
    organization: 'Novitech',
    type: 'achievement',
    badge: 'PROFESSIONAL CERTIFICATION',
    description: 'Intensive hands-on certification covering real-world data analytics pipelines, exploratory data analysis (EDA), data visualization, and reporting.',
    points: [
      'Mastered statistical data exploration and feature preprocessing.',
      'Developed data visualizers to extract meaningful patterns from business datasets.',
      'Completed practical analytics capstone projects with high distinction.'
    ],
    skills: ['Data Analytics', 'Python', 'Data Visualization', 'Exploratory Analysis'],
    highlight: false
  },
  {
    id: 'm-5',
    period: 'NOV 2023',
    startYear: '2023',
    endYear: '2023',
    role: 'CLOUD SECURITY FUNDAMENTALS',
    organization: 'Infosys Springboard',
    type: 'achievement',
    badge: 'INFOSYS CERTIFIED',
    description: 'Certified in foundational cloud security principles, cloud architecture protection, identity and access governance, and vulnerability mitigation.',
    points: [
      'Gained deep understanding of cloud security perimeters, RBAC, and encryption standards.',
      'Explored compliance best practices across distributed cloud computing environments.'
    ],
    skills: ['Cloud Security', 'RBAC', 'Encryption', 'Threat Mitigation'],
    highlight: false
  },
  {
    id: 'm-6',
    period: 'MARCH 2023',
    startYear: '2021',
    endYear: '2023',
    role: 'HIGHER SECONDARY EDUCATION (MATHS WITH BIOLOGY)',
    organization: "St. Mary's Girls Higher Secondary School, Coonoor, India",
    type: 'education',
    badge: 'SCHOOL CAPTAIN & GRADUATE',
    description: 'Completed higher secondary schooling with specialization in Mathematics and Biology while captaining school sports contingents.',
    points: [
      'Strong academic foundation in analytical Mathematics and physical sciences.',
      'Captained the school sports team across multiple inter-school tournaments.'
    ],
    skills: ['Mathematics', 'Analytical Reasoning', 'Sports Captaincy'],
    highlight: false
  }
];
