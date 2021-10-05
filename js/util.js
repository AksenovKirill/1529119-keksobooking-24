const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomFloat = (min, max, quantity = 5) =>
  (min + Math.random() * (max - min)).toFixed(quantity);

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length -1)];

export {getRandomFloat, getRandomInteger, getRandomElement};
