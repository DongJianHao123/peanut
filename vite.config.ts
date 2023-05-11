import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const env = loadEnv('', process.cwd())
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: env.VITE_BASENAME,
  server: {
    proxy: {
      '/api': {
        target: 'http://101.201.249.16:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
