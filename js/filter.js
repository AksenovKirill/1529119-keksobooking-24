import {mapFilter} from './form.js';

const rooms = document.querySelector('#housing-rooms');
const guests = document.querySelector('#housing-guests');
const type = document.querySelector('#housing-type');
const price = document.querySelector('#housing-price');
const dishwasher = document.querySelector('#filter-dishwasher');
const parking = document.querySelector('#filter-parking');
const washer = document.querySelector('#filter-washer');
const elevator = document.querySelector('#filter-elevator');
const conditioner = document.querySelector('#filter-conditioner');
const wifi = document.querySelector('#filter-wifi');

const priceRanges = {
  low: [0, 10000],
  middle: [10000, 50000],
  high: [50000, 1000000],
};

const filterOffers = (offers) => offers.filter(({ offer }) => {
  if (type.value !== 'any' && offer.type !== type.value) {
    return false;
  }
  if (price.value !== 'any') {
    const [from, to] = priceRanges[price.value];
    if (offer.price < from || offer.price > to) {
      return false;
    }
  }
  if (wifi.checked && (!offer.features || !offer.features.includes('wifi'))) {
    return false;
  }
  if (dishwasher.checked && (!offer.features || !offer.features.includes('dishwasher'))) {
    return false;
  }
  if (parking.checked && (!offer.features || !offer.features.includes('parking'))) {
    return false;
  }
  if (washer.checked && (!offer.features || !offer.features.includes('washer'))) {
    return false;
  }
  if (elevator.checked && (!offer.features || !offer.features.includes('elevator'))) {
    return false;
  }
  if (conditioner.checked && (!offer.features || !offer.features.includes('conditioner'))) {
    return false;
  }

  if (rooms.value !== 'any' && offer.rooms !== Number(rooms.value)) {
    return false;
  }
  if (guests.value !== 'any' && offer.guests !== Number(guests.value)) {
    return false;
  }
  return true;
});

const initFilter = (onFilterChange) => {
  mapFilter.addEventListener('change', onFilterChange);
};

export {initFilter, filterOffers};
