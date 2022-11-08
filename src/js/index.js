import { getCurrentPage } from './getCurrentPage';
// import { modalMovie } from './modal-movie';
import { renderUI } from './renderHomePageUI';
import { onSubmit } from './searchinputLogic';
import {filterByGenres, generateOptions, onSeletChange} from './filter'
// Adds a red line under active page in the website header
getCurrentPage();

// UI render invocation

renderUI();

generateOptions();
// filterByGenres('Action');
// searchInputLogic

const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', onSubmit);