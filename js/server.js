import {clearPageElements} from './form.js';
import {showServerErrorMessage, showErrorMessage, showSuccessMessage} from './preventions.js';

const ADDRESS_SERVER_FOR_GET = 'https://24.javascript.pages.academy/keksobooking/data';
const ADDRESS_SERVER_FOR_SEND = 'https://24.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(ADDRESS_SERVER_FOR_GET)
    .then((response) => response.json())
    .then((offers) => onSuccess(offers))
    .catch(() => showServerErrorMessage());
};

const sendData = (onSuccess, onFail, body) => {
  fetch(ADDRESS_SERVER_FOR_SEND,
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
