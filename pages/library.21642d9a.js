var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequireae86;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequireae86=i);var l=i("7me8F");i("2gAtb");var a=i("baSj9");i("j3p24"),i("7QTLK"),null!==localStorage.getItem("theme")?document.body.classList.add("dark"):document.body.classList.remove("dark"),(0,a.getCurrentPage)();JSON.parse(localStorage.getItem("WatchedList")).forEach((e=>{const t=document.querySelector(".movie-list-watched"),n=document.createElement("li");n.classList.add("movie-item"),n.innerHTML=`\n      <a href='${e.id}' id = '${e.id}' class='movie-link'>\n    <img src='${l.IMG_URL}${e.poster_path}' alt='' class='movie-image' />\n    <div class='movie-info'>\n      <p class='movie-title'>${e.original_title}</p>\n      <p class='movie-description'>${e.genres.map((e=>`${e.name}`)).join(", ")} | ${e.release_date}</p>\n    </div>\n  </a>\n      `,t.appendChild(n)}));const o=document.querySelector(".movie-list-queue"),d=document.querySelector(".movie-list-watched"),s=document.querySelector(".page-heading-queued"),r=document.querySelector(".page-heading"),c=document.getElementById("js-navigationLibraryButtonQueue");c.addEventListener("click",(e=>{e.preventDefault(),c.disabled=!0,d.style.display="none",r.style.display="none",o.style.display="flex",s.style.display="block",u.disabled=!1}));const u=document.getElementById("js-navigationLibraryButtonWatched");u.addEventListener("click",(e=>{e.preventDefault(),u.disabled=!0,o.style.display="none",s.style.display="none",d.style.display="flex",r.style.display="block",c.disabled=!1}));
//# sourceMappingURL=library.21642d9a.js.map
