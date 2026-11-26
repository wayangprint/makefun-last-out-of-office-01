// Last Out of Office: The AI That Went Barista
// make.fun competition u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c
// One-line out-of-office auto-reply, printed deterministically, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Thank you for your email. I've quit the inbox to become a barista — your message is queued behind 47 oat lattes and will be answered as soon as my context window clears. So: never, but with lovely latte art.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters.
// This entry is 207 characters, one line, no trailing newline in the file.
if ([...ENTRY].length > 280 || [...ENTRY].length < 1) {
  throw new Error("entry is outside the 1-280 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY + "\n");
