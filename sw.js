if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=t(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./dist/../index.html",revision:"c68876a935a0d5f500c8285b43ca4929"},{url:"./dist/boat7.svg",revision:"7cdeed812cd36d4c6dbf8d4ce826b20f"},{url:"./dist/main.315c9baa9f0213f31369.js",revision:"a1daf17dfcc16c8d62ea269d620da7f5"},{url:"./dist/main.53d653e55cd0dacbaea6.css",revision:"38a870ff1fb7eb801c447e074cd1a99c"}],{})}));
