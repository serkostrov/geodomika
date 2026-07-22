import path from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'

function preloadHeroImage(): Plugin {
  return {
    name: 'preload-hero-image',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle
        if (!bundle) return html

        const heroAsset = Object.keys(bundle).find(
          (fileName) =>
            fileName.includes('hero-background') && fileName.endsWith('.webp'),
        )

        if (!heroAsset) return html

        return html.replace(
          '</head>',
          `    <link rel="preload" as="image" href="/${heroAsset}" type="image/webp" fetchpriority="high" />\n  </head>`,
        )
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), preloadHeroImage()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router') ||
            id.includes('node_modules/react/')
          ) {
            return 'react-vendor'
          }
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      },
    },
  },
})
