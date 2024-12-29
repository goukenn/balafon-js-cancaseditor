import App from './App.vue'
import { createApp as c } from 'virtual:balafon-vite-app'
import '@/assets/css/main.css'
import '@/lib/bge-autoload.js'
import '@/lib/cancalib/.autoload.js'  
import JSZip from 'jszip'


// inject library
igk.system.createNS('igk.lib', {JSZip});
 
// console.log("presidentif-base");

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here. 
const app = c(App, null, true)