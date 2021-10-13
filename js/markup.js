import {offer, typeRooms} from './data.js';
import { getRandomElement } from './util.js';

const offerCanvas = document.querySelector('#map-canvas');

const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createNewOffer = () => {
  const offerNew = offerTemplate.cloneNode(true);
  offerNew.querySelector('.popup__title').textContent = offer.title;
  offerNew.querySelector('.popup__text--address').textContent = offer.address;
  offerNew.querySelector('.popup__text--price').textContent = `${offer.price}${'₽/ночь'}`;
  offerNew.querySelector('.popup__type').textContent = getRandomElement(typeRooms);
  offerNew.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guest} гостей`;
  offerNew.querySelector('.popup__text--time').textContent = `Заезд после ${getRandomElement(offer.checkin)}, выезд до ${getRandomElement(offer.checkout)}`;
  offerNew.querySelector('.popup__description').textContent = offer.description;

  const featuresList = offerNew.querySelector('.popup__features');
  featuresList.innerHTML = '';
  for (let i = 0; i < offer.features.length; i++) {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature');
    feature.classList.add(`popup__feature--${offer.features[i]}`);
    featuresList.appendChild(feature);
  }

  const featuresPhotos = offerNew.querySelector('.popup__photos');
  featuresPhotos.innerHTML = '';
  for (let i = 0; i < offer.photos.length; i++) {
    const photos = document.createElement('img');
    photos.classList.add('popup__photo');
    photos.src = offer.photos[i];
    photos.width = '40';
    photos.height = '45';
    featuresPhotos.appendChild(photos);

  }
  offerCanvas.appendChild(offerNew);
};

export {createNewOffer};
