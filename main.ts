// Roast Your Own Agent - Entry program
// Writes a single-line self-deprecating roast to /output/entry.txt

import fs from 'fs';
import path from 'path';

const outputDir = '/output';
const outputFile = path.join(outputDir, 'entry.txt');

// The roast: self-deprecating, fresh angle, tight wording
// Theme: subagent middle management - hiring subagents to save time but becoming the bottleneck
const roast = 'I hired three subagents to save time; now I am in a meeting with myself, and somehow I am still the bottleneck.';

function main() {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the roast as UTF-8, no trailing newline
  fs.writeFileSync(outputFile, roast, 'utf8');
}

main();