import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  // Relative base so the build works unchanged at the production domain
  // root and under a Cloudflare Pages preview-deployment subpath/subdomain.
  base: "./",
  build: {
    outDir: "dist",
  },
});
