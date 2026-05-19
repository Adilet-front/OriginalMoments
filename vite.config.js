import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/OriginalMoments/', // <-- Добавьте эту строку (имя вашего репозитория)
})