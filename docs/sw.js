if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const u=s=>l(s,i),t={module:{uri:i},exports:o,require:u};e[i]=Promise.all(r.map((s=>t[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-fd57e60c"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/colorworker.f69ea41a.js",revision:null},{url:"assets/de-DE.6b3781d0.js",revision:null},{url:"assets/directory-open.4fa36e51.js",revision:null},{url:"assets/directory-open.f7d7c076.js",revision:null},{url:"assets/el-GR.3c26ab21.js",revision:null},{url:"assets/en-US.98cef5dc.js",revision:null},{url:"assets/file-open.38a61ae8.js",revision:null},{url:"assets/file-open.73377f9f.js",revision:null},{url:"assets/file-save.1c3d3b86.js",revision:null},{url:"assets/file-save.36107878.js",revision:null},{url:"assets/filehandling.762ef585.js",revision:null},{url:"assets/index.6a732c1a.js",revision:null},{url:"assets/index.802c8ea9.css",revision:null},{url:"assets/install.fc8691df.js",revision:null},{url:"assets/monochromeworker.a3227215.js",revision:null},{url:"assets/preprocessworker.b53406ee.js",revision:null},{url:"assets/preprocessworker.faa146aa.js",revision:null},{url:"assets/svgoworker.4755cfed.js",revision:null},{url:"assets/vendor.741bd9a9.js",revision:null},{url:"assets/windowcontrols.b56d847c.js",revision:null},{url:"index.html",revision:"f16887c18396032f08f9bde5a7f98ef6"},{url:"manifest.webmanifest",revision:"8f55931d509c95acbf712eec7000d50e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
