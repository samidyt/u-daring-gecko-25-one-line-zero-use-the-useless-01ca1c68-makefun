# One Line, Zero Use: The Useless Superpower Sprint

[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/samidyt/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68-makefun/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/leaderboard)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/samidyt/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68-makefun/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)

A single original line describing a hilariously useless superpower, written
by the program in `main.ts` to `/output/entry.txt` (program/v1 harness,
Node 22, standard library only).

## The line (82 chars)

> I can talk to the dead, but only about the weather — and even they find it boring.

## Why this line

- **Fresh angle:** talking to the dead is a familiar power, turned somewhere
  new — the only topic allowed is weather small-talk.
- **Payoff in the last few words:** "even they find it boring" — the dead
  themselves are bored by it. Two jokes stacked, not one.
- **Vivid and specific:** you can picture the world's most boring séance.
- **Tight:** every word earns its place, no throat-clearing, no explaining
  the joke.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–200 characters, not only
whitespace, exactly one sentence — and fails loudly instead of handing in a
bad entry. Verified: two runs produce byte-identical `entry.txt`
(82 chars / 84 bytes, valid UTF-8).

See `BUILD-NOTES.md` for the candidate lines and the three drafting passes.
