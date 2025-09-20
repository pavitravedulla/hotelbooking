import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/hotelbooking/',
  server: {
    proxy: {
      '/back1': 'http://localhost:8080',
      '/back3': 'http://localhost:8081'
    }
  }
})
