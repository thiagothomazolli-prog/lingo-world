const fs = require('fs');
const content = fs.readFileSync('src/data/world1Phases.ts', 'utf8');

// Print first 2 phases in full
const p1 = content.indexOf("id: 'w1-p1'");
const p3 = content.indexOf("id: 'w1-p3'");
console.log(content.substring(p1, p3));
