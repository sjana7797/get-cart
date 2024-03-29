import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@ui",
        replacement: fileURLToPath(
          new URL("../../packages/ui", import.meta.url),
        ),
      },
      {
        find: "@common",
        replacement: fileURLToPath(
          new URL("../../packages/common", import.meta.url),
        ),
      },
    ],
  },
});
