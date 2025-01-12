import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  base:"./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, "./src") // @ 符號：直接指向到 src 資料夾
    }
  }
})