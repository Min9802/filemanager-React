import { Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
    treeshake: true,
    splitting: true,
    entry: [
        "./src/index.ts",

    ],
    loader: {
        '.jpg': 'base64',
        '.png': 'base64',
    },
    format: ["cjs", "esm"],
    dts: true,
    minify: true,
    clean: true,
    external: ['react'],
    outDir: "lib",
    ...options
}))