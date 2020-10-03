var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,r){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}(e,r))}function a(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(){return f("")}function p(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t,n){t.value=null==n?"":n}function $(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}let y;function b(t){y=t}function w(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const x=[],C=[],_=[],v=[],L=Promise.resolve();let k=!1;function A(t){_.push(t)}let E=!1;const M=new Set;function N(){if(!E){E=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];b(n),S(n.$$)}for(b(null),x.length=0;C.length;)C.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];M.has(n)||(M.add(n),n())}_.length=0}while(x.length);for(;v.length;)v.pop()();k=!1,E=!1,M.clear()}}function S(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const j=new Set;let F;function O(t,n){t&&t.i&&(j.delete(t),t.i(n))}function P(t,n,e,r){if(t&&t.o){if(j.has(t))return;j.add(t),F.c.push((()=>{j.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function T(t){t&&t.c()}function U(t,e,c){const{fragment:u,on_mount:a,on_destroy:l,after_update:i}=t.$$;u&&u.m(e,c),A((()=>{const e=a.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),i.forEach(A)}function B(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function R(t,n){-1===t.$$.dirty[0]&&(x.push(t),k||(k=!0,L.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(n,o,c,u,a,l,s=[-1]){const f=y;b(n);const d=o.props||{},h=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:s,skip_bound:!1};let p=!1;if(h.ctx=c?c(n,d,((t,e,...r)=>{const o=r.length?r[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),p&&R(n,t)),e})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!u&&u(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();o.intro&&O(n.$$.fragment),U(n,o.target,o.anchor),N()}b(f)}class D{$destroy(){B(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(t,n,e){const r=t.slice();return r[3]=n[e],r}function Z(t){let n,e,r,o;return{c(){n=s("span"),e=s("img"),o=d(),e.src!==(r=t[3].award)&&m(e,"src",r),m(e,"height","64"),m(e,"width","64"),m(e,"alt","Award"),$(n,"left",t[3].x+"%"),$(n,"top",t[3].y+"%"),$(n,"transform","scale("+t[3].r+")"),m(n,"class","svelte-urp9ot")},m(t,r){l(t,n,r),a(n,e),a(n,o)},p(t,o){1&o&&e.src!==(r=t[3].award)&&m(e,"src",r),1&o&&$(n,"left",t[3].x+"%"),1&o&&$(n,"top",t[3].y+"%"),1&o&&$(n,"transform","scale("+t[3].r+")")},d(t){t&&i(n)}}}function z(n){let e,r=n[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=Z(H(n,r,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);l(t,e,n)},p(t,[n]){if(1&n){let c;for(r=t[0],c=0;c<r.length;c+=1){const u=H(t,r,c);o[c]?o[c].p(u,n):(o[c]=Z(u),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}},i:t,o:t,d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t),t&&i(e)}}}function G(t,n,e){let{amount:r}=n,{awards:o}=n,c=new Array(r).fill().map(((t,n)=>({award:o[n%o.length],x:100*Math.random(),y:-20-100*Math.random(),r:.1+1*Math.random()}))).sort(((t,n)=>t.r-n.r));return w((()=>{let t;return function n(){t=requestAnimationFrame(n),e(0,c=c.map((t=>(t.y+=.7*t.r,t.y>120&&(t.y=-20),t))))}(),()=>cancelAnimationFrame(t)})),t.$$set=t=>{"amount"in t&&e(1,r=t.amount),"awards"in t&&e(2,o=t.awards)},[c,r,o]}class V extends D{constructor(t){super(),q(this,t,G,z,c,{amount:1,awards:2})}}const I=[];function J(n,e=t){let r;const o=[];function u(t){if(c(n,t)&&(n=t,r)){const t=!I.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),I.push(e,n)}if(t){for(let t=0;t<I.length;t+=2)I[t][0](I[t+1]);I.length=0}}}return{set:u,update:function(t){u(t(n))},subscribe:function(c,a=t){const l=[c,a];return o.push(l),1===o.length&&(r=e(u)||t),c(n),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const K=J(""),Q=J(null),W=J(!1),X=J([]),Y=t=>t.toLocaleString("en-US",{style:"currency",currency:"USD"}),tt=t=>{Q.set(null),W.set(!0),X.set([]),fetch((t=>t.split("?")[0].split("#")[0])(t)+".json").then((t=>t.json())).then((t=>{(t=>{let n;return n=1===t[1].data.children.length?t[1].data.children[0].data:t[0].data.children[0].data,n.all_awardings.map((t=>({amount:t.count,price:t.coin_price,icon:t.icon_url})))})(t).forEach((t=>{Q.update((n=>n+.003*t.price*t.amount)),X.update((n=>[...n,t.icon]))})),W.set(!1)})).catch((t=>{throw W.set(!1),t}))};function nt(t){let n;return{c(){n=f("Calculate")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function et(t){let n;return{c(){n=f("Loading...")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function rt(t){let n,e,r,o,c,u,h,g=Y(t[2])+"";return{c(){n=s("h1"),e=f("~"),r=f(g),o=d(),c=s("a"),c.textContent="Copy link to this result",$(n,"margin-top","5px"),$(n,"margin-bottom","1px"),m(c,"href","#")},m(i,s){l(i,n,s),a(n,e),a(n,r),l(i,o,s),l(i,c,s),u||(h=p(c,"click",t[4]),u=!0)},p(t,n){4&n&&g!==(g=Y(t[2])+"")&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(r,g)},d(t){t&&i(n),t&&i(o),t&&i(c),u=!1,h()}}}function ot(t){let n,e;return n=new V({props:{awards:t[3],amount:t[3].length}}),{c(){T(n.$$.fragment)},m(t,r){U(n,t,r),e=!0},p(t,e){const r={};8&e&&(r.awards=t[3]),8&e&&(r.amount=t[3].length),n.$set(r)},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(t){B(n,t)}}}function ct(t){let n,e,c,u,a,f,$,y,b,w;function x(t,n){return t[1]?et:nt}let C=x(t),_=C(t),v=null!==t[2]&&rt(t),L=t[3].length&&ot(t);return{c(){n=s("input"),e=d(),c=s("button"),_.c(),a=d(),v&&v.c(),f=d(),L&&L.c(),$=h(),m(n,"type","text"),m(n,"class","input svelte-1fn0hwk"),m(n,"placeholder","Post or Comment URL"),c.disabled=u=!t[0]},m(r,u){l(r,n,u),g(n,t[0]),l(r,e,u),l(r,c,u),_.m(c,null),l(r,a,u),v&&v.m(r,u),l(r,f,u),L&&L.m(r,u),l(r,$,u),y=!0,b||(w=[p(n,"input",t[5]),p(c,"click",(function(){o(tt(t[0]))&&tt(t[0]).apply(this,arguments)}))],b=!0)},p(e,[o]){t=e,1&o&&n.value!==t[0]&&g(n,t[0]),C!==(C=x(t))&&(_.d(1),_=C(t),_&&(_.c(),_.m(c,null))),(!y||1&o&&u!==(u=!t[0]))&&(c.disabled=u),null!==t[2]?v?v.p(t,o):(v=rt(t),v.c(),v.m(f.parentNode,f)):v&&(v.d(1),v=null),t[3].length?L?(L.p(t,o),8&o&&O(L,1)):(L=ot(t),L.c(),O(L,1),L.m($.parentNode,$)):L&&(F={r:0,c:[],p:F},P(L,1,1,(()=>{L=null})),F.r||r(F.c),F=F.p)},i(t){y||(O(L),y=!0)},o(t){P(L),y=!1},d(t){t&&i(n),t&&i(e),t&&i(c),_.d(),t&&i(a),v&&v.d(t),t&&i(f),L&&L.d(t),t&&i($),b=!1,r(w)}}}function ut(t,n,e){let r,o,c,a;u(t,K,(t=>e(0,r=t))),u(t,W,(t=>e(1,o=t))),u(t,Q,(t=>e(2,c=t))),u(t,X,(t=>e(3,a=t)));return[r,o,c,a,()=>{navigator.clipboard.writeText("https://docyx.github.io/reddit-award-calculator?url="+r)},function(){r=this.value,K.set(r)}]}class at extends D{constructor(t){super(),q(this,t,ut,ct,c,{})}}function lt(n){let e;return{c(){e=s("a"),e.innerHTML='<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#70B7FD; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>',m(e,"href","https://github.com/docyx/reddit-award-calculator"),m(e,"aria-label","View source on GitHub")},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&i(e)}}}class it extends D{constructor(t){super(),q(this,t,null,lt,c,{})}}function st(n){let e,r,o,c,u,f,h,p;return u=new at({}),h=new it({}),{c(){e=s("div"),r=s("div"),o=s("h1"),o.textContent="Reddit Award Calculator",c=d(),T(u.$$.fragment),f=d(),T(h.$$.fragment),m(e,"class","container svelte-1t9yx78")},m(t,n){l(t,e,n),a(e,r),a(r,o),a(r,c),U(u,r,null),l(t,f,n),U(h,t,n),p=!0},p:t,i(t){p||(O(u.$$.fragment,t),O(h.$$.fragment,t),p=!0)},o(t){P(u.$$.fragment,t),P(h.$$.fragment,t),p=!1},d(t){t&&i(e),B(u),t&&i(f),B(h,t)}}}function ft(t,n,e){let r;return u(t,K,(t=>e(0,r=t))),w((()=>{let t=new URLSearchParams(window.location.search);t.get("url")&&(!function(t,n,e=n){t.set(e)}(K,r=t.get("url"),r),tt(r))})),[]}return new class extends D{constructor(t){super(),q(this,t,ft,st,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
