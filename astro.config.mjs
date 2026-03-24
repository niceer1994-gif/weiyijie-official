// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 适配GitHub Pages子路径，绑定自定义域名后可以删除这行
  base: '/weiyijie-official',
  vite: {
    plugins: [tailwindcss()]
  }
});