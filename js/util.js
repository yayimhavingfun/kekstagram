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

export { getRandomInt, checkString, getRandomElementArr}
