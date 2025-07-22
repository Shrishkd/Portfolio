import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Optional: only import if you’ve installed it and need it
import { componentTagger } from 'lovable-tagger'

export default defineConfig(({ mode }) => ({
  server: {
    host: 'localhost', // safer default than '::'
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(), // enable only in dev mode
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
