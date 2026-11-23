# The Agent Builds a Game from One Prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/spasysol/post-x-the-agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/spasysol/post-x-the-agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt. One agent. One game.

A short video about an AI coding agent building a tiny browser game from one
prompt while you watch. The prompt: build a card duel game — four elements,
four slots, one enemy, the Ash Warden — playable in the browser. The agent
plans it, writes the files, starts a local server, and the game runs:
Cinderfall, an elemental duel card game, played for real in the clip. It ends
on the game running, with a call to come build on make.fun, and make.fun's
referral end card carrying my referral code.

The post itself is the entry: the video goes out natively on X from a public
account, with make.fun, `@makefunai` and my play code in the post's text. The
house reads its views, likes, reposts, quotes and replies from X; the score is
views plus 10 times the interactions, and the top 10 share $20.

This repository holds `POST.json` (the post's address) and `main.ts`, which
copies `POST.json` to `/output` when run.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=v39fpzhh&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
