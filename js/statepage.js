const MAP_COLOR = 'grey';
const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const map =  document.querySelector('.map__canvas');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElements = mapFilter.querySelectorAll('select');

const deactivateForm = () => {
  map.style.background = MAP_COLOR;
  form.classList.add('ad-form--disabled');
  formElements.forEach((fieldset) => {
    fieldset.setAttribute('state', 'disabled');
  });
  mapFilter.classList.add('ad-form--disabled');
  mapFilterElements.forEach((select) => {
    select.setAttribute('state', 'disabled');
  });
};

const activateForm = () => {
  map.style.background = '';
  form.classList.remove('ad-form--disabled');
  formElements.forEach((fieldset) => {
    fieldset.removeAttribute('state', 'disabled');
  });
  mapFilter.classList.remove('ad-form--disabled');
  mapFilterElements.forEach((select) => {
    select.removeAttribute('state', 'disabled');
  });
};

export {deactivateForm, activateForm};
