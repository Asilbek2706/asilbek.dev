import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'asilbek-karomatov.dev',
      'localhost'
    ],
    proxy: {
      '/api': {
        target: 'https://api.asilbek-karomatov.dev',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});