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
		output: [
			{
				name: 'react-markdown-editor-smde',
				file: pkg.main,
				format: 'umd',
				exports: 'named',
				globals: {
					'react': 'React',
					'react-dom': 'ReactDom',
				},
			},
			{ file: pkg.module, format: 'es', exports: 'named' }
		],
		external: ['react', 'react-dom'],
		plugins: [
			postcss({
				extension: ['.css']
			}),
			resolve({
				// preferBuiltins: false
				browser: true,
			}), 
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
	}
];
