!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequireae86;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequireae86=n);var a=n("1h2Gi");n("8pYMx");var l=n("cRoku");n("9tAMN"),n("iU1Pc");a=n("1h2Gi");n("8pYMx"),n("cRoku"),n("9tAMN"),null!==localStorage.getItem("theme")?document.body.classList.add("dark"):document.body.classList.remove("dark"),(0,l.getCurrentPage)();JSON.parse(localStorage.getItem("WatchedList")).forEach((e=>{const t=document.querySelector(".movie-list.watched"),i=document.createElement("li");i.classList.add("movie-item"),i.innerHTML=`\n      <a href='${e.id}' id = '${e.id}' class='movie-link'>\n    <img src='${a.IMG_URL}${e.poster_path}' alt='' class='movie-image' />\n    <div class='movie-info'>\n      <p class='movie-title'>${e.original_title}</p>\n      <p class='movie-description'>${e.genres.map((e=>`${e.name}`)).join(", ")} | ${e.release_date}</p>\n    </div>\n  </a>\n      `,t.appendChild(i)}));const o=document.querySelector(".movie-list.queued"),d=document.querySelector(".movie-list.watched"),s=document.querySelector(".page-heading.queued"),r=document.querySelector(".page-heading.watched"),c=document.getElementById("js-navigationLibraryButtonQueue");c.addEventListener("click",(e=>{e.preventDefault(),c.disabled=!0,d.style.display="none",r.style.display="none",o.style.display="flex",s.style.display="block",u.disabled=!1}));const u=document.getElementById("js-navigationLibraryButtonWatched");u.addEventListener("click",(e=>{e.preventDefault(),u.disabled=!0,o.style.display="none",s.style.display="none",d.style.display="flex",r.style.display="block",c.disabled=!1})),JSON.parse(localStorage.getItem("QueuedList")).forEach((e=>{const t=document.querySelector(".movie-list.queued"),i=document.createElement("li");i.classList.add("movie-item"),i.innerHTML=`\n      <a href='${e.id}' id = '${e.id}' class='movie-link'>\n    <img src='${a.IMG_URL}${e.poster_path}' alt='' class='movie-image' />\n    <div class='movie-info'>\n      <p class='movie-title'>${e.original_title}</p>\n      <p class='movie-description'>${e.genres.map((e=>`${e.name}`)).join(", ")} | ${e.release_date}</p>\n    </div>\n  </a>\n      `,t.appendChild(i)}))}();
//# sourceMappingURL=library.fd5915fe.js.map
