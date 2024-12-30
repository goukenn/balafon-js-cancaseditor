import App from './App.vue'
import { createApp as c } from 'virtual:balafon-vite-app'
import '@/assets/css/main.css'
import '@/lib/bge-autoload.js'
import '@/lib/cancalib/.autoload.js'  
import { i18n } from './i18n'

import JSZip from 'jszip'  

// + | inject library
igk.system.createNS('igk.lib', {JSZip}); 
 
const app = c.use(i18n)(App, null, true)