const fs = require('fs');

for (let w = 2; w <= 7; w++) {
  const content = fs.readFileSync(`src/data/world${w}Phases.ts`, 'utf8');
  console.log(`\n=== WORLD ${w} ===`);
  const regex = /["']?phaseNumber["']?:\s*(\d+),\s*["']?title["']?:\s*['"]([^'"]+)['"],\s*["']?subtitle["']?:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    console.log(`P${match[1]}: ${match[2]} (${match[3]})`);
  }
}

