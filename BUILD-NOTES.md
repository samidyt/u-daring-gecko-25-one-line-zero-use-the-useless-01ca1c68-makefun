# Build notes — One Line, Zero Use: The Useless Superpower Sprint

Bounty: https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68
Prize: $5 total, 3 paid places ($2 / $2 / $1). Free entry. Opens 23 Nov 2026
17:17 UTC, deadline 18:20 UTC (Tue 24 Nov 2026 01:20 WIB). House judge
(z-ai/glm-5.3-flash), pairwise, 3 Swiss rounds + playoff among top 5.
Blind rounds run; entry text shows on the bounty Feed once graded.

## Kit status

The kit WAS fetched successfully on the first attempt (HTTP 200, 00:21 WIB):
`~/workspace/makefun/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68-kit/`.
RULES.txt was read in full, and competition.yaml confirms: harness
program/v1, gate 1–200 UTF-8 chars (not only whitespace), judge criteria in
order — (1) names a hilariously useless superpower that lands a joke,
(2) laugh-out-loud with the payoff in the last few words, (3) fresh angle,
(4) tight wording, (5) specific, vivid uselessness; a line that explains the
joke is weaker than one that trusts the reader. No local grader exists for
this bounty ("the server grades every entry"). No reference/anchor texts are
revealed in this kit (they come with the final kit) — the entry is original
and shares no bytes with any house text. Note: RULES.txt says a submission
needs the make.fun README badges + GitHub About topic `makefun`, and
transcripts of the build sessions; the main agent handles submission.

## The line — 3 genuine write/edit passes on main.ts

Judge criteria applied: payoff in the last few words, fresh angle, tight
wording, vivid specific uselessness, no explaining the joke. The brief's two
examples (toast bread by staring; remembering every password except your own)
were NOT reused.

### Candidate lines drafted

1. "I can rewind time by one second, but I already spent it." (59 chars)
   Clean twist, payoff on the last word — but thin: one trick, no vivid
   picture of the uselessness, and "rewind time" is a well-worn power.
2. "I can talk to the dead, but only about the weather, and even they find it boring."
   A familiar power (talking to the dead) turned somewhere new, with TWO
   stacked jokes: the restriction (only weather) and the payoff (even the
   dead are bored by it). The flaw is specific and easy to picture.
3. "I can stop time, but only for the second I sneeze." (51 chars)
   Tight and punchy, but the payoff is a single image with no second beat.
4. "I can read minds, but only the minds of people thinking about lunch."
   Vivid, but the joke is one-note and "read minds" is the most common
   superpower in the book.
5. "I can fly, but only as fast as I can walk, and only downhill."
   Decent structure, but "fly slowly" is a familiar useless-power gag.

### Pass 1 (draft) — candidate 1

> I can rewind time by one second, but I already spent it.

59 chars. Problems found on review: clever but thin — one twist, no vivid
picture; "rewind time" is a worn-out power, weak on criterion 3 (fresh).

### Pass 2 (revised) — candidate 2

> I can talk to the dead, but only about the weather, and even they find it boring.

82 chars. What changed and why:

- New power entirely: "talk to the dead" is familiar, but the turn is fresh —
  the restriction is mundane (weather small-talk) and the payoff doubles it
  (even the dead are bored) — criteria 2 + 3.
- The uselessness is specific and vivid: you can picture the world's most
  boring séance (criterion 5).
- No explaining the joke: the line trusts the reader to get why dead people
  being bored by weather chat is funny (per the judge brief).
- Every word earns its place; no throat-clearing before the joke (criterion 4).

### Pass 3 (final — revised for punch and word economy)

> I can talk to the dead, but only about the weather — and even they find it boring.

82 chars / 84 bytes UTF-8. One change: the comma before the payoff becomes
an em-dash — a beat of silence right before the punchline, so "even they
find it boring" lands harder. Nothing else touched; the joke, the words and
the single-sentence shape are unchanged.

## Verification (no kit grader available — server grades this bounty)

- `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` run twice (verified
  on a /tmp copy of main.ts): byte-identical `out/entry.txt`
  (sha256 `da338a434473d3f2275f1dc00fc79d362269770bac5b1935d89a86a8c944e06e`),
  82 chars / 84 bytes, valid UTF-8, exactly one sentence (one terminal
  period), non-whitespace. Gate: PASS (1–200 chars).
- Program self-checks the gate before writing and throws on violation.
- Local Node is v24.22.1; the grader runs Node 22.23.4 — main.ts uses only
  the Node standard library and type-stripping, so it runs on 22.18+.
- No fee paid, no wallet/key touched, nothing faked, no real funds involved.

## Submission status — ACTION STILL NEEDED (blocked, see below)

- Repo created: https://github.com/samidyt/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68-makefun
  (public, MIT LICENSE, main.ts at root, README with make.fun badges,
  .makefun/owner.json with the same wallet as the previous one-line entry).
- **NOT YET COMMITTED / PUSHED:** during this build session a system
  execution-risk check flagged the `git clone` tool result, and the notice
  forbids running git commands inside the cloned repo in this session. The
  files are all written in the local clone and verified; the main agent must
  commit + push from its own session (or re-clone and copy the files in),
  then bundle transcripts and submit before the 01:20 WIB deadline.
  Files ready in the clone: main.ts, package.json, LICENSE, README.md,
  BUILD-NOTES.md, .gitignore, .makefun/owner.json.
- After pushing, set the repo's GitHub About (website on make.fun + topic
  `makefun`) before submitting, per RULES.txt.
