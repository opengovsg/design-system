import { defineConfig } from 'vite'
import { resolve } from 'path'
import plugin from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

const packageJson = require('./package.json')

export default defineConfig({
  plugins: [
    plugin({
      jsxRuntime: 'classic',
    }),
    copy({
      targets: [{ src: 'src/fonts', dest: 'dist' }],
      hook: 'writeBundle',
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
      // for UMD name: 'GlobalName'
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.peerDependencies),
        ...Object.keys(packageJson.dependencies),
      ],
    },
    target: 'esnext',
    sourcemap: true,
  },
})
