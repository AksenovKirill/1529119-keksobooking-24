import { form, priceRoom, roomType } from './form.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const MIN_PRICE_OF_TYPE = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const titleElement = form.querySelector('#title');
const submitButton = document.querySelector('.ad-form__submit');

const initValidation = () => {
  titleElement.addEventListener('input', () => {
    const valueLength = titleElement.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
      titleElement.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } символов`);
    } else if (valueLength > MAX_TITLE_LENGTH) {
      titleElement.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } символы`);
    } else {
      titleElement.setCustomValidity('');
    }
    titleElement.reportValidity();
  });

  submitButton.addEventListener('click', () => {
    if (titleElement.value.length < MIN_TITLE_LENGTH || titleElement.value.length > MAX_TITLE_LENGTH) {
      titleElement.style.border = 'red';
    }
    else {
      titleElement.style.border = '';
    }

    const valuePrice = priceRoom.value;

    if (valuePrice < MIN_PRICE_OF_TYPE[roomType.value]) {
      priceRoom.style.borderColor = 'red';
    } else if (valuePrice > MAX_PRICE) {
      priceRoom.style.borderColor = 'red';
      priceRoom.setCustomValidity(`Максимальная цена за ночь ${MAX_PRICE}.`);
    } else {
      priceRoom.style.borderColor = 'white';
      priceRoom.setCustomValidity('');
    }
    priceRoom.reportValidity();
  });};


export {initValidation};
