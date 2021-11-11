import {initPreviewImage} from './avatar.js';
import {filterOffers, initFilter} from './filter.js';
import {initValidation} from './validation.js';
import { activateFilters } from './filter.js';
import {initForm, activateForm, deactivateForm, setOffers, SHORT_OFFERS} from './form.js';
import {createMap, createMarkers} from './map.js';
import {getData} from './server.js';
import { debounce } from './utils.js';

let offers;

deactivateForm();

createMap(activateForm, getData ((data) => {
  offers = data;
  createMarkers(offers.slice(0, SHORT_OFFERS));
  setOffers(offers);
  activateFilters();
}));

const debouncedFilter = debounce(() => {
  const filteredOffers = filterOffers(offers);
  const newFilteredOffers = filteredOffers.slice(0, SHORT_OFFERS);
  createMarkers(newFilteredOffers);
});

initFilter(debouncedFilter);
initForm();
initValidation();
initPreviewImage();
