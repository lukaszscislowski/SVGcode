if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,d)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let a={};const o=e=>r(e,f),c={module:{uri:f},exports:a,require:o};s[f]=Promise.all(i.map((e=>c[e]||o(e)))).then((e=>(d(...e),a)))}}define(["./workbox-fd57e60c"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/colorworker.0ed47b01.js",revision:"0b1c4cbd0654cf3071e0f3d630b68c51"},{url:"assets/de.58feef74.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/directory-open.4fa36e51.js",revision:"d6952bd540ae5d2b631ce5614451e86d"},{url:"assets/directory-open.f7d7c076.js",revision:"c8285ef3b135a858edb4fe9728a5a1f0"},{url:"assets/en-US.2a124a35.js",revision:"20773e49f3d04e27ece955a4b9cc6ba4"},{url:"assets/file-open.38a61ae8.js",revision:"ee1f95c3d68ef5aa585c9d70fa62a522"},{url:"assets/file-open.73377f9f.js",revision:"ef8971f4918fc289eb0a8fd6e60c2baa"},{url:"assets/file-save.1c3d3b86.js",revision:"853ab6f729ed68fc89a66854d0302964"},{url:"assets/file-save.36107878.js",revision:"372b959bf037e345767e8e0734f9078b"},{url:"assets/filehandling.77c3897b.js",revision:"45e85fe724024f2009159d791b7b9774"},{url:"assets/index.5960d7c9.js",revision:"0cf7652ce48595aa5cc3e72eb8c4d7fd"},{url:"assets/index.8309dd6d.css",revision:"b56eb4e371b814559543c0a158ecd81f"},{url:"assets/install.4472cb73.js",revision:"d6384647e2c54fdc81bebea42a2f0cd2"},{url:"assets/monochromeworker.a3227215.js",revision:"812f2513a81b2081d1466784f38f8318"},{url:"assets/preprocessworker.b53406ee.js",revision:"1e911c59fe37ea58bf50dfc77743dbfb"},{url:"assets/preprocessworker.faa146aa.js",revision:"6f3044fb23f22abe9aa86053ef2362fd"},{url:"assets/svgoworker.4755cfed.js",revision:"34bd5f472d3ee8017b4610385f09f2a8"},{url:"assets/vendor.741bd9a9.js",revision:"3b2e4e13ce2ddb6043d11b71f0304698"},{url:"assets/windowcontrols.bea52295.js",revision:"a05f9ba92ee0b63e30e8572f7297bdf9"},{url:"index.html",revision:"eaa60122dc1b42b37901cd4b15cdf89d"},{url:"manifest.webmanifest",revision:"bc0dd460d1b81539bc3cc9d516379b73"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
