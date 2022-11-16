function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequireae86;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequireae86=i);var o=i("baSj9"),r=i("j3p24"),l=i("7me8F"),c=i("7zQK0"),s=i("2gAtb"),d=i("2shzp");i("j3p24");l=i("7me8F"),d=i("2shzp"),s=i("2gAtb");document.querySelector(".movie-list");async function u(e=1){try{const{data:{results:t}}=await d.default.get(`${l.BASE_URL}/trending/all/day`,{params:{api_key:l.API_KEY,page:e}});return t}catch(e){return e}}async function m(e){const t=await(0,c.getGenres)();return e.map((e=>({title:e.title?e.title:e.name,id:e.id,media_type:e.media_type,image:`${l.IMG_URL+e.poster_path}`,year:new Date(e.first_air_date?e.first_air_date:e.release_date).getFullYear(),genres:e.genre_ids.map(((e,n)=>n<2?t[e]?.name:2===n?"Other":n>2?"":void 0)).filter((e=>""!==e)).join(", ")})))}!async function(){const e=(await async function(e){try{return(await d.default.get(`${l.BASE_URL}/trending/all/day`,{params:{api_key:l.API_KEY,page:e}})).data}catch(e){return e}}(1)).total_pages;let t=1,n=1;const a=document.createElement("button");a.classList.add("arrow-right"),a.innerHTML='<img src="https://img.icons8.com/office/16/null/circled-chevron-right.png"/>';const i=document.createElement("button");function o(e){const t=document.querySelector(".movie-list");t.innerHTML="",u(e).then(m).then((e=>{t.innerHTML=e.map((e=>(0,s.default)(e))).join("")}))}function r(e){const t=document.createElement("li");t.classList.add("pagination__item"),t.innerText=e,n===e&&t.classList.add("pagination__item--active");return t.addEventListener("click",(t=>{n=e,o(n);let a=document.querySelector("li.pagination__item--active");a&&a.classList.remove("pagination__item--active"),t.target.classList.add("pagination__item--active")})),t}i.classList.add("arrow-left"),i.innerHTML='<img src="https://img.icons8.com/office/16/null/circled-chevron-left.png"/>',o(n),function(){const n=document.querySelector(".pagination"),o=document.createElement("ul");let l=10;o.classList.add("pagination__list");for(let e=0;e<l;e++){const t=r(e+1);o.appendChild(t)}n.appendChild(o),o.appendChild(a),a.addEventListener("click",(()=>{if(t+=1,l+=1,o.innerHTML="",o.insertAdjacentElement("afterbegin",i),l<e){for(let e=t;e<=l;e++){const t=r(e);o.appendChild(t)}let e=document.querySelectorAll(".pagination__item");e[0].classList.contains("pagination__item--active")&&(e[0].classList.remove("pagination__item--active"),e[0].classList.add("pagination__item--active"))}l===e&&a.remove(),o.appendChild(a)})),i.addEventListener("click",(()=>{if(t-=1,l-=1,o.innerHTML="",o.insertAdjacentElement("afterbegin",i),l<e){for(let e=t;e<=l;e++){const t=r(e);o.appendChild(t)}let e=document.querySelectorAll(".pagination__item");e[9].classList.contains("pagination__item--active")&&(e[9].classList.remove("pagination__item--active"),e[9].classList.add("pagination__item--active"))}10===l&&i.remove(),o.appendChild(a)}))}()}();var p=i("3HWqg"),f=(l=i("7me8F"),i("gjiCh"));var g=e(i("amrNH")).template({1:function(e,t,n,a,i){var o,r=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,c="function",s=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<option class="options" value='+s(typeof(o=null!=(o=d(n,"id")||(null!=t?d(t,"id"):t))?o:l)===c?o.call(r,{name:"id",hash:{},data:i,loc:{start:{line:2,column:30},end:{line:2,column:36}}}):o)+">"+s(typeof(o=null!=(o=d(n,"name")||(null!=t?d(t,"name"):t))?o:l)===c?o.call(r,{name:"name",hash:{},data:i,loc:{start:{line:2,column:37},end:{line:2,column:45}}}):o)+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:3,column:9}}}))?o:""},useData:!0}),h=i("7JQzR"),v=i("eNSHF"),y=i("1tZWt");const _=document.querySelector(".movie-list"),L=document.querySelector("#by-genre"),b=document.querySelector(".page-heading"),w=document.querySelector(".loader-container"),E=document.querySelector(".pagination");let S=1;async function q(){return await async function(){const e=await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${l.API_KEY}`);if(e.ok)return await e.json();throw new Error(await e.text())}()}async function T(e){_.innerHTML="",(0,f.addLoader)(w),E.classList.add("visually-hidden"),b.textContent=`Movies of the ${L.options[L.selectedIndex].textContent} genre`,(0,y.removeBubble)(),(0,h.removeEventListeners)(k);try{await(0,v.fetchData)(`/discover/movie?sort_by=title.&with_genres=${e}`).then(v.formatResponseData).then(v.renderUI)}catch(e){console.log(e)}}async function k(){S+=1,(0,f.addLoader)(w),(0,h.removeBtn)();try{await(0,v.fetchData)(`/discover/movie?sort_by=title.&with_genres=${L.value}`,S).then(v.formatResponseData).then(v.renderUI)}catch(e){console.log(e)}}!async function(){const e=(await q()).genres.map((e=>e));e.push({});const t=e.map((e=>g({el:e})));L.innerHTML="",L.insertAdjacentHTML("beforeend",t)}();var M;y=i("1tZWt");function C(e,t,n){var a,i,o,r,l;function c(){var s=Date.now()-r;s<t&&s>=0?a=setTimeout(c,t-s):(a=null,n||(l=e.apply(o,i),o=i=null))}null==t&&(t=100);var s=function(){o=this,i=arguments,r=Date.now();var s=n&&!a;return a||(a=setTimeout(c,t)),s&&(l=e.apply(o,i),o=i=null),l};return s.clear=function(){a&&(clearTimeout(a),a=null)},s.flush=function(){a&&(l=e.apply(o,i),o=i=null,clearTimeout(a),a=null)},s}C.debounce=C,M=C,(0,o.getCurrentPage)(),(0,r.AddListenerToMovieList)();document.querySelector(".search-form").addEventListener("submit",p.onSubmit),null!==localStorage.getItem("theme")&&document.body.classList.add("dark");document.querySelector('[data-theme ="dark"]').addEventListener("click",(function(){document.body.classList.add("dark"),localStorage.setItem("theme","dark")}));document.querySelector('[data-theme ="light"]').addEventListener("click",(function(){document.body.classList.remove("dark"),localStorage.removeItem("theme")}));const x=document.querySelector("#by-genre");x.addEventListener("change",(()=>{T(x.value)}));const A=document.querySelector('[name="by-name__select"]');A.addEventListener("change",(()=>{(0,y.byName)(A.value)}));const j=document.querySelector('[name="by-year"]');j.addEventListener("input",y.setBubble),j.addEventListener("change",e(M)((()=>{(0,y.byYear)(j.value)}),300));
//# sourceMappingURL=index.e559e05b.js.map
