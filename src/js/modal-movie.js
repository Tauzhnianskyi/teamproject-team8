import { API_KEY, BASE_URL, IMG_URL } from './api-service';
// import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import movieModalTpl from './../templates/movie-modal.hbs';

//-----------MODAL-MOVIE---------------//

export async function openModal(movie_id, movieSmallPoster) {
  const movie_url_original = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`;
  const modalEl = document.querySelector('.modal');
  //   console.log(movieSmallPoster);
  //   console.log(movie_url_original);

  const resp = await fetch(movie_url_original, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (resp.status === 200) {
    const respData = await resp.json();
    respData.imgPath = getImgPath(
      respData.poster_path,
      respData.backdrop_path,
      IMG_URL,
      movieSmallPoster
    );
    respData.byRate = getClassByRate(respData.vote_average.toFixed(1));
    respData.rate = respData.vote_average.toFixed(1);
    respData.byPopularity = respData.popularity.toFixed(1);
    respData.byGenres = respData.genres.map(elem => `${elem.name}`).join(', ');

    // console.log('response data:');
    // console.log(resp);
    // console.log(respData);
    modalEl.classList.add('modal--show');
    document.body.classList.add('stop-scroll');
    modalEl.innerHTML = movieModalTpl(respData);
    // `<div class="modal__card">
    //     <img src="${getImgPath(
    //       respData.poster_path,
    //       respData.backdrop_path,
    //       IMG_URL,
    //       movieSmallPoster
    //     )}"
    //       alt="" class="modal__movie-backdrop"/>

    //     <div class="modal__wrap">
    //     <h2>
    //         <span class="modal__movie-title">${respData.title}</span>
    //     </h2>
    //     <ul class="modal__movie-info">
    //       <li>
    //         <div class="modal__movie-vote-cont">
    //             <p class="modal__movie-vote">Vote / Votes: </p>
    //                 <div class="movie-vote-upper">${`<div class="movie-vote-upper movie__average--${getClassByRate(
    //                   respData.vote_average.toFixed(1)
    //                 )}">
    //                   ${respData.vote_average.toFixed(1)}
    //                     </div>`} / ${respData.vote_count}
    //                 </div>

    //         </div>
    //       </li>
    //       <li>
    //       <div class="modal__movie-popularity-cont">
    //       <p class="modal__movie-popularity">Popularity:
    //       <span class="movie-popularity-upper">${respData.popularity.toFixed(
    //         1
    //       )}</span>
    //       </p>
    //       </div>

    //      </li>
    //       <li>
    //       <p class="modal__movie-original-title">Original Title: <span class="movie-title-upper">${
    //         respData.original_title
    //       }</span></p>
    //       </li>
    //       <li>
    //       <p class="modal__movie-genre">Genre: <span class="movie-genre-upper">${respData.genres
    //         .map(elem => `${elem.name}`)
    //         .join(', ')}</span></p>

    //         </li>
    //       <li>
    //       <p class="modal__movie-overview">ABOUT</p>
    //       <span class="movie-overview-upper">${respData.overview}</span>
    //       </li>
    //     </ul>

    //     <button type="button" class="modal__btn-close"></button>
    //     <div class="modal__btn-list">
    //     <button type="button" class="modal__btn-watched">ADD TO WATCHED</button>
    //     <button type="button" class="modal__btn-queue">ADD TO QUEUE</button>
    //     </div>
    //     </div>
    //   </div>`;
    //   console.log('это модалка', movie_id);
    // console.log(resp);
  } else {
    modalEl.classList.add('modal--show');
    document.body.classList.add('stop-scroll');
    modalEl.innerHTML = `<div class="modal__card">
     <div class="modal-plug""></div>
    <button type="button" class="modal__btn-close"></button></div>`;
  }
  //   let modal = new SimpleLightbox('.modal a', {
  // captionsData: 'h2',
  // captionDelay: '250',
  //   });
  //   console.log(modal);

  const btnClose = document.querySelector('.modal__btn-close');
  btnClose.addEventListener('click', () => closeModal());
}

function closeModal() {
  const modalEl = document.querySelector('.modal');
  modalEl.classList.remove('modal--show');
  document.body.classList.remove('stop-scroll');
}

window.addEventListener('click', evt => {
  // console.log(evt.target)
  const modalEl = document.querySelector('.modal');
  if (evt.target === modalEl) {
    closeModal();
  }
});

window.addEventListener('keydown', evt => {
  if (evt.keyCode === 27) {
    closeModal();
  }
});

// get color by rating

function getClassByRate(vote) {
  if (vote >= 7) {
    return 'green';
  } else if (vote > 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

//get image

function getImgPath(poster, backdrop, url, backupPoster) {
  if (poster === null) {
    if (backdrop === null) {
      return backupPoster;
    }
    return url + backdrop;
  } else {
    return url + poster;
  }
}

// adds eventlisteners to the movies list DOM element

export function AddListenerToMovieList() {
  const movieCards = document.querySelector('.movie-list');
  //   console.log('before add listener:');
  //   console.log(movieCards);
  movieCards.addEventListener('click', evt => {
    evt.preventDefault();
    let t = evt.target;
    while (t.nodeName !== 'A' && t.parentNode !== null) {
      t = t.parentNode;
    }

    if (t.nodeName === 'A') {
      const movieId = parseInt(t.id);
      const movieSmallPoster = t.getElementsByTagName('img')[0].src;
      //   console.log(t);
      //   console.log('Рендер:', movieId, ', ', movieSmallPoster);

      openModal(movieId, movieSmallPoster);
    }
  });
  //   console.log('after add listener:');
  //   console.log(movieCards);
}

// -------------pagination-----------------
async function getDate() {
  const response = await fetch('movie_url_original');
  const data = await response.json();
  return data;
}

async function main() {
  const postData = await getDate();
  let currentPage = 1;
  let rows = 10;

  function displayList(arrDate, rowPerPage, page) {
    const postsEl = document.querySelector('.posts');
    postsEl.innerHTML = '';
    page -= 1;
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrDate.slice(start, end);

    paginatedData.forEach(element => {
      const postEl = document.createElement('div');
      postEl.classList.add('post');
      postEl.innerText = `${element.title}`;
      postsEl.appendChild(postEl);
    });
  }

  function displayPagination(arrDate, rowPerPage) {
    const paginationEl = document.querySelector('.pagination');
    const pagesCount = Math.ceil(arrDate.lenght / rowPerPage);
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    for (let i = 0; i < pagesCount; i += 1) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
  }
  function displayPaginationBtn() {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    liEl.innerText = page;
    if (currentPage === page) liEl.classList.add('pagination__item--active');
    
    liEl.addEventListener('click', () => {
      currentPage = page;
      displayList(postData, currentPage, page);
      let currentItemLi = document.querySelector('li.pagination__item--active');
      currentItemLi.classList.remove('pagination__item--active');
      liEl.classList.add('pagination__item--active');
    });

    return liEl;
  }
  displayList(postData, currentPage, rows);
  displayPagination(postData, rows);
}

main();
