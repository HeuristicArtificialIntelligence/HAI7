import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const docsDir = path.join(root, "docs");

if (!fs.existsSync(outDir)) {
  throw new Error("Missing out directory. Run next build first.");
}

fs.rmSync(docsDir, { recursive: true, force: true });
fs.cpSync(outDir, docsDir, { recursive: true });
fs.writeFileSync(path.join(docsDir, ".nojekyll"), "");
console.log("Copied static export from out/ to docs/ and added .nojekyll.");
