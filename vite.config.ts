import { defineConfig } from "vite";

import { glslify } from "vite3-plugin-glslify";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
      },
    },
    assetsInlineLimit: 0,
  },
  assetsInclude: ["**/*.gltf", "**/*.glb", "**/*.hdr"],
  server: {
    open: true,
  },
  plugins: [glslify()],
});
