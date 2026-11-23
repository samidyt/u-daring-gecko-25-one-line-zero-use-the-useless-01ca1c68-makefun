// One Line, Zero Use: The Useless Superpower Sprint — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one line to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from the bounty criteria / RULES.txt): /output/entry.txt must be
// UTF-8 text of 1–200 characters, not only whitespace. This program enforces
// the gate on its own output and fails loudly instead of handing in a bad entry.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// PASS 3 (final) — one more revision for punch and word economy: the comma
// before the payoff becomes an em-dash, a beat of silence before the punch.
const LINE =
  'I can talk to the dead, but only about the weather — and even they find it boring.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate self-check: 1–200 chars, not only whitespace, exactly one sentence.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1–200`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
// One sentence: exactly one sentence-terminating mark, at the end.
if ((LINE.match(/[.!?]/g) ?? []).length !== 1 || !/[.!?]$/.test(LINE)) {
  throw new Error('entry must be exactly one sentence');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
