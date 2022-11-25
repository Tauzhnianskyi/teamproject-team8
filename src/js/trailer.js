import Notiflix, { Notify } from 'notiflix';
import { API_KEY, BASE_URL, IMG_URL } from './api-service';
// import SimpleLightbox from 'simplelightbox';
import * as basicLightbox from 'basiclightbox';

export function createTrailerLink(elem) {
  const trailerBtn = elem;
  console.log(trailerBtn);

  trailerBtn.forEach(el =>
    el.addEventListener('click', e => {
      //   console.log(e.target.parentNode.parentNode.firstElementChild.id);
      showTrailer(e.target.parentNode.parentNode.firstElementChild.id);
    })
  );

  function showTrailer(id) {
    console.log(id);
    const videoURL = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
    // console.log(videoURL);
    Notiflix.Loading.standard();
    fetch(videoURL)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        const id = data.results[0].key;
        const instance = basicLightbox.create(`
  <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
        console.log('https://www.youtube.com/embed/' + id);
        instance.show();
        // modalClBtTrailer(instance);
      })
      .catch(() => {
        const instance = basicLightbox.create(`
    <iframe width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);
        instance.show();
        // modalClBtTrailer(instance);
      });
  }

  //   function modalClBtTrailer(instance) {
  //     const modalBox = document.querySelector('.basicLightbox--iframe');
  //     modalBox.insertAdjacentHTML(
  //       'afterbegin',
  //       `<button
  //         type="button"
  //         class="lightbox__button"
  //         data-action="close-lightbox"
  //         ></button>
  //     `
  //     );
  //     const modalCloseBtn = document.querySelector(
  //       '[data-action="close-lightbox"]'
  //     );
  //     modalCloseBtn.addEventListener('click', () => instance.close());
  //   }
}
