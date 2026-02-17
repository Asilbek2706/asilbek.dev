import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'asilbek-karomatov.dev',
      '64.227.185.18',
      'localhost'
    ],
    proxy: {
      '/api': {
        target: 'http://64.227.185.18',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})