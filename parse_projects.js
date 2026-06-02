const fs = require('fs');

const data = JSON.parse(fs.readFileSync('/Users/ashu/Desktop/Desktop - Ashutosh\'s MacBook Air/Desktop - Ashutosh’s MacBook Air/UI_UX_Projects/portfolio-github-report/portfolio_github.json', 'utf8'));

const iconMap = {
  "TypeScript": "SiTypescript",
  "Python": "SiPython",
  "CSS": "SiCss3",
  "JavaScript": "SiJavascript",
  "HTML": "SiHtml5",
  "React": "SiReact",
  "GitHub Actions": "SiGithubactions",
  "FastAPI": "SiFastapi",
  "Vite": "SiVite",
  "Tailwind CSS": "SiTailwindcss",
  "Next.js": "SiNextdotjs",
  "Docker": "SiDocker",
  "Flask": "SiFlask",
  "Express": "SiExpress"
};

let output = '';
let iconsToImport = new Set();

let idCounter = 4; // since 1,2,3 are already in CuratedPortfolios

data.projects.forEach(p => {
  // skip Elyaitra if it's already there (id=1)
  if (p.name.toLowerCase() === 'elyaitra') return;
  
  const techTags = p.tech_stack_summary || [];
  let techElements = [];
  techTags.forEach(tech => {
    if (iconMap[tech]) {
      iconsToImport.add(iconMap[tech]);
      techElements.push(`<${iconMap[tech]} key="${tech.toLowerCase().replace(/[\s\.]/g, '')}" title="${tech}" />`);
    }
  });

  const name = p.portfolio_ready?.portfolio_title || p.name;
  const link = p.homepage || p.url;

  output += `  {
    id: ${idCounter++},
    name: '${name.replace(/'/g, "\\'")}',
    location: 'India',
    members: 'Eshaan Agrawal',
    banner: '/portfolios/default_banner.png',
    avatar: '/portfolios/Ashu.png',
    technologies: [${techElements.join(', ')}],
    isFeatured: false,
    link: '${link}'
  },\n`;
});

console.log("=== IMPORTS ===");
console.log(Array.from(iconsToImport).join(', '));
console.log("=== DATA ===");
console.log(output);

