import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// bhindley.github.io is a user pages site, so it serves from root (/)
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
