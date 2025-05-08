import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import  terser  from '@rollup/plugin-terser'; 

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/usbe-components.js',
    format: 'esm',
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    terser()
  ],
};
