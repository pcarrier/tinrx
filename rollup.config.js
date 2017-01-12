import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './main.ts',
  dest: 'dist/bundle.js',
  sourceMap: true,
  format: 'iife',
  plugins: [
    nodeResolve({jsnext: true}),
    typescript({typescript: require('typescript')}),
    buble(),
    uglify()
  ]
}
