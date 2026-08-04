// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel'; // 1. Importamos el adaptador de Vercel

// https://astro.build/config
export default defineConfig({
  output: 'server', // 2. Activamos el modo SSR (Server-Side Rendering)
  adapter: vercel(), // 3. Añadimos el adaptador de Vercel
  vite: {
    plugins: [tailwindcss()]
  }
});