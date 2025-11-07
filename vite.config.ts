import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        dts({
            tsconfigPath: resolve("./tsconfig.build.json"),
            outDir: "dist/types",
        }),
    ],
    build: {
        lib: {
            entry: "src/index.ts",
            name: "timespan.js",
            fileName: (format, entryName) => `${format}/${entryName}.js`,
            formats: ["cjs", "es"],
        },
        outDir: "dist",
        emptyOutDir: true,
        target: ["node22", "chrome140"],
        sourcemap: true,
        minify: true,
    },
});
