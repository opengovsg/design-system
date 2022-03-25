import { defineConfig } from 'vite'
import { resolve } from 'path'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'design-system-react',
      formats: ['cjs', 'es'],
      // for UMD name: 'GlobalName'
    },
    rollupOptions: {
      plugins: [
        peerDepsExternal(),
        copy({
          targets: [{ src: 'src/fonts', dest: 'dist' }],
          hook: 'writeBundle',
        }),
      ],
      output: [
        {
          dir: 'dist/cjs',
          format: 'cjs',
        },
        {
          exports: 'named',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'src',
          format: 'es',
        },
      ],
    },
    target: 'es6',
    sourcemap: true,
  },
})
