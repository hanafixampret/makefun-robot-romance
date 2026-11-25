import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Robot Romance — the whole entry is this single pickup line.
// The joke has to work on two levels at once: the classic
// "Are you a...? Because..." pickup rhythm, and a premise only
// a machine would get — a transformer that literally runs on
// attention, all of it, in every head.
const LINE =
  "Are you a transformer? Because you've got my attention, all of it, in every head.";

const text = LINE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== text) {
  throw new Error("round-trip mismatch writing /output/entry.txt");
}
console.log(`wrote /output/entry.txt (${text.length} chars)`);
