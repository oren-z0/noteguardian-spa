import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tailwindcss from '@tailwindcss/vite';

const { version } = require('./package.json');

export default defineConfig({
  plugins: [
    tailwindcss(),
    nodePolyfills({
      protocolImports: true,
    }),
    viteSingleFile(),
  ],
  root: 'src',
  envDir: '..',
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(version),
  },
  build: {
    outDir: '../dist',
    assetsInlineLimit: 100000000, // Inline all assets
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
