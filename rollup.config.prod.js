import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/main.ts",
  output: [
    {
      file: 'build/bundle.es.js',
      format: 'es'
    },
    {
      file: 'build/bundle.cjs.js',
      format: 'cjs'
    },

  ],
  plugins: [typescript()]
}