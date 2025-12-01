import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure assets are loaded from the root domain on Vercel
  build: {
    outDir: 'dist',
  },
});