import {clearPageElements} from './form.js';
import {showServerErrorMessage, showErrorMessage, showSuccessMessage} from './preventions.js';

const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => onSuccess(offers))
    .catch(() => showServerErrorMessage());
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://24.javascript.pages.academy/keksoboking',
    {method: 'POST',
      body},
  )
    .then((response) => {
      if (response.ok) {
        onSuccess(showSuccessMessage);
        clearPageElements();
      } else {
        onFail(showErrorMessage);
      }
    })
    .catch(() => onFail());
};

export { getData, sendData};
