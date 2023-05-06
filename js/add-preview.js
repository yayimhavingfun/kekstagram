import {photos} from './data.js';
import {showPicture} from './add-big-photo.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const renderPhotos = function (picture) {
  const preview = pictureTemplate.cloneNode(true);

  preview.querySelector('.picture__img').src = picture.url;
  preview.querySelector('.picture__likes').textContent = picture.likes;
  preview.querySelector('.picture__comments').textContent = picture.comments.length;

  preview.addEventListener('click', function (evt) {
    evt.preventDefault();
    showPicture(picture);
  });
  return preview;
}

const renderPhotosFragments = function () {
  let picturesListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    picturesListFragment.appendChild(renderPhotos(photo));
  });

  picturesList.appendChild(picturesListFragment);
};

export { renderPhotosFragments };

