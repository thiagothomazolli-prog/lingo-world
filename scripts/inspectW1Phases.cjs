const fs = require('fs');
const content = fs.readFileSync('src/data/world1Phases.ts', 'utf8');

// Parse phases from world1Phases
// We can use a regex to extract each phase block
const phases = [];
const phaseBlocks = content.split(/\{\s*id:\s*['"]w1-p/);

for (let i = 1; i < phaseBlocks.length; i++) {
  const block = phaseBlocks[i];
  const numMatch = block.match(/^(\d+)['"]/);
  const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
  const subtitleMatch = block.match(/subtitle:\s*['"]([^'"]+)['"]/);
  const objMatch = block.match(/pedagogicalObjective:\s*['"]([^'"]+)['"]/);
  const typeMatch = block.match(/type:\s*['"]([^'"]+)['"]/);
  
  if (numMatch && titleMatch) {
    phases.push({
      num: parseInt(numMatch[1], 10),
      title: titleMatch[1],
      subtitle: subtitleMatch ? subtitleMatch[1] : '',
      obj: objMatch ? objMatch[1] : '',
      type: typeMatch ? typeMatch[1] : 'lesson'
    });
  }
}

console.log(`Found ${phases.length} phases in World 1:`);
phases.forEach(p => console.log(`P${p.num} [${p.type}]: ${p.title} - ${p.subtitle}`));

