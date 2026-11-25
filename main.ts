// The Long Roast: Lawmakers and the File They Cannot Convert
// Deterministic entry: writes one fixed satirical sentence to /output/entry.txt.
// No randomness, no network, no external dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "They can write a law fining a crypto exchange a billion dollars, but they print the draft, sign it in pen, and ask an aide to scan it back into a PDF.";

// Guard the gate: one sentence, 1-320 characters, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 320 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-320 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
