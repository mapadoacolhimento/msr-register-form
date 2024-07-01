import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

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
});
