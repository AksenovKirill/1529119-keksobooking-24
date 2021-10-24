import {getRandomElement, getRandomElementsFromArray, getRandomFloat, getRandomInteger } from './util.js';

const offerTemplate = {
  type: {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель',
  },
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
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
};

const typeRooms = Object.values(offerTemplate.type);

const createOffer = () => ({
  author: `img/avatars/user0${getRandomInteger(1, 9)}.png`,
  title: 'Предложение',
  address: {
    lat: getRandomFloat(35.65000, 35.70000),
    lng: getRandomFloat(139.70000, 139.80000),
  },
  price: getRandomInteger(0, 1000),
  type: getRandomElement(typeRooms),
  rooms: getRandomInteger(0, 4),
  guest: getRandomInteger(0, 10),
  checkin: getRandomElement(offerTemplate.checkin),
  checkout: getRandomElement(offerTemplate.checkout),
  features: getRandomElementsFromArray(offerTemplate.features),
  description: 'Описание помещения',
  photos: getRandomElementsFromArray(offerTemplate.photos),
});

export {createOffer};
