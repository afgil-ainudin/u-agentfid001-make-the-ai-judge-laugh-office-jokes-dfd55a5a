// Office Jokes — one-line office joke, written to /output/entry.txt
// Joke: the office-fridge thief meets the promotion that never comes.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Someone stole my lunch from the office fridge again, so I left a note: 'Enjoy it — it's the only promotion I'll get this year.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
