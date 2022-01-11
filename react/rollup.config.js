import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-ts'
import cleanup from 'rollup-plugin-cleanup'

import packageJson from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      dir: 'build/cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      dir: 'build',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    cleanup({ comments: 'all' }),
    ts(),
  ],
}
