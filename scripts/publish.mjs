// Copies the single-file production build to the repository root.
//
// GitHub Pages in "Deploy from a branch" mode publishes the root of the
// branch, so the root index.html has to be the finished app. The build is
// therefore published from here and committed back to the branch by the
// "Deploy to GitHub Pages" workflow.
import { copyFileSync, existsSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const built = resolve(root, "dist/index.html");
const published = resolve(root, "index.html");

if (!existsSync(built)) {
  console.error(`Build output not found: ${built}`);
  process.exit(1);
}

copyFileSync(built, published);
console.log(
  `Published ${built} -> ${published} (${(statSync(published).size / 1024).toFixed(1)} kB)`
);
