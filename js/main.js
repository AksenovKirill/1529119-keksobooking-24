import {initValidation } from './validation.js';
import {initForm, activateForm, deactivateForm, formSubmit, clearPageElements, resetAllPage} from './form.js';
import {createMap, createMarkers} from './map.js';
import {showSuccessMessage} from './preventions.js';
import {DATA_OFFERS_COUNT, getData } from './server.js';

export let offers;

deactivateForm();

createMap(activateForm);

getData ((data) => {
  offers = data;
  const shortOffers = offers.slice(0, DATA_OFFERS_COUNT);
  createMarkers(shortOffers);
  resetAllPage(offers);
});


initForm();

initValidation();

formSubmit(() => {
  showSuccessMessage();
  clearPageElements();
});
