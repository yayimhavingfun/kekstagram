import './editor.js';
import './effects.js';
import './validation.js';
import { renderPhotosFragments } from './add-preview.js';
import { request } from './fetch.js';
import { showError } from './alert.js';
import {shuffleArray, debounce} from './util.js';

const DEFAULT_PREVIEW = 25;
const RANDOM_PREVIEW = 10;
const filter = document.querySelector('.img-filters');
let photos = [];

const removeActiveClass = () => {
  let activeFilter = document.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
}

const removePhotos = () => {
  const pictures = document.querySelectorAll('.picture');
  if (pictures) {
    pictures.forEach(el => {
      el.remove();
    });
  }
}

const filters = {
  'filter-default': () => {
    renderPhotosFragments(photos.slice(0, DEFAULT_PREVIEW));
  },
  'filter-random': () => {
    renderPhotosFragments(shuffleArray(photos.slice()).slice(0, RANDOM_PREVIEW));
  },
  'filter-discussed': () => {
    renderPhotosFragments(photos.slice().sort((a,b) => {
      return b.comments.length - a.comments.length;
    }))
  },
}
const onSuccess = (data) => {
  filter.classList.remove('img-filters--inactive');
  photos = data.slice()
  renderPhotosFragments(photos.slice(0, DEFAULT_PREVIEW));
}

const onError = () => {
  showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть');
}

request(onSuccess, onError, 'GET');

const onFilterClick = debounce((evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    removeActiveClass();
    removePhotos();
    evt.target.classList.add('img-filters__button--active');
    filters[evt.target.id]();
  }
});

filter.addEventListener('click', onFilterClick);




