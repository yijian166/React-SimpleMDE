import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json' assert { type: 'json' };
import postcss from 'rollup-plugin-postcss';
import cleaner from 'rollup-plugin-cleaner';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';

// Define the configuration
export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'react-markdown-editor-smde',
      file: pkg.main,
      format: 'umd',
      exports: 'named',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
      },
    },
    { 
      file: pkg.module, 
      format: 'es', 
      exports: 'named' 
    }
  ],
  external: ['react', 'react-dom', 'easymde'],
  plugins: [
    cleaner({
      targets: ['./dist/']
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    typescript({
      tsconfig: './tsconfig.json',
      compilerOptions: {
        module: 'ESNext',
        target: 'es2020',
        jsx: 'react'
      }
    }),
    postcss({
      extensions: ['.css']
    }),
    nodeResolve({
      browser: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: /node_modules\/(?!marked|marked-highlight)/,  // Exclude all node_modules except marked and marked-highlight
      presets: [
        ['@babel/preset-env', {
          targets: {
            browsers: 'last 2 versions, not ie 11'
          },
          modules: false,
        }],
        '@babel/preset-typescript',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto',
    }),
    // terser()
  ]
}