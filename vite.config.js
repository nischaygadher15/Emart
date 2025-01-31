import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

let __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
