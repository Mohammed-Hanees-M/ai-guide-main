import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  /**
   * IMPORTANT:
   * - GitHub Pages needs base: "/ai-guide-main/"
   * - Vercel MUST have base: "/"
   *
   * This condition fixes EVERYTHING.
   */
  base: mode === "production" && process.env.VERCEL
    ? "/"
    : "/ai-guide-main/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));
