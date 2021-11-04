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

initForm();

getData ((data) => {
  offers = data;
  createMarkers(offers.slice(0, 10));
  setOffers(offers);
});

initValidation();

initPreviewImage();

const debouncedFilter = debounce(() => {
  const filteredOffers = filterOffers(offers);
  const newFilteredOffers = filteredOffers.slice(0, 10);
  createMarkers(newFilteredOffers);
});

initFilter(debouncedFilter);
