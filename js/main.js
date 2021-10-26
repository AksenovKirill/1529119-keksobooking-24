import {initValidation } from './validation.js';
import {initForm, activateForm, deactivateForm} from './form.js';
import { createMap} from './map.js';
import {createOffer} from './data.js';
/* import { createOfferElement } from './markUp.js'; */

const OFFERS_AMOUNT = 10;
const offers = Array.from({length: OFFERS_AMOUNT}, createOffer);

console.log(offers);

deactivateForm();

createMap(activateForm, offers);

initForm();
initValidation();
