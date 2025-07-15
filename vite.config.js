// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(), // Integrate the Tailwind CSS Vite plugin
  ],
  build: {
    outDir: 'dist',
  },
});