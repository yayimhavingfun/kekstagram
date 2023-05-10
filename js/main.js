import './editor.js';
import './effects.js';
import './validation.js';
import { renderPhotosFragments } from './add-preview.js';
import { request } from './fetch.js';
import { showError } from './alert.js';


const onSuccess = (data) => {
  renderPhotosFragments(data.slice());
}

const onError = () => {
  showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть');
}

request(onSuccess, onError, 'GET');





