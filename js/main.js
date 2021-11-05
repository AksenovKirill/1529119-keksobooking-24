import {initPreviewImage} from './avatar.js';
import {filterOffers, initFilter} from './filter.js';
import {initValidation} from './validation.js';
import {initForm, activateForm, deactivateForm, setOffers} from './form.js';
import {createMap, createMarkers} from './map.js';
import {getData} from './server.js';
import {debounce} from './debounce.js';

let offers;

deactivateForm();

createMap(activateForm);

getData ((data) => {
  offers = data;
  createMarkers(offers.slice(0, 10));
  setOffers(offers);
});

initForm();
initValidation();
initPreviewImage();

const debouncedFilter = debounce(() => {
  const filteredOffers = filterOffers(offers);
  const newFilteredOffers = filteredOffers.slice(0, 10);
  createMarkers(newFilteredOffers);
});

initFilter(debouncedFilter);
