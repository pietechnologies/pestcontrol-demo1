import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The Vite project lives in ./src so that the repository root can hold the
// built single-file app that GitHub Pages publishes ("Deploy from a branch"
// serves the root of the repository, nothing else).
export default defineConfig(({ command }) => ({
  root: path.resolve(__dirname, "src"),
  // Project page -> https://<user>.github.io/<repo>/ (dev server stays on "/").
  base: command === "serve" ? "/" : "/pestcontrol-demo1/",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
}));
