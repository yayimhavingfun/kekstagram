const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');

//hide excess stuff
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
commentsCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

const onBigPictureCloseClick = function () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
  commentList.innerHTML = '';
};

//display comments
const commentTemplate = document.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments');

//function displaying comments
const renderComment = function (comment) {
  const similarComment = commentTemplate.cloneNode(true);

  similarComment.querySelector('.social__picture').src = comment.avatar;
  similarComment.querySelector('.social__picture').alt = comment.alt;
  similarComment.querySelector('.social__text').textContent = comment.message;

  return similarComment;
};

const renderCommentsFragments = function (comments) {
  let commentsListFragment = document.createDocumentFragment();
  comments.forEach( comment => {
    commentsListFragment.appendChild(renderComment(comment));
  });

  commentList.appendChild(commentsListFragment);
}

//display big picture
const showPicture = (pictures) => {
  body.classList.add('modal-open');

  bigPicture.querySelector('.big-picture__img > img').src = pictures.url;
  bigPicture.querySelector('.likes-count').textContent = pictures.likes;
  bigPicture.querySelector('.comments-count').textContent = pictures.comments.length;
  bigPicture.querySelector('.social__caption').textContent = pictures.description;

  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  renderCommentsFragments(pictures.comments);
  bigPicture.classList.remove('hidden');
}

export { showPicture };
