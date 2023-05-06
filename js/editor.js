import {effectLevel, lastClass} from './effects.js';

const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};


const body = document.querySelector('body');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const uploadModalClose = document.querySelector('#upload-cancel');

const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const buttonPlus = uploadModal.querySelector('.scale__control--bigger');
const buttonMinus = uploadModal.querySelector('.scale__control--smaller');
const scaleValue = uploadModal.querySelector('.scale__control--value');
const imagePreview = uploadModal.querySelector('.img-upload__preview > img');

//opens window with filters after uploading a picture
uploadInput.addEventListener('change', () => {
  resetSettings();
  uploadModal.classList.remove('hidden');
  body.classList.add('modal-open');
});

//closes window
const closeModal = () => {
  uploadModal.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = '';
}

uploadModalClose.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === Keys.ESC || evt.key === Keys.ESCAPE) {
    if (evt.target !== hashtagField && evt.target !== commentField) {
      closeModal();
    }
  }
});

//picture zoom

const resetSettings = () => {
  imagePreview.style = 'transform: scale(1.00)';
  imagePreview.style.filter = '';
  if (lastClass) {
    imagePreview.classList.remove(lastClass);
  }
  scaleValue.value = '100%';
  effectLevel.classList.add('visually-hidden');

};

buttonPlus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) + Scale.STEP;

  if (scale <= Scale.MAX) {
    scale = Scale.MAX;
  }

  scaleValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
});

buttonMinus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) - Scale.STEP;

  if (scale <= Scale.MIN) {
    scale = Scale.MIN;
  }

  scaleValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
});
