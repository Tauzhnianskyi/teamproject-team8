!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequireae86;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequireae86=i);var o=i("1h2Gi");i("8pYMx");var a=i("cRoku");i("9tAMN"),i("lv1Bd"),(0,a.getCurrentPage)();const l=JSON.parse(localStorage.getItem("WatchedList")),r={headers:{"Content-Type":"application/json"}};l.forEach((e=>{var t;t=e,fetch(`${o.BASE_URL}/movie/${t}?api_key=${o.API_KEY}`,r).then((e=>{if(!e.ok)throw new Error("fail");return e.json()})).then((e=>{const t=document.createElement("li");t.classList.add("movie-item"),t.innerHTML=`\n      <a href='${e.id}' id = '${e.id}' class='movie-link'>\n    <img src='${o.IMG_URL}${e.poster_path}' alt='' class='movie-image' />\n    <div class='movie-info'>\n      <p class='movie-title'>${e.original_title}</p>\n      <p class='movie-description'>${e.genres.map((e=>`${e.name}`)).join(", ")} | ${e.release_date}</p>\n    </div>\n  </a>\n      `,s.appendChild(t)}))}));const s=document.querySelector(".movie-list");const d=document.querySelector(".movie-list-queue"),c=document.querySelector(".movie-list"),p=document.getElementById("js-navigationLibraryButtonQueue");p.addEventListener("click",(e=>{e.preventDefault(),p.disabled=!0,c.style.display="none",d.style.display="flex",u.disabled=!1}));const u=document.getElementById("js-navigationLibraryButtonWatched");u.addEventListener("click",(e=>{e.preventDefault(),u.disabled=!0,d.style.display="none",c.style.display="flex",p.disabled=!1}))}();
//# sourceMappingURL=library.a8a30011.js.map
