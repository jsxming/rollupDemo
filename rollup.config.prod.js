import strip from "@rollup/plugin-strip";
import resolve from '@rollup/plugin-node-resolve';
//ts 支持
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
//在文件中引入json文件使用
import json from '@rollup/plugin-json';
//代码压缩
import { terser } from 'rollup-plugin-terser';
const formatArr = ['amd', 'cjs', 'esm', 'iife', 'umd']

export default {
  input: './src/main.ts',
  output: formatArr.map(format => {
    return {
      format,
      file: `dist/index.${format}.js`,
      name: 'file',
      plugins: [terser()]
    }
  }),
  plugins: [resolve(), json(), commonjs(), typescript(), strip()],
}
