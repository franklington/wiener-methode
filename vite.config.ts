import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  // Relative base so the build works both at the site root and under a
  // GitHub Pages project-site subpath (https://<user>.github.io/<repo>/).
  base: "./",
  build: {
    outDir: "dist",
  },
});
