import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      // MUI v9.1.0 imports 'react-transition-group/TransitionGroupContext' (bare subpath)
      // but RTG 4.x has no `exports` field, so Node ESM can't resolve the directory import.
      // Map it explicitly to the ESM file so vitest can load @mui/material transitions.
      'react-transition-group/TransitionGroupContext':
        'react-transition-group/esm/TransitionGroupContext.js'
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    pool: 'threads',
    isolate: false,
    server: {
      deps: {
        inline: ['@macolmenerori/component-library', '@mui/material', '@mui/icons-material']
      }
    }
  }
});
