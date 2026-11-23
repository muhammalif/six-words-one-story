// Writes the six-word story, the entire entry, to the grader's output file.
const STORY = "Learned to walk. She stopped walking.";

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, "entry.txt"), STORY, "utf8");
