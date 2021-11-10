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

  priceRoom.addEventListener('input', () => {
    const valuePrice = Number(priceRoom.value);
    if (valuePrice < MIN_PRICE_OF_TYPE[roomType.value]) {
      priceRoom.setCustomValidity(`Минимальная цена за ночь ${MIN_PRICE_OF_TYPE[roomType.value]}.`);
    } else if (valuePrice > MAX_PRICE) {
      priceRoom.setCustomValidity(`Максимальная цена за ночь ${MAX_PRICE}.`);
    }
    else {
      priceRoom.setCustomValidity('');
    }
    priceRoom.reportValidity();
  });

  submitButton.addEventListener('click', () => {
    if (titleElement.value.length < MIN_TITLE_LENGTH || titleElement.value.length > MAX_TITLE_LENGTH) {
      titleElement.style.border = '1px solid red';
    }
    else {
      titleElement.style.border = '';
    }
    if (Number(priceRoom.value) < MIN_PRICE_OF_TYPE[roomType.value] || Number(priceRoom.value) > MAX_PRICE) {
      priceRoom.style.border = '2px solid red';
    }
    else {
      priceRoom.style.border = '';
    }
  });
};

export {initValidation};
