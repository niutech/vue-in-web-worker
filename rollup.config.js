import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import image from '@rollup/plugin-image'
import replace from '@rollup/plugin-replace'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default [{
  input: 'src/worker-dom.js',
  output: {
    file: 'dist/worker-dom.js',
    format: 'esm'
  },
  plugins: [
    nodeResolve(),
	terser()
  ]
}, {
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'esm'
  },
  plugins: [
    vue({css: false}),
	css(),
    image(),
    replace({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')}),
    nodeResolve(),
	terser()
  ]
}]
