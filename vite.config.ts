import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // API so'rovlarini yo'naltirish
      '/api': {
        target: 'http://64.227.185.18', // Backend manziling
        changeOrigin: true,            // Serverga so'rov localhostdan emas, targetdan kelayotgandek ko'rsatadi
        secure: false,                 // Agar HTTPS muammosi bo'lsa, buni chetlab o'tadi
        rewrite: (path) => path.replace(/^\/api/, '/api/v1') // Agar kerak bo'lsa yo'lni o'zgartiradi
      }
    }
  }
})