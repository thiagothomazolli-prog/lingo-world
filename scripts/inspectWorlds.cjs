const fs = require('fs');

for (let w = 1; w <= 7; w++) {
  const content = fs.readFileSync(`src/data/world${w}Phases.ts`, 'utf8');
  const phaseMatches = content.match(/"phaseNumber"|phaseNumber/g) || [];
  const exerciseMatches = content.match(/"id":\s*"w\d+-p\d+-e\d+"|id:\s*'w\d+-p\d+-e\d+'/g) || [];
  console.log(`World ${w}: ${phaseMatches.length} phases, ${exerciseMatches.length} exercises (avg ${(exerciseMatches.length / (phaseMatches.length || 1)).toFixed(1)}/phase)`);
}
