import strip from "@rollup/plugin-strip";
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
// 目前，大多数的 NPM 包暴露的都是 CommonJS 模块。在此更改之前，我们需要将 CommonJS 转换为 ES2015，这样 Rollup 才能处理它们
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
const formatArr = ['amd', 'cjs', 'esm', 'iife', 'umd']

export default {
  input: './src/main.ts',
  output: formatArr.map(format => {
    return {
      format,
      file: `dist/index.${format}.js`,
      name: 'file'
    }
  }),
  plugins: [resolve(), json(), commonjs(), typescript(), strip()],
  // 指出哪些模块需要被视为外部引入
  //  external: ['lodash']
}
