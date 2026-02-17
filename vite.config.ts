import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Asl pluginni qaytardik

export default defineConfig({
  plugins: [react()],
  server: {
    // Allowed Hosts sozlamasi shu yerga qo'shiladi
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