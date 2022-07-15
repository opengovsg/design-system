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
    dts({
      outputDir: 'build',
    }),
    copy({
      targets: [{ src: 'src/fonts', dest: 'build' }],
      hook: 'writeBundle',
    }),
  ],
  build: {
    outDir: 'build',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@opengovsg/design-system-react',
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'lodash.mergewith',
        'lodash',
        ...Object.keys(PackageJson.peerDependencies),
      ],
      output: [
        {
          format: 'umd',
          dir: 'build',
          entryFileNames: 'index.[format].js',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            ...PackageJson.peerDependencies,
          },
        },
        {
          format: 'es',
          esModule: true,
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          dir: 'build',
          entryFileNames: '[name].js',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            ...PackageJson.peerDependencies,
          },
        },
      ],
    },
    target: 'es6',
    sourcemap: false,
    minify: true,
  },
})
