import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://merdekamobil.vercel.app',
  build: {
    // Inline small CSS to reduce request chaining
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // Combine CSS into single file to reduce chaining
      cssCodeSplit: false,
      // Use LightningCSS for better minification
      cssMinify: 'lightningcss',
    },
    css: {
      transformer: 'lightningcss',
    },
  },
});
