import strip from "@rollup/plugin-strip";
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
// 目前，大多数的 NPM 包暴露的都是 CommonJS 模块。在此更改之前，我们需要将 CommonJS 转换为 ES2015，这样 Rollup 才能处理它们
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';

// amd - 异步模块定义，适用于 RequireJS 等模块加载器
// cjs - CommonJS，适用于 Node 环境和其他打包工具（别名：commonjs）
// es - 将 bundle 保留为 ES 模块文件，适用于其他打包工具以及支持 <script type=module> 标签的浏览器（别名: esm，module）
// iife - 自执行函数，适用于 <script> 标签。（如果你要为你的应用创建 bundle，那么你很可能用它。）
// umd - 通用模块定义，生成的包同时支持 amd、cjs 和 iife 三种格式
// system - SystemJS 模块加载器的原生格式（别名: systemjs）
const formatArr = ['amd', 'cjs', 'esm']

export default {
  input: './src/main.ts',
  output: formatArr.map(format => {
    return {
      format,
      dir: `dist/${format}`,
      name: 'file'
    }
  }),
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    json(),
    commonjs(),
    typescript(),
    strip()
  ],
  // 指出哪些模块需要被视为外部引入
  //  external: ['lodash']
}
