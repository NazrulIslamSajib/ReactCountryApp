import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ReactCountryApp/', // This fixes GitHub Pages issue
  plugins: [react()],
})
