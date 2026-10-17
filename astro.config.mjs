import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://IBER-DEV.github.io',
  base: '/portafolio-iber/',
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
