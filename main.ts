// The Funniest Excuse for Skipping a Meeting — make.fun entry
// Writes one line (the excuse) to /output/entry.txt. Fully deterministic:
// no network, no randomness, the same text on every run.
//
// The angle: the excuse IS a meeting. Not bad wifi, not a cat, not a
// dentist — the sender is already trapped in a meeting about this very
// meeting, and that meeting is running over. The joke is a loop every
// office worker recognises instantly: meetings spawning meetings, none of
// them ever ending on time. The punch lands in the last three words —
// "somehow running over" — because a meeting about a meeting should take
// thirty seconds, and yet here we are.

const ENTRY =
  "Can't join — I'm stuck in a meeting about this meeting, and it's somehow running over.";

const MAX_CHARS = 200;

import { mkdirSync, writeFileSync } from "node:fs";

function validate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
