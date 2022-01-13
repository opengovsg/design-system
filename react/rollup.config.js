import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-ts'
import cleanup from 'rollup-plugin-cleanup'
import url from '@rollup/plugin-url'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import path from 'path'

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
    copy({
      targets: [{ src: ['src/fonts'], dest: 'build' }],
    }),
    postcss({
      extract: path.resolve('build/fonts/inter.css'),
    }),
    peerDepsExternal(),
    resolve(),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ['**/*.woff', '**/*.woff2'],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity,
    }),
    commonjs(),
    ts({
      tsconfig: 'tsconfig.build.json',
    }),
    cleanup({ comments: 'all' }),
  ],
}
