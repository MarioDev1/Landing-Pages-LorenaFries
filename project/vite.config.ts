import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración mínima para debugging
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambiar puerto para evitar conflictos
    host: 'localhost',
    open: false
  }
})
