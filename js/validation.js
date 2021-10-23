import { form, priceRoom, roomTypeValues } from './form.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const ALERT_BORDER_COLOR = '4px solid red';

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
      titleElement.style.border = ALERT_BORDER_COLOR;
    }
    else {
      titleElement.style.border = 'none';
    }
  });

  submitButton.addEventListener('click', () => {
    for (const item in roomTypeValues) {
      for (const value in roomTypeValues[item]) {
        if (roomTypeValues[item][value] <= priceRoom.min) {
          priceRoom.style.border = 'none';
        }
        else {
          priceRoom.style.border = ALERT_BORDER_COLOR;
        }
      }
    }});
};
export {initValidation};
