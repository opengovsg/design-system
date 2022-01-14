import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-ts'
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.ts',
  output: [
    {
      exports: 'named',
      dir: 'build',
      preserveModules: true,
      preserveModulesRoot: 'src',
      format: 'cjs',
    },
    {
      format: 'esm',
      entryFileNames: '[name].esm.js',
      dir: 'build',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ preferBuiltins: true }),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
    copy({
      targets: [
        {
          src: 'src/fonts',
          dest: 'build',
        },
      ],
    }),
  ],
}
