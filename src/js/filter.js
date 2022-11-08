import { getGenres } from './fetchGenres';
import {API_KEY} from './api-service'
import { addLoader, removeLoader } from './loader';
import movieCardTpl from '../templates/movie-card.hbs';
import options from './../templates/options.hbs'
import {
  fetchInitialData,
  convertResponseDataToObject,
} from './renderHomePageUI';
const moviesList = document.querySelector('.movie-list');
const select = document.querySelector('.js-select')
const divForFilters = document.querySelector('.divForFilters')

let selectValue =''

export async function filterByGenres(onSeletChange) {
  try {
    addLoader(moviesList);
    const data = await fetchInitialData();
    
    const genresDictionary = await getGenres();
  
    genresArr = Object.values(genresDictionary);
    const targetGenre = genresArr.find(g => {
      console.log(selectValue);
      g.name === selectValue
    });
    console.log(targetGenre);
    const dataWithThisGenre = await convertResponseDataToObject(
      data.filter(item => {
        // console.log(item);
        item.genre_ids.includes(targetGenre)
      })
    );
    
    moviesList.insertAdjacentHTML('beforeend', movieCardTpl(dataWithThisGenre));
  } catch (err) {
    console.error(err);
  } finally {
    removeLoader(moviesList);
  }
}

  async function getOptions() {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
    );

    if (response.ok) {
      return await response.json();
    }

    throw new Error(await response.text());
  }

async function getOptionsGenres() {
  const genres = await  getOptions();
  return genres;
}

export async function generateOptions() {
  let emptyObj = {};

  const dataForGenerationOfOptions = await getOptionsGenres();
  console.log(dataForGenerationOfOptions);
  const array = dataForGenerationOfOptions.genres.map(el => el);
  array.push(emptyObj);
  const markup = array.map(el => options({ el }));
  select.innerHTML = '';
  select.insertAdjacentHTML('beforeend', markup);
}
 
divForFilters.addEventListener('change', onSeletChange)
 
function onSeletChange(e) {
   selectValue = e.target.value
  
  return selectValue
}
