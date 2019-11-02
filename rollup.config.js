import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
import cleaner from 'rollup-plugin-cleaner';
import typescript from 'rollup-plugin-typescript2'
export default [
	// browser-friendly UMD build
	{
		input: 'src/index.ts',
		output: {
			name: 'React-SimpleMDE',
			file: pkg.browser,
			format: 'umd',
			exports: 'named',
			globals: {
				'react': 'React',
				'react-dom': 'ReactDom',
			},
		},
		external: ['react', 'react-dom'],
		plugins: [
			postcss({
				extension: ['.css']
			}),
			resolve(),   // so Rollup can find `ms`
			commonjs(),  // so Rollup can convert `ms` to an ES module
			typescript({
				typescript: require('typescript'),
				objectHashIgnoreUnknownHack: true
    		}), // so Rollup can convert TypeScript to JavaScript
			cleaner({
				targets: [
					'./dist/'
				]
			})
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'src/index.ts',
		external: ['react', 'react-dom'],
		plugins: [
			postcss({
				extension: ['.css']
			}),
			resolve(),  
			commonjs(),  
			typescript({
				typescript: require('typescript'),
				objectHashIgnoreUnknownHack: true
    		}),
		],
		output: [
			{ file: pkg.main, format: 'cjs',exports: 'named' },
			{ file: pkg.module, format: 'es', exports: 'named' }
		]
	}
];
