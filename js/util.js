const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomFloat = (min, max, quantity = 5) =>
  (min + Math.random() * (max - min)).toFixed(quantity);

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length -1)];

function getRandomElementsFromArray(array) {
  const randomElements = getRandomInteger(1, array.length - 1);
  const result = [];

  if (randomElements === array.length - 1) {
    return [...array];
  }

  while (result.length < randomElements) {
    const randomElement = getRandomElement(array);
    if (!result.includes(randomElement)) {
      result.push(randomElement);
    }
  }

  return result;
}

export {getRandomFloat, getRandomElementsFromArray, getRandomInteger, getRandomElement};
