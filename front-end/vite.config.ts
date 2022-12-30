import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: { proxy: { "/api": "http://localhost:5000" } },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
