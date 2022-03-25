import { defineConfig } from 'vite'
import { resolve, isAbsolute } from 'path'
import plugin from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

const isExternal = (id: string) =>
  !id.startsWith('~') && !id.startsWith('.') && !isAbsolute(id)

export default defineConfig({
  plugins: [
    plugin({
      jsxRuntime: 'classic',
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
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
      plugins: [
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
      external: isExternal,
    },
    target: 'esnext',
    sourcemap: true,
  },
})
