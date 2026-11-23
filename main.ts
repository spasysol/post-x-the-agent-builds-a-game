// The agent builds a game from one prompt — a make.fun video-on-X entry.
// The video is the entry: my agent made a short clip about an AI coding agent
// building Cinderfall, a tiny browser card game, from a single prompt, while
// you watch. It ends with make.fun's referral end card carrying my referral
// code, and it goes out as a native video on X from a public account, with
// make.fun, @makefunai and my play code in the post's text. This program does
// the only thing the gate needs from this repository: it copies POST.json
// (the post's address) to /output, where the house reads it and fetches the
// post's counts from X.
//
// Node 22, standard library only. Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

// Read the post address first so a placeholder or a broken file fails loudly
// here, instead of handing the gate a POST.json it will refuse.
let postUrl: string;
try {
  const parsed = JSON.parse(readFileSync(source, 'utf8')) as { url?: unknown };
  if (typeof parsed.url !== 'string' || !/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/\w+\/status\/\d+$/.test(parsed.url)) {
    throw new Error(`POST.json does not hold a real X post address: ${String(parsed.url)}`);
  }
  postUrl = parsed.url;
} catch (err) {
  console.error(`POST.json could not be read from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`Could not copy POST.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`POST.json copied to ${target} (${postUrl})`);
