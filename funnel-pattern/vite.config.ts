import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: "~as-is", replacement: path.resolve(__dirname, "src/as-is") },
            { find: "~to-be", replacement: path.resolve(__dirname, "src/to-be") },
        ],
    },
});
