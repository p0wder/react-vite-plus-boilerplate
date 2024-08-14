import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [TanStackRouterVite(),react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})