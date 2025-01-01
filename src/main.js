import App from './App.vue'
import { createApp as c } from 'virtual:balafon-vite-app'
import '@/assets/css/main.css'
import '@/lib/bge-autoload.js'
import '@/lib/cancalib/.autoload.js'  
import { i18n } from './i18n'

import JSZip from 'jszip'  

// + | inject library
igk.system.createNS('igk.lib', {JSZip}); 

// const bezier = new igk.winui.cancasEditor.DrawingElements.bezier();
// const r = bezier.bezierSegment.getSegment(0);

// r.set([10,10]);

// console.log("the segment ", ""+r, r);
// bezier.matrix.scale(2,2);
// bezier.matrix.translate(40,50);  
// bezier.updateTransformElement();
// console.log("the bezier", bezier, bezier.bound);

 
// igk.winui.cancasEditor.env.pathDefinition = 
// "m100,200c10 50 10 20 350 0z"; 

igk.winui.cancasEditor.env.debug = true;
igk.winui.cancasEditor.env.svg = `
<svg xmlns="http://www.w3.org/2000/svg" >
    <ellipse id="corel" fill="indigo" cx="400" cy="200"  rx="100" ry="50" ></ellipse>
    <line x1="0" y1="1" x2="300" y2="300" stroke="black" stroke-width="3" /> 
</svg>
`;

// console.log(path);
const app = c.use(i18n)(App, null, true);