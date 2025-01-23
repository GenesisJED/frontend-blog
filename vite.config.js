import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getEnvVariables } from './src/helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: VITE_API_URL || 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
