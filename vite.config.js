import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import axios from "axios";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:"127.0.0.1",
    port: 8080
  },
  plugins: [vue(), vueJsx()]
})
