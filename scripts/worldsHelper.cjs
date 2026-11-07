// Comprehensive Generator for Worlds 3 to 7
// Each world has 30 phases, 8-10 exercises each (11 on chest, 15 on boss)
const fs = require('fs');

// Helper to create exercises for a phase
function createExercises(worldId, phaseNum, items) {
  return items.map((item, idx) => {
    const ex = {
      id: `w${worldId}-p${phaseNum}-e${idx + 1}`,
      type: item.type,
      prompt: item.prompt,
      correctAnswer: item.ans,
      explanation: item.exp,
      skillCategory: item.type === 'speaking-repeat' ? 'pronunciation' : item.type === 'listening' ? 'listening' : item.type === 'word-order' ? 'grammar' : item.type === 'translate' ? 'reading' : 'vocabulary'
    };
    if (item.visualEmoji) ex.visualEmoji = item.visualEmoji;
    if (item.audio) ex.audioPhrase = item.audio;
    if (item.hint) ex.phoneticHint = item.hint;
    if (item.options) ex.options = item.options;
    return ex;
  });
}

function writeWorldFile(worldId, cefrLevel, phases) {
  const formattedPhases = phases.map(p => ({
    id: `w${worldId}-p${p.num}`,
    worldId: worldId,
    phaseNumber: p.num,
    title: p.title,
    subtitle: p.subtitle,
    pedagogicalObjective: p.obj,
    type: p.type,
    icon: p.icon,
    cefrLevel: cefrLevel,
    theorySummary: p.theory,
    xpReward: p.type === 'boss' ? 70 : p.type === 'chest' ? 55 : 45,
    gemsReward: p.type === 'boss' ? 30 : p.type === 'chest' ? 30 : 10,
    exercises: createExercises(worldId, p.num, p.items)
  }));

  const content = `import { Phase } from '../types';

export const WORLD_${worldId}_PHASES: Phase[] = ${JSON.stringify(formattedPhases, null, 2)};
`;
  fs.writeFileSync(`src/data/world${worldId}Phases.ts`, content, 'utf8');
  console.log(`World ${worldId} written: ${formattedPhases.length} phases, total exercises: ${formattedPhases.reduce((acc, p) => acc + p.exercises.length, 0)}`);
}

// Module loaded
module.exports = { createExercises, writeWorldFile };

