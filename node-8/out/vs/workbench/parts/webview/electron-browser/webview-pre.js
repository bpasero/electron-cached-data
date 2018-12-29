/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!function(){"use strict";const t=require("electron").ipcRenderer,e=function(){let t=!1;return()=>{t||(t=!0,require("electron").webFrame.registerURLSchemeAsPrivileged("vscode-resource",{secure:!0,bypassCSP:!1,allowServiceWorkers:!1,supportFetchAPI:!0,corsEnabled:!0}))}}();let n,o=!0,r=[],s=!1,i=!1;const c={initialScrollProgress:void 0},a=t=>{t&&(t.classList.remove("vscode-light","vscode-dark","vscode-high-contrast"),t.classList.add(c.activeTheme))},d=()=>document.getElementById("active-frame"),l=()=>document.getElementById("pending-frame");let u=!1;document.addEventListener("DOMContentLoaded",()=>{t.on("baseUrl",(t,e)=>{c.baseUrl=e}),t.on("styles",(t,e,n)=>{c.styles=e,c.activeTheme=n;const o=d();o&&(a(o.contentDocument.body),Object.keys(e).forEach(t=>{o.contentDocument.documentElement.style.setProperty(`--${t}`,e[t])}))}),t.on("focus",()=>{const t=d();t&&t.contentWindow.focus()}),t.on("content",(g,f)=>{const b=f.options;(s=b&&b.enableWrappedPostMessage)&&e()
;const h=f.contents,v=(new DOMParser).parseFromString(h,"text/html");if(v.querySelectorAll("a").forEach(t=>{t.title||(t.title=t.href)}),c.baseUrl&&0===v.head.getElementsByTagName("base").length){const t=v.createElement("base");t.href=c.baseUrl,v.head.appendChild(t)}if(s&&b.allowScripts){const t=v.createElement("script")
;t.textContent=`\n\t\t\t\t\tconst acquireVsCodeApi = (function() {\n\t\t\t\t\t\tconst originalPostMessage = window.parent.postMessage.bind(window.parent);\n\t\t\t\t\t\tlet acquired = false;\n\n\t\t\t\t\t\tlet state = ${f.state?`JSON.parse(${JSON.stringify(f.state)})`:void 0};\n\n\t\t\t\t\t\treturn () => {\n\t\t\t\t\t\t\tif (acquired) {\n\t\t\t\t\t\t\t\tthrow new Error('An instance of the VS Code API has already been acquired');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tacquired = true;\n\t\t\t\t\t\t\treturn Object.freeze({\n\t\t\t\t\t\t\t\tpostMessage: function(msg) {\n\t\t\t\t\t\t\t\t\treturn originalPostMessage({ command: 'onmessage', data: msg }, '*');\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tsetState: function(newState) {\n\t\t\t\t\t\t\t\t\tstate = newState;\n\t\t\t\t\t\t\t\t\toriginalPostMessage({ command: 'do-update-state', data: JSON.stringify(newState) }, '*');\n\t\t\t\t\t\t\t\t\treturn newState;\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tgetState: function() {\n\t\t\t\t\t\t\t\t\treturn state;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t};\n\t\t\t\t\t})();\n\t\t\t\t\tdelete window.parent;\n\t\t\t\t\tdelete window.top;\n\t\t\t\t\tdelete window.frameElement;\n\t\t\t\t`,
v.head.prepend(t,v.head.firstChild)}const w=v.createElement("style");w.id="_defaultStyles",w.innerHTML=function(t){return`\n\t\t\t:root { ${Object.keys(t||{}).map(e=>`--${e}: ${t[e].replace(/[^\#\"\'\,\. a-z0-9\-\(\)]/gi,"")};`).join("\n")} }\n\t\t\t${m}\n\t\t`}(c.styles),v.head.prepend(w),a(v.body);const p=d(),y=o;let k;if(o)o=!1,k=((t,e)=>{isNaN(c.initialScrollProgress)||0===e.scrollY&&e.scroll(0,t.clientHeight*c.initialScrollProgress)});else{const t=p&&p.contentDocument&&p.contentDocument.body?p.contentWindow.scrollY:0;k=((e,n)=>{0===n.scrollY&&n.scroll(0,t)})}const S=l();S&&(S.setAttribute("id",""),document.body.removeChild(S)),y||(r=[]);const E=document.createElement("iframe");E.setAttribute("id","pending-frame"),E.setAttribute("frameborder","0"),E.setAttribute("sandbox",b.allowScripts?"allow-scripts allow-forms allow-same-origin":"allow-same-origin"),E.style.cssText="display: block; margin: 0; overflow: hidden; position: absolute; width: 100%; height: 100%; visibility: hidden",
document.body.appendChild(E),E.contentDocument.open("text/html","replace"),E.contentWindow.addEventListener("keydown",e=>{t.sendToHost("did-keydown",{key:e.key,keyCode:e.keyCode,code:e.code,shiftKey:e.shiftKey,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,repeat:e.repeat})}),E.contentWindow.onbeforeunload=(()=>i?(t.sendToHost("do-reload"),!1):(console.log("prevented webview navigation"),!1));let T=(e,n)=>{e.body&&k(e.body,n);const o=l();if(o&&o.contentDocument===e){const e=d();e&&document.body.removeChild(e),o.setAttribute("id","active-frame"),o.style.visibility="visible",o.contentWindow.focus(),n.addEventListener("scroll",e=>{if(u)return;const n=e.currentTarget.scrollY/e.target.body.clientHeight;isNaN(n)||(u=!0,window.requestAnimationFrame(()=>{try{t.sendToHost("did-scroll",n)}catch(t){}u=!1}))}),r.forEach(t=>{n.postMessage(t,"*")}),r=[]}};clearTimeout(n),n=void 0,n=setTimeout(()=>{clearTimeout(n),n=void 0,T(E.contentDocument,E.contentWindow)},200),E.contentWindow.addEventListener("load",function(t){
n&&(clearTimeout(n),n=void 0,T(t.target,this))}),E.contentWindow.addEventListener("click",e=>{if(!e||!e.view||!e.view.document)return;let n=e.view.document.getElementsByTagName("base")[0],o=e.target;for(;o;){if(o.tagName&&"a"===o.tagName.toLowerCase()&&o.href){if("#"===o.getAttribute("href"))e.view.scrollTo(0,0);else if(o.hash&&(o.getAttribute("href")===o.hash||n&&o.href.indexOf(n.href)>=0)){let t=e.view.document.getElementById(o.hash.substr(1,o.hash.length-1));t&&t.scrollIntoView()}else t.sendToHost("did-click-link",o.href);e.preventDefault();break}o=o.parentNode}}),E.contentDocument.write("<!DOCTYPE html>"),E.contentDocument.write(v.documentElement.innerHTML),E.contentDocument.close(),t.sendToHost("did-set-content")}),t.on("message",(t,e)=>{if(!l()){const t=d();if(t)return void t.contentWindow.postMessage(e,"*")}r.push(e)}),t.on("initial-scroll-position",(t,e)=>{c.initialScrollProgress=e}),t.on("devtools-opened",()=>{i=!0}),(({onFocus:t,onBlur:e})=>{let n=document.hasFocus();setInterval(()=>{
const o=document.hasFocus();o!==n&&(n=o,o?t():e())},50)})({onFocus:()=>{t.sendToHost("did-focus")},onBlur:()=>{t.sendToHost("did-blur")}}),window.onmessage=(e=>{t.sendToHost(e.data.command,e.data.data)}),t.sendToHost("webview-ready",process.pid)})
;const m="\n\t\tbody {\n\t\t\tbackground-color: var(--vscode-editor-background);\n\t\t\tcolor: var(--vscode-editor-foreground);\n\t\t\tfont-family: var(--vscode-editor-font-family);\n\t\t\tfont-weight: var(--vscode-editor-font-weight);\n\t\t\tfont-size: var(--vscode-editor-font-size);\n\t\t\tmargin: 0;\n\t\t\tpadding: 0 20px;\n\t\t}\n\n\t\timg {\n\t\t\tmax-width: 100%;\n\t\t\tmax-height: 100%;\n\t\t}\n\n\t\ta {\n\t\t\tcolor: var(--vscode-textLink-foreground);\n\t\t}\n\n\t\ta:hover {\n\t\t\tcolor: var(--vscode-textLink-activeForeground);\n\t\t}\n\n\t\ta:focus,\n\t\tinput:focus,\n\t\tselect:focus,\n\t\ttextarea:focus {\n\t\t\toutline: 1px solid -webkit-focus-ring-color;\n\t\t\toutline-offset: -1px;\n\t\t}\n\n\t\tcode {\n\t\t\tcolor: var(--vscode-textPreformat-foreground);\n\t\t}\n\n\t\tblockquote {\n\t\t\tbackground: var(--vscode-textBlockQuote-background);\n\t\t\tborder-color: var(--vscode-textBlockQuote-border);\n\t\t}\n\n\t\t::-webkit-scrollbar {\n\t\t\twidth: 10px;\n\t\t\theight: 10px;\n\t\t}\n\n\t\t::-webkit-scrollbar-thumb {\n\t\t\tbackground-color: var(--vscode-scrollbarSlider-background);\n\t\t}\n\t\t::-webkit-scrollbar-thumb:hover {\n\t\t\tbackground-color: var(--vscode-scrollbarSlider-hoverBackground);\n\t\t}\n\t\t::-webkit-scrollbar-thumb:active {\n\t\t\tbackground-color: var(--vscode-scrollbarSlider-activeBackground);\n\t\t}"
}();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/08cba2fb66e1673b5f6537fce1de1555d169f0a4/core/vs/workbench/parts/webview/electron-browser/webview-pre.js.map
