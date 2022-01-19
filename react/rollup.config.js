import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ttypescript from 'ttypescript'
import typescript from 'rollup-plugin-typescript2'
import copy from 'rollup-plugin-copy'

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json')

const globals = {
  ...packageJson.devDependencies,
}

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
    resolve(),
    commonjs(),
    typescript({
      typescript: ttypescript,
      useTsconfigDeclarationDir: true,
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
  external: Object.keys(globals),
}
