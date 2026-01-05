import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.IS_PREACT': JSON.stringify('false'),
    'process.env.EXCALIDRAW_ASSET_PATH': JSON.stringify('/'),
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      // Allow serving files from node_modules
      allow: ['..'],
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        // Ensure Excalidraw assets are properly handled
        manualChunks: {
          excalidraw: ['@excalidraw/excalidraw'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['@excalidraw/excalidraw'],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  publicDir: 'public',
});

