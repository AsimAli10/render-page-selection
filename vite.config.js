import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/render-page-selection/',  
  plugins: [react()]
})
