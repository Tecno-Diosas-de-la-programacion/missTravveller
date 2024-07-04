import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutUs: resolve(__dirname, 'src/pages/nosotros/paginaNosotros.html'),
        contact: resolve(__dirname, 'src/pages/contacto/paginaContacto.html'),
      },
    },
  },
})