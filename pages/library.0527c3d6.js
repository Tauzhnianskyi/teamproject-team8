!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},o=e.parcelRequireae86;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in n){var o=n[e];delete n[e];var t={id:e,exports:{}};return i[e]=t,o.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){n[e]=i},e.parcelRequireae86=o);var t=o("1h2Gi");o("8pYMx"),o("cRoku");var r=o("9tAMN");r=o("9tAMN");const a=JSON.parse(localStorage.getItem("QueuedList")),l={headers:{"Content-Type":"application/json"}};a.forEach((e=>{var i;i=e,fetch(`${t.BASE_URL}/movie/${i}?api_key=${t.API_KEY}`,l).then((e=>{if(!e.ok)throw new Error("fail");return e.json()})).then((e=>{const i=document.createElement("li");i.classList.add("movie-item"),i.innerHTML=`\n      <a href='${e.id}' id = '${e.id}' class='movie-link'>\n    <img src='${t.IMG_URL}${e.poster_path}' alt='' class='movie-image' />\n    <div class='movie-info'>\n      <p class='movie-title'>${e.original_title}</p>\n      <p class='movie-description'>${e.genres.map((e=>`${e.name}`)).join(", ")} | ${e.release_date}</p>\n    </div>\n  </a>\n      `,s.appendChild(i)}))}));const s=document.querySelector(".movie-list-queue");(0,r.AddListenerToMovieList)()}();
//# sourceMappingURL=library.0527c3d6.js.map
