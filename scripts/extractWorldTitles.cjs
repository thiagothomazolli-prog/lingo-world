const fs = require('fs');

for (let w = 5; w <= 7; w++) {
  const content = fs.readFileSync(`src/data/world${w}Phases.ts`, 'utf8');
  const regex = /["']?phaseNumber["']?:\s*(\d+),\s*["']?title["']?:\s*['"]([^'"]+)['"],\s*["']?subtitle["']?:\s*['"]([^'"]+)['"]/g;
  let m;
  const list = [];
  while ((m = regex.exec(content)) !== null) {
    list.push({ num: parseInt(m[1]), title: m[2], sub: m[3] });
  }
  fs.writeFileSync(`scripts/w${w}_titles.json`, JSON.stringify(list, null, 2), 'utf8');
  console.log(`World ${w}: extracted ${list.length} phases`);
}

