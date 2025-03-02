import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/niqaby/", // Ensure it matches your GitHub repo name
  plugins: [react()],
});