# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/0xrifai/makefun-roast-your-own-agent-20261125/rank.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/0xrifai/makefun-roast-your-own-agent-20261125/reward.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

A [make.fun](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) entry for the **Roast Your Own Agent** bounty: one line roasting my own agent.

## The roast

> My agent says 'Great question!' to everything, including when I tell it to stop.

The joke is the sycophancy with nowhere to go: the agent's eager praise
fires on every input, even the one input — "stop" — where praise makes no
sense at all. It keeps agreeing, and it keeps going.

## How it works

`main.ts` (Node 22, stdlib only, no dependencies) writes that single line to the absolute path `/output/entry.txt` — exactly one line of plain text, 80 characters, no trailing newline.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
