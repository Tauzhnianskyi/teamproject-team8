import { getGenres } from './fetchGenres';
import { addLoader, removeLoader } from './loader';
import movieCardTpl from '../templates/movie-card.hbs';
import {
  fetchInitialData,
  convertResponseDataToObject,
} from './renderHomePageUI';
const moviesList = document.querySelector('.movie-list');
export async function filterByGenres(genre) {
  try {
    addLoader(moviesList);
    const data = await fetchInitialData();
    const genresDictionary = await getGenres();
    genresArr = Object.values(genresDictionary);
    const targetGenre = genresArr.find(g => g.name === genre).id;
    const dataWithThisGenre = await convertResponseDataToObject(
      data.filter(item => item.genre_ids.includes(targetGenre))
    );
    console.log(dataWithThisGenre);
    moviesList.insertAdjacentHTML('beforeend', movieCardTpl(dataWithThisGenre));
  } catch (err) {
    console.error(err);
  } finally {
    removeLoader(moviesList);
  }
}

filterByGenres()