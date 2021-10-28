import { showErrorServerMessage } from './preventions.js';

const DATA_OFFERS_COUNT = 10;

const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => onSuccess(offers))
    .catch(() => showErrorServerMessage());
};


const sendData = (onSuccess, onFail, body) => {
  fetch('https://24.javascript.pages.academy/keksobooking',
    {method: 'POST',
      body},
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};

export { getData, sendData, DATA_OFFERS_COUNT };
