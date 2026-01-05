import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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
    'process.env.EXCALIDRAW_ASSET_PATH': JSON.stringify('https://unpkg.com/@excalidraw/excalidraw@0.17.0/dist/'),
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
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
});

