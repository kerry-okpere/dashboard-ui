import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/styles/main.scss";`
      }
    }
  },
  plugins: [vue()]
})
