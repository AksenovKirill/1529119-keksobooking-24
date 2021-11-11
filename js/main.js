import {initPreviewImage} from './avatar.js';
import {createMap, createMarkers} from './map.js';
import {initForm, activateForm, deactivateForm, setOffers, SHORT_OFFERS} from './form.js';
import {getData} from './server.js';
import {activateFilters, filterOffers, initFilter} from './filter.js';
import {debounce} from './utils.js';
import {initValidation} from './validation.js';

let offers;

deactivateForm();

createMap(() => {
  activateForm();
  getData ((data) => {
    offers = data;
    setOffers(offers);
    createMarkers(offers.slice(0, SHORT_OFFERS));
    activateFilters();
  });
});

const debouncedFilter = debounce(() => {
  const filteredOffers = filterOffers(offers);
  const newFilteredOffers = filteredOffers.slice(0, SHORT_OFFERS);
  createMarkers(newFilteredOffers);
});

initFilter(debouncedFilter);
initForm();
initValidation();
initPreviewImage();
