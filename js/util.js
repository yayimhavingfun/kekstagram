// gets a random number
const getRandomInt = (min, max) => {
  if (min < 0) {
    min = -(min);
  } else if (max < 0) {
    max = -(max);
  }
  if (max < min) {
    [min, max] = [max, min]
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// checks a string's length
const checkString = (string, maxLength = 140) => {
  return string.length <= maxLength ? true : false;
}

// gets a random element from an array
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}

// shuffles an array
const shuffleArray = (arr) => {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const debounce = (cb) => {
  const DEBOUNCE_INTERVAL = 500

  let lastTimeout = null;

  return (...args) => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb(...args);
    }, DEBOUNCE_INTERVAL);
  };
}
export { getRandomInt, checkString, getRandomElementArr, shuffleArray, debounce }

