import { createOffer } from './data.js';

const PHOTO_WIDTH = 40;
const PHOTO_HEIGHT = 45;

const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createOfferElement = (offer) => {
  const offerElement = offerTemplate.cloneNode(true);
  offerElement.querySelector('.popup__avatar').src = offer.avatar;
  offerElement.querySelector('.popup__title').textContent = offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.price}${'₽/ночь'}`;
  offerElement.querySelector('.popup__type').textContent = offer.type;
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guest} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  offerElement.querySelector('.popup__description').textContent = offer.description;

  const featuresList = offerElement.querySelector('.popup__features');
  featuresList.innerHTML = '';
  if(offer.features) {
    offer.features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature');
      featureElement.classList.add(`popup__feature--${feature}`);
      featuresList.appendChild(featureElement);
    });
  }

  const featuresPhotos = offerElement.querySelector('.popup__photos');
  featuresPhotos.innerHTML = '';
  if (offer.photos) {
    offer.photos.forEach((photo) => {
      const photoElement = document.createElement('img');
      photoElement.classList.add('popup__photo');
      photoElement.src = photo;
      photoElement.width = PHOTO_WIDTH;
      photoElement.height = PHOTO_HEIGHT;
      featuresPhotos.appendChild(photoElement);
    });
  }
  return offerElement;
};
createOffer();

export {createOfferElement};
