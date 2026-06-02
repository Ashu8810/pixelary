const fs = require('fs');
const path = require('path');

const tsxPath = path.join(__dirname, 'src/app/components/CuratedPortfolios.tsx');
const publicDir = path.join(__dirname, 'public/portfolios');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

let content = fs.readFileSync(tsxPath, 'utf8');

// We need to parse the portfolios array or just use regex replacements
// A safe regex to find the name and banner:
// We can match blocks: name: '...', \n location... banner: '...',
// But it's easier to just match each name and replace the subsequent banner line.

const nameRegex = /name:\s*'([^']+)'/g;
let match;
const projects = [];

while ((match = nameRegex.exec(content)) !== null) {
  projects.push(match[1]);
}

projects.forEach(name => {
  const safeName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const svgContent = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white"/>
  <text x="50%" y="50%" font-family="sans-serif" font-size="48" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="middle">${name}</text>
</svg>`;
  
  const svgPath = path.join(publicDir, `${safeName}.svg`);
  fs.writeFileSync(svgPath, svgContent);
  
  // Now replace the banner for this specific project in the TSX
  // We need to find the block for this project and update its banner.
  // Using a replacer function for the whole portfolios array.
});

// To accurately replace banners, let's just do a manual string replace by splitting on objects.
// Wait, regex might be tricky if formatting varies. Let's just do it sequentially.
let updatedContent = content;
projects.forEach(name => {
  const safeName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  // Regex to match name: 'Project Name', followed by any lines until banner: '...'
  // We need to be careful.
  const blockRegex = new RegExp(`(name:\\s*'${name.replace(/[.*+?^$\{()|[\\]\\\\]/g, '\\\\$&')}'[\\s\\S]*?banner:\\s*')[^']+(')`);
  updatedContent = updatedContent.replace(blockRegex, `$1/portfolios/${safeName}.svg$2`);
});

fs.writeFileSync(tsxPath, updatedContent);
console.log("Successfully generated SVGs and updated CuratedPortfolios.tsx");

