!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequireae86;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequireae86=n);var r=n("cRoku"),i=n("1h2Gi"),o=n("8pYMx"),d=n("lgA99"),l=n("iU1Pc"),s=n("8Q6FC");function u(e){const t=document.querySelector(".movie-list");try{const a=e.map((e=>{const t=new Date(e.first_air_date?e.first_air_date:e.release_date).getFullYear();return{title:e.title?e.title:e.name,id:e.id,image:e.poster_path?`${i.IMG_URL+e.poster_path}`:d.defaultImg,year:t||"",genres:e.genres.map((e=>`${e.name}`)).join(", ")}}));t.innerHTML=a.map((e=>(0,o.default)(e))).join("")}catch(e){l.Notify.failure("oooops! library is clear",s.notifyParams)}}var c=n("9tAMN");null!==localStorage.getItem("theme")?document.body.classList.add("dark"):document.body.classList.remove("dark"),(0,r.getCurrentPage)();const f=JSON.parse(localStorage.getItem("WatchedList")),g=JSON.parse(localStorage.getItem("QueuedList")),m=document.querySelector(".page-heading"),p=document.getElementById("js-navigationLibraryButtonQueue"),v=document.getElementById("js-navigationLibraryButtonWatched");u(f),(0,c.AddListenerToMovieList)(),p.addEventListener("click",(e=>{e.preventDefault(),p.disabled=!0,v.disabled=!1,m.textContent="Queued movie",u(g)})),v.addEventListener("click",(e=>{e.preventDefault(),v.disabled=!0,p.disabled=!1,m.textContent="Watched movie",u(f)}))}();
//# sourceMappingURL=library.d72190eb.js.map
