import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-ts'
import cleanup from 'rollup-plugin-cleanup'

export default {
  input: 'src/index.ts',
  output: [
    {
      exports: 'named',
      dir: 'build',
      preserveModules: true,
      preserveModulesRoot: 'src',
      format: 'cjs',
      sourcemap: true,
    },
    {
      format: 'esm',
      sourcemap: true,
      dir: 'build/esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    ts({
      tsconfig: 'tsconfig.build.json',
    }),
    cleanup({ comments: 'all' }),
  ],
}
