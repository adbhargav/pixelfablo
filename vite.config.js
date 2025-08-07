import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure base is set to root
  build: {
    outDir: 'dist', // Default is fine, just being explicit
  },
  server: {
    historyApiFallback: true, // This is key for dev fallback
  },
});
