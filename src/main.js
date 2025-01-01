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
igk.winui.cancasEditor.env.svg = `
<?xml version="1.0" encoding="UTF-8"?>
<!--Generator: Apple Native CoreSVG 326-->
<!DOCTYPE svg
PUBLIC "-//W3C//DTD SVG 1.1//EN"
       "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.3837 25.5427">
 <g id="all">
  <rect height="25.5427" opacity="0" width="27.3837" x="0" y="0"/>
  <path fill="red" d="M13.8762 3.43869L13.8762 7.57269L13.1602 7.57269L13.1602 14.1859L13.1766 15.5594L12.4469 14.8215L10.434 12.7813C10.3676 12.7094 10.261 12.6594 10.1711 12.6594C9.98597 12.6594 9.84769 12.809 9.84769 12.9914C9.84769 13.0868 9.88636 13.1586 9.9555 13.2278L13.2625 16.509C13.3453 16.5918 13.427 16.6223 13.5196 16.6223C13.6094 16.6223 13.6911 16.5918 13.7739 16.509L17.0669 13.2278C17.143 13.1586 17.1817 13.0868 17.1817 12.9914C17.1817 12.809 17.0239 12.6594 16.8485 12.6594C16.7586 12.6594 16.6618 12.7094 16.5953 12.7813L14.5825 14.8215L13.8598 15.5523L13.8762 14.1859L13.8762 7.57269L19.1575 7.57269C20.8821 7.57269 21.788 8.49691 21.788 10.1993L21.788 14.3683C18.7305 14.3719 16.209 16.8958 16.209 19.9539C16.209 20.9525 16.4754 21.8922 16.9435 22.7036L7.85786 22.7036C6.13324 22.7036 5.22737 21.8032 5.22737 20.084L5.22737 10.1993C5.22737 8.47309 6.13324 7.57269 7.85786 7.57269L13.1602 7.57269L13.1602 3.43869C13.1602 3.2465 13.3246 3.08751 13.5196 3.08751C13.7145 3.08751 13.8762 3.2465 13.8762 3.43869Z" fill="white" fill-opacity="0.85"/>
  <path fill="black" d="M26.5098 19.9539C26.5098 22.5422 24.3708 24.6688 21.795 24.6688C19.2137 24.6688 17.0801 22.5477 17.0801 19.9539C17.0801 17.3727 19.2137 15.2391 21.795 15.2391C24.386 15.2391 26.5098 17.3657 26.5098 19.9539ZM21.4001 16.9043L21.4001 19.7957L19.3751 19.7957C19.1415 19.7957 18.9524 19.9778 18.9524 20.2016C18.9524 20.4493 19.1387 20.6383 19.3751 20.6383L21.8157 20.6383C22.052 20.6383 22.2454 20.445 22.2454 20.2016L22.2454 16.9043C22.2454 16.6778 22.0633 16.5012 21.8157 16.5012C21.5891 16.5012 21.4001 16.6778 21.4001 16.9043Z" fill="white" fill-opacity="0.85"/>
 </g>
</svg>

`;

// console.log(path);
const app = c.use(i18n)(App, null, true);