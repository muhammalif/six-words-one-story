import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const STORY = 'Learned to walk. She stopped walking.';

function writeEntry() {
  if (STORY.split(/\s+/).filter(Boolean).length !== 6) {
    throw new Error("story must be six words");
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'entry.txt'), STORY, 'utf8');
}

writeEntry();
