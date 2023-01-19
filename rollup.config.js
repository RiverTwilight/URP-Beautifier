import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default [
	{
		input: "src/components/content.js",
		output: [
			{
				file: "dist/content.bundle.cjs.js",
				format: "cjs",
				sourcemap: true,
			},
			{
				file: "dist/content.bundle.esm.js",
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			alias({
				entries: [
					{ find: "react", replacement: "preact/compat" },
					{
						find: "react-dom/test-utils",
						replacement: "preact/test-utils",
					},
					{ find: "react-dom", replacement: "preact/compat" },
					{
						find: "react/jsx-runtime",
						replacement: "preact/jsx-runtime",
					},
				],
			}),
			nodeResolve({ extensions }),
			commonjs(),
			babel({
				babelHelpers: "bundled",
				extensions,
				include: ["src/**/*"],
				plugins: [
					[
						"@babel/plugin-transform-react-jsx",
						{
							pragma: "h",
							pragmaFrag: "Fragment",
						},
					],
				],
			}),
		],
	},
];
