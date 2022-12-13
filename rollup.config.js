import strip from "@rollup/plugin-strip";
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
const formatArr = ['amd', 'cjs', 'esm', 'iife', 'umd']
export default formatArr.map(format => {
  return {
    input: './src/main.ts',
    output: {
      format,
      file: `dist/index.${format}.js`,
      name: 'file'
    },
    plugins: [resolve(), json(), commonjs(), typescript(), strip()],
  }
})
