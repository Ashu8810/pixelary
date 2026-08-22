export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  status: string;
  liveUrl: string;
  image: string;
  techStack: string[];
  challenge: string;
  solution: string;
  outcome: string;
  metaTitle: string;
  metaDescription: string;
}

export const projects: Project[] = [
  {
    slug: 'dodge-challenger',
    number: '01',
    title: 'Dodge Challenger Showcase',
    tagline: 'Cinematic engineering & automotive storytelling',
    description: 'A cinematic engineering showcase highlighting pure muscle, performance, and purpose-driven web design.',
    category: 'Web Experience',
    status: 'Live',
    liveUrl: 'https://dodgechallanger.in/',
    image: '/portfolios/Doge_challenger.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'Web Audio API'],
    challenge: 'Translating the raw power, legacy, and design precision of the iconic Dodge Challenger into an interactive web experience that engages automotive enthusiasts.',
    solution: 'Crafted a cinematic product showcase featuring high-definition visual assets, interactive performance metric comparisons, custom engine audio triggers, and fluid editorial layouts.',
    outcome: 'Shipped a memorable brand experience that highlights high-performance frontend engineering and immersive design storytelling.',
    metaTitle: 'Dodge Challenger Case Study | Pixelary B2B Web Engineering',
    metaDescription: 'Read how Pixelary built a cinematic engineering showcase for the Dodge Challenger featuring custom interactive visual design and performance optimization.'
  },
  {
    slug: 'tedxbmsit',
    number: '02',
    title: 'TEDxBMSIT Platform',
    tagline: 'Volumetric spotlight & editorial digital experience',
    description: 'A premium, cinematic platform built for TEDxBMSIT, featuring high-fidelity visual enhancements, a volumetric spotlight system, and an editorial-grade layout.',
    category: 'Web Experience',
    status: 'Live',
    liveUrl: 'https://www.tedxbmsitm.in/',
    image: '/tedxbmsit.avif',
    techStack: ['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    challenge: 'Designing a digital platform for TEDxBMSIT that captures the event’s prestige, showcases diverse speaker line-ups, and delivers an immersive user experience without compromising load speed.',
    solution: 'Engineered a bespoke web platform featuring an interactive volumetric spotlight visual system, smooth scroll transitions, and clean typography tailored for event branding and speaker discovery.',
    outcome: 'Delivered an engaging digital portal that served thousands of attendee visits, speaker profiles, and ticket reservations smoothly.',
    metaTitle: 'TEDxBMSIT Case Study | Pixelary Web Experience Design',
    metaDescription: 'Explore the TEDxBMSIT digital platform designed and developed by Pixelary, featuring volumetric spotlight animations and editorial UI/UX.'
  },
  {
    slug: 'commitiq',
    number: '03',
    title: 'CommitIQ Intelligence',
    tagline: 'Repository health & automated contribution analysis',
    description: 'Repository health intelligence for GitHub projects. Analyzes commit history to turn raw engineering activity into maintainability signals.',
    category: 'Development Tool',
    status: 'Live',
    liveUrl: 'https://commit-iq-iota.vercel.app',
    image: '/commitiq.png',
    techStack: ['FastAPI', 'Python', 'Async SQLAlchemy', 'React', 'TypeScript', 'GitHub Actions'],
    challenge: 'Managing open-source repository health during a contribution-farming incident, where automated spam activity generated ~45 pull requests and ~80 issues overnight, threatening reviewer bandwidth.',
    solution: 'Architected a FastAPI & async SQLAlchemy backend paired with a React/TypeScript analytics dashboard. Built automated GitHub Actions rate-limiting workflows and historical backfill scripts to isolate legitimate activity.',
    outcome: 'Eliminated repository spam noise, established continuous maintainability telemetry, and protected open-source maintainers from automated contribution abuse.',
    metaTitle: 'CommitIQ Case Study | FastAPI & React Engineering | Pixelary',
    metaDescription: 'Discover how Pixelary built CommitIQ using FastAPI, async SQLAlchemy, and GitHub Actions to combat contribution farming and protect repository health.'
  }
];
