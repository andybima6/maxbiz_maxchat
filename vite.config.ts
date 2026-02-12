import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // HARUS ADA INI
  server: {
    host: "::",
    port: 5173,
    strictPort: true,
    // comment HMR config untuk development lokal
    hmr: {
      clientPort: 443,
      host: "max.biz.id",
      protocol: "wss",
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
