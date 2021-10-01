const EMOUNT_OFFERS = 1;

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
getRandomInteger();

const getRandomFloat = (min, max, quantity = 5) =>
  (min + Math.random() * (max - min)).toFixed(quantity);
getRandomFloat();

const author = {
  avatar: `img/avatars/user${`0${getRandomInteger(0, 10)}`}.png`,
};

const offer = {
  title: 'Предложение',
  address: `${getRandomFloat(35.6500, 35.7000)}, ${getRandomFloat(139.7000, 139.80000)}`,
  price: getRandomInteger(0, 1000),
  type: [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ],
  rooms: getRandomInteger(0, 4),
  guest: getRandomInteger(0, 10),
  checkin: [
    '12:00',
    '13:00',
    '14:00',
  ],
  checkout: [
    '12:00',
    '13:00',
    '14:00',
  ],
  features: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ],
  description: 'Описание помещения',
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
};

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length -1)];

const createOffer = () => ({
  author: author.avatar,
  title: offer.title,
  addres: offer.address,
  price: offer.price,
  type: getRandomElement(offer.type),
  rooms: offer.rooms,
  guest: offer.guest,
  checkin: getRandomElement(offer.checkin),
  checkout: getRandomElement(offer.checkout),
  features: getRandomElement(offer.features),
  description: offer.description,
  photos: getRandomElement(offer.photos),
});

const similarOffers = Array.from({length: EMOUNT_OFFERS}, createOffer);

similarOffers();
