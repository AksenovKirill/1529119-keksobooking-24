const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
getRandomInteger();

const getRandomFloat = (min, max, quantity = 5) => (min + Math.random() * (max - min)).toFixed(quantity);
getRandomFloat();