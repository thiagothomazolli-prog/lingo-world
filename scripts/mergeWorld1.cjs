const fs = require('fs');

// We load expansionW1 from buildWorld1.cjs
// Let's read buildWorld1.cjs text and eval the expansionW1
const buildScript = fs.readFileSync('scripts/buildWorld1.cjs', 'utf8');
const expansionW1Code = buildScript.substring(buildScript.indexOf('const expansionW1 = {'));
const evalFn = new Function(expansionW1Code + '; return expansionW1;');
const expansionW1 = evalFn();

// Read existing world1Phases.ts
const originalTs = fs.readFileSync('src/data/world1Phases.ts', 'utf8');

// The original file is TS. Let's see how each phase is delimited:
// "  // 1. Alfabeto" or "  {\n    id: 'w1-p1'"
// Let's parse the phases by evaluating the array if we strip type annotations, or by finding each phase object.
// A clean way in Node: strip "import { Phase } from '../types';" and "export const WORLD_1_PHASES: Phase[] = "
let jsCode = originalTs
  .replace(/import\s*\{\s*Phase\s*\}\s*from\s*['"][^'"]+['"];?/g, '')
  .replace(/export\s+const\s+WORLD_1_PHASES\s*:\s*Phase\[\]\s*=\s*/, 'const WORLD_1_PHASES = ')
  .trim();

// Execute in sandbox to get the JavaScript array
const runFn = new Function(jsCode + '; return WORLD_1_PHASES;');
const phases = runFn();

console.log(`Original phases loaded: ${phases.length}`);

// For each phase, append the new exercises!
phases.forEach(phase => {
  const pNum = phase.phaseNumber;
  const extra = expansionW1[pNum];
  if (extra && extra.length > 0) {
    const currentCount = phase.exercises.length;
    extra.forEach((ex, idx) => {
      const newExId = `w1-p${pNum}-e${currentCount + idx + 1}`;
      phase.exercises.push({
        id: newExId,
        ...ex
      });
    });
  }
  console.log(`Phase ${pNum}: now has ${phase.exercises.length} exercises`);
});

// Now write out formatted TypeScript
const outputTs = `import { Phase } from '../types';

export const WORLD_1_PHASES: Phase[] = ${JSON.stringify(phases, null, 2)};
`;

fs.writeFileSync('src/data/world1Phases.ts', outputTs, 'utf8');
console.log('Successfully wrote expanded src/data/world1Phases.ts!');
