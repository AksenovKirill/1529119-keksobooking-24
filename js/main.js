import {initValidation } from './validation.js';
import {initForm, activateForm, deactivateForm, handlerForSubmitForm, clearPageElements, resetAllPage} from './form.js';
import {createMap, createMarkers} from './map.js';
import {showSuccessMessage} from './preventions.js';
import {getData} from './server.js';

export let offers;

deactivateForm();

createMap(activateForm);

getData ((data) => {
  offers = data;
  const shortOffers = offers.slice(0, 10);
  createMarkers(shortOffers);
  resetAllPage(offers);
});


initForm();

initValidation();

handlerForSubmitForm(() => {
  showSuccessMessage();
  clearPageElements();
  resetAllPage();
});
