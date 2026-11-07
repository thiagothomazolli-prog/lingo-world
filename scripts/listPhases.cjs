const fs = require('fs');

for (let w = 1; w <= 7; w++) {
  const content = fs.readFileSync(`src/data/world${w}Phases.ts`, 'utf8');
  console.log(`\n=== WORLD ${w} ===`);
  const regex = /["']?phaseNumber["']?:\s*(\d+),\s*["']?title["']?:\s*['"]([^'"]+)['"]/g;
  let match;
  let count = 0;
  while ((match = regex.exec(content)) !== null) {
    if (count < 5 || count >= 28) {
      console.log(`  Phase ${match[1]}: ${match[2]}`);
    } else if (count === 5) {
      console.log('  ...');
    }
    count++;
  }
}
