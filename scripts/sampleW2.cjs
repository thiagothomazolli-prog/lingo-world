const fs = require('fs');
const content = fs.readFileSync('src/data/world2Phases.ts', 'utf8');

const p1 = content.indexOf('"id": "w2-p1"');
const p3 = content.indexOf('"id": "w2-p3"');
console.log(content.substring(p1, p3));

