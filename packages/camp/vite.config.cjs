import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const isExternal = (id) =>
  !id.startsWith('.') && !id.startsWith('~') && !path.isAbsolute(id)

export default defineConfig({
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'design-system-react',
    },
    rollupOptions: {
      external: isExternal,
      output: {
        preserveModules: true,
      },
    },
    sourcemap: true,
  },
})
