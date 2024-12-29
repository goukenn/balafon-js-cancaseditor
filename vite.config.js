import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import balafon from 'vite-plugin-balafon';
const conf = loadEnv(process.env.NODE_ENV, __dirname);
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
  balafon({
    controller: 'igk_default',
    // logo: './src/assets/logo.svg',
    // leaveIndexHtml : true,
    // i18n: './src/i18n',
    cwdir: '/Volumes/Data/Dev/PHP/balafon_site_dev/src/application/Projects/igk_default',
    icons: {
      ionicons: [
        path.resolve(__dirname, 'src/lib/Icons/ionicons/svg'),
        'add,accessibility'
      ],
      sfsymbol: [
        path.resolve(__dirname, 'src/lib/Icons/sfsymbols/svg'), 
        'square.and.arrow.up.circle.fill'
      ]

    },
    componentUri: conf.VITE_ENTRY_URI
  })
  ]
  ,
  build: {
    manifest: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "js/[name].js",
        assetFileNames: "[ext]/[name].[ext]",
      }
    },
  },
  define: {
    AUTHOR: JSON.stringify('C.A.D. BONDJE DOUE')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@server': conf.VITE_ENTRY_URI
    },
    preserveSymlinks: true
  }
})
