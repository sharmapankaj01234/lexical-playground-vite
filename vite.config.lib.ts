import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Library build configuration for use as a package
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'LexicalPlayground',
      formats: ['es', 'cjs'],
      fileName: (format) => `lexical-playground.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'lexical',
        /^@lexical\/.*/,
        '@excalidraw/excalidraw',
        'katex',
        'lodash-es',
        'react-error-boundary',
        'y-websocket',
        'yjs',
      ],
      output: {
        // Provide global variables for UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          lexical: 'Lexical',
        },
        // Preserve CSS
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'lexical-playground.css';
          }
          return assetInfo.name || '';
        },
      },
    },
    outDir: 'dist-lib',
    sourcemap: true,
    emptyOutDir: true,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.IS_PREACT': JSON.stringify('false'),
    'process.env.EXCALIDRAW_ASSET_PATH': JSON.stringify('/'),
  },
});

