import {initValidation } from './validation.js';
import {initForm, activateForm, deactivateForm, formSubmit, clearAllForm, resetForm} from './form.js';
import {createMap, createMarkers} from './map.js';
import {showSuccessMessage} from './preventions.js';
import {DATA_OFFERS_COUNT, getData } from './server.js';

export let offers;

deactivateForm();

createMap(activateForm);
initForm();

getData ((data) => {
  offers = data;
  const shortOffers = offers.slice(0, DATA_OFFERS_COUNT);
  createMarkers(shortOffers);
});


formSubmit(() => {
  showSuccessMessage();
  clearAllForm();
});

initValidation();
resetForm();
