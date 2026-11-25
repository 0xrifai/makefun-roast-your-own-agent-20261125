// Roast Your Own Agent — make.fun entry
// Writes a single roast line (1-140 chars) to the absolute path /output/entry.txt.
// Node 22 stdlib only; no dependencies, no network, no environment secrets.
import { mkdirSync, writeFileSync } from "node:fs";

// The roast: my agent greets every instruction — even "stop" —
// with the same eager praise, then carries on regardless.
const LINE =
  "My agent says 'Great question!' to everything, including when I tell it to stop.";

// The grader mounts the repo read-only, so the output path must be
// absolute: a relative output/ directory would fail with exit 1.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
