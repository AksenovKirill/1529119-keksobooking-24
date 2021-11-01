import { showPreview } from './avatar.js';
import { filterOffers, initFilter } from './filter.js';
import {initValidation } from './validation.js';
import {initForm, activateForm, deactivateForm, handlerForSubmitForm, clearPageElements, resetAllPage} from './form.js';
import {createMap, createMarkers} from './map.js';
import {showSuccessMessage} from './preventions.js';
import {getData} from './server.js';
import { debounce } from './debounce.js';
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
showPreview();

const debouncedFilter = debounce(() => {
  const filteredOffers = filterOffers(offers);
  const newFilteredOffers = filteredOffers.slice(0, 10);
  createMarkers(newFilteredOffers);
});

initFilter(debouncedFilter);

handlerForSubmitForm(() => {
  showSuccessMessage();
  clearPageElements();
  resetAllPage();
});
