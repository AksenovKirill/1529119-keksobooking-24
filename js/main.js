import {createOffer} from './data.js';
import {createOfferElement} from './markup.js';
import { getInactivateForm, getActivateForm } from './form.js';

getInactivateForm();

const OFFERS_AMOUNT = 10;
const offers = Array.from({length: OFFERS_AMOUNT}, createOffer);

// eslint-disable-next-line no-console
console.log(offers);
// eslint-disable-next-line no-console
console.log(getActivateForm);

offers.forEach(createOfferElement);
