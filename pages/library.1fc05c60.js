var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},o=e.parcelRequireae86;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in n){var o=n[e];delete n[e];var t={id:e,exports:{}};return i[e]=t,o.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,i){n[e]=i},e.parcelRequireae86=o);var t=o("7me8F");o("2gAtb"),o("baSj9"),o("j3p24");JSON.parse(localStorage.getItem("QueuedList")).forEach((e=>{const i=document.querySelector(".movie-list-queue"),n=document.createElement("li");n.classList.add("movie-item"),n.innerHTML=`\n      <a href='${e.id}' id = '${e.id}' class='movie-link'>\n    <img src='${t.IMG_URL}${e.poster_path}' alt='' class='movie-image' />\n    <div class='movie-info'>\n      <p class='movie-title'>${e.original_title}</p>\n      <p class='movie-description'>${e.genres.map((e=>`${e.name}`)).join(", ")} | ${e.release_date}</p>\n    </div>\n  </a>\n      `,i.appendChild(n)}));
//# sourceMappingURL=library.1fc05c60.js.map
