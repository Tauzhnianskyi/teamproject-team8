var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequireae86;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequireae86=i);var o=i("7me8F");i("2gAtb");var a=i("baSj9"),r=i("j3p24");i("eWCmQ");o=i("7me8F");i("2gAtb"),i("baSj9");r=i("j3p24"),r=i("j3p24");const s={headers:{"Content-Type":"application/json"}};(0,r.AddListenerToMovieList)();r=i("j3p24");const l={headers:{"Content-Type":"application/json"}};null!==localStorage.getItem("theme")?document.body.classList.add("dark"):document.body.classList.remove("dark"),(0,a.getCurrentPage)();const d=JSON.parse(localStorage.getItem("WatchedList")),c=document.querySelector(".movie-list"),m=document.querySelector(".page-heading"),p=document.getElementById("js-navigationLibraryButtonQueue"),u=document.getElementById("js-navigationLibraryButtonWatched");function v(e){return fetch(`${o.BASE_URL}/movie/${e}?api_key=${o.API_KEY}`,l).then((e=>{if(!e.ok)throw new Error("fail");return e.json()})).then((e=>{const t=document.querySelector(".movie-list"),n=document.createElement("li");n.classList.add("movie-item"),n.innerHTML=`\n\n      <a href='${e.id}' id = '${e.id}' class='movie-link'>\n    <img src='${o.IMG_URL}${e.poster_path}' alt='' class='movie-image' />\n    <div class='movie-info'>\n      <p class='movie-title'>${e.original_title}</p>\n      <p class='movie-description'>${e.genres.map((e=>`${e.name}`)).join(", ")} | ${e.release_date}</p>\n    </div>\n  </a>\n      `,t.appendChild(n)})).catch()}p.addEventListener("click",(e=>{e.preventDefault(),p.disabled=!0,u.disabled=!1,m.innerHTML="Queued movie";document.querySelector(".movie-list").innerHTML="";const t=JSON.parse(localStorage.getItem("QueuedList"));console.log(t),t.forEach((e=>{var t;t=e,fetch(`${o.BASE_URL}/movie/${t}?api_key=${o.API_KEY}`,s).then((e=>{if(e.ok)return e.json();throw new Error("fail")})).then((e=>{const t=document.querySelector(".movie-list"),n=document.createElement("li");n.classList.add("movie-item"),n.innerHTML=`\n\n      <a href='${e.id}' id = '${e.id}' class='movie-link'>\n    <img src='${o.IMG_URL}${e.poster_path}' alt='' class='movie-image' />\n    <div class='movie-info'>\n      <p class='movie-title'>${e.original_title}</p>\n      <p class='movie-description'>${e.genres.map((e=>`${e.name}`)).join(", ")} | ${e.release_date}</p>\n    </div>\n  </a>\n      `,t.appendChild(n)})).catch()}))})),u.addEventListener("click",(e=>{e.preventDefault(),u.disabled=!0,p.disabled=!1,m.innerHTML="Watched movie";document.querySelector(".movie-list").innerHTML="";JSON.parse(localStorage.getItem("WatchedList")).forEach((e=>{v(e)}))})),u.disabled=!0,p.disabled=!1,m.innerHTML="Watched movie",c.innerHTML="",d.forEach((e=>{v(e)})),(0,r.AddListenerToMovieList)();
//# sourceMappingURL=library.59a7606b.js.map