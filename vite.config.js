import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    build: {
        outDir: "public/build", // This is where Laravel expects the built files
        manifest: true,
        input: {
            app: '/path/to/your/app.js'  // Update this path
    },
});
