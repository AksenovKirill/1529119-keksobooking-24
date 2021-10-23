import {createOffer} from './data.js';
import {createOfferElement} from './markup.js';
import {initValidation } from './validation.js';
import {initForm, deactivateForm, activateForm} from './form.js';

// eslint-disable-next-line no-console
console.log(deactivateForm);

const OFFERS_AMOUNT = 10;
const offers = Array.from({length: OFFERS_AMOUNT}, createOffer);

// eslint-disable-next-line no-console
console.log(activateForm);

offers.forEach(createOfferElement);

initForm();
initValidation();
