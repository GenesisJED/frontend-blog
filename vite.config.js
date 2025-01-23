import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API_URL,
        secure: false,
      },
    },
  },
  plugins: [react()],
})
