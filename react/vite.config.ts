import react from '@vitejs/plugin-react'
import path from 'node:path'
import copy from 'rollup-plugin-copy'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

import PackageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    copy({
      targets: [{ src: 'src/fonts', dest: 'build' }],
      hook: 'writeBundle',
    }),
    dts({
      outputDir: 'build/types',
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: 'build',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'opengovsgdesignsystemreact',
      formats: ['es', 'umd'],
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(PackageJson.peerDependencies),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@chakra-ui/react': 'Chakra',
          ...PackageJson.peerDependencies,
        },
      },
    },
    target: 'es6',
    sourcemap: false,
    minify: true,
  },
})
