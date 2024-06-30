/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		coverage: {
			include: ["src/**"],
			reporter: ["lcovonly", "text"],
		},
		environment: "jsdom",
		globals: true,
		setupFiles: ["./vitest-setup.ts"],
		exclude: ["node_modules", "cypress", "dist"],
	},
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
});
