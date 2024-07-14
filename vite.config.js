import { register } from 'module'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutUs: resolve(__dirname, 'src/pages/nosotros/paginaNosotros.html'),
        contact: resolve(__dirname, 'src/pages/contacto/paginaContacto.html'),
        login: resolve(__dirname, 'src/pages/ingresar/ingresar.html'),
        form: resolve(__dirname, 'src/pages/formulario/formulario.html'),
        products: resolve(__dirname, 'src/pages/productos/productos.html'),
        signup: resolve(__dirname, 'src/pages/registro/registro.html'),

      },
    },
  },
})