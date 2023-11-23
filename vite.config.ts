import path, { resolve } from "path"
import fs from "fs/promises"
import svgr from "@svgr/rollup"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const outDir = path.resolve(__dirname, "dist")

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      svgr({ icon: true })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      minify: true,
      reportCompressedSize: true,
      modulePreload: false,
      outDir,
      rollupOptions: {
        input: {
          "content/generalScript": resolve(__dirname, "src/extension/content/generalScript/index.ts"),
          popup: resolve(__dirname, "src/extension/popup/index.html"),
          background: resolve(__dirname, "src/extension/background/index.ts")
        },
        output: {
          entryFileNames: "src/extension/[name]/index.js",
          chunkFileNames: 'assets/js/[name].[hash].js',
          globals: {
            __vitePreload: 'undefined'
          }
        },
      }
    }
  }
})
