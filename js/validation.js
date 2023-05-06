const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;
const MAX_COMMENT_LENGTH = 140;

const inputHashtag = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

inputComment.addEventListener('input', () => {
  let inputCommentValue = inputComment.value;

  if (inputCommentValue > MAX_COMMENT_LENGTH) {
    inputComment.setCustomValidity('Максимум 140 символов');
  }
});

inputHashtag.addEventListener('input', () => {
  let inputHashtagValue = inputHashtag.value.toLowerCase().trim();

  if (!inputHashtagValue) {
    return
  }

  let inputArray = inputHashtagValue.split(/\s+/);

  const startNotHashtag = inputArray.some((symbol) => {
    return symbol[0] !== '#';
  });
  if (startNotHashtag) {
    inputHashtag.setCustomValidity('Хэш-тег начинается с символа #');
  }

  const isHashtagLong = inputArray.some((item) => {
    return item.length > MAX_SYMBOLS;
  });
  if (isHashtagLong) {
    inputHashtag.setCustomValidity('Максимальная длина хэш-тега 20 символов, включая решетку');
  }

  if (inputArray.length > MAX_HASHTAGS) {
    inputHashtag.setCustomValidity('Максимум 5 хэш-тегов');
  }

  const isRepeatingHashtag = inputArray.some((item, i, arr) => {
    return arr.indexOf(item, i + 1) >= i + 1;
  });
  if (isRepeatingHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги не должны повторяться');
  }

  const isSplitSpaceHashtag = inputArray.some((item) => {
    return item.indexOf('#', 1) >= 1;
  });
  if (isSplitSpaceHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги разделяются пробелами');
  }

  const isOnlyHashtag = inputArray.some((item) => {
    return item === '#';
  });
  if (isOnlyHashtag) {
    inputHashtag.setCustomValidity('Хэш-тег не может состоять только из решетки')
  }
});
