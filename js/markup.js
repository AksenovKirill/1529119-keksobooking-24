const PHOTO_WIDTH = 45;
const PHOTO_HEIGHT = 40;

const roomTypesAdapter = {
  palace: 'дворец',
  flat: 'квартира',
  house: 'дом',
  bungalow: 'бунгало',
  hotel: 'отель',
};

const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createOfferElement = ({author, offer}) => {
  const offerElement = offerTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.price}${'₽/ночь'}`;
  offerElement.querySelector('.popup__type').textContent = roomTypesAdapter[offer.type];
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  offerElement.querySelector('.popup__description').textContent = offer.description;
  offerElement.querySelector('.popup__avatar').src = author.avatar;

  const featuresList = offerElement.querySelector('.popup__features');
  featuresList.innerHTML = '';
  if (offer.features) {
    offer.features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature');
      featureElement.classList.add(`popup__feature--${feature}`);
      featuresList.appendChild(featureElement);
    });
  }
  else {
    offerElement.removeChild(featuresList);
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
  else {
    offerElement.removeChild(featuresPhotos);
  }
  return offerElement;
};

export {createOfferElement};
