import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const moduleDir = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(moduleDir, process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const entryText = "137\n";

mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), entryText, "utf8");
