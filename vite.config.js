import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      open: '/login', // Otomatis membuka /login ketika vite dijalankan
      overlay: false, // Nonaktifkan overlay error di browser
    },
  },
})
