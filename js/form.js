const MAP_COLOR = 'grey';

const form = document.querySelector('.ad-form');
const roomType = form.querySelector('#type');
const priceRoom = form.querySelector('#price');
const capacity = form.querySelector('#capacity');
const roomNumber = form.querySelector('#room_number');
const checkIn = form.querySelector('#timein');
const checkOut = form.querySelector('#timeout');
const capacityFragment = document.createDocumentFragment();
const roomTypeOptions = Array.from(roomType.options);
const roomNumberOptions = Array.from(roomNumber.options);
const capacityOptions = Array.from(capacity.options);
const formElements = form.querySelectorAll('fieldset');
const map =  document.querySelector('.map__canvas');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElements = mapFilter.querySelectorAll('select');
const prices = [0, 1000, 3000, 5000, 10000];
const roomTypeValues = [];

const resetCapacity = () => {
  const capacitySelect = document.createElement('select');
  capacitySelect.classList.add('#capacity');
  capacitySelect.setAttribute('name', 'capacity');
  capacity.innerHTML = '';
  capacity.appendChild(capacityFragment);
};

roomTypeOptions.map((option, index) => roomTypeValues.push({
  price: prices[index],
  value: option.value,
}));

const initForm = () => {
  roomType.addEventListener('change', () => {
    for (const item of roomTypeValues) {
      if(roomType.value === item.value) {
        priceRoom.value = '';
        priceRoom.min = item.price;
        priceRoom.placeholder = item.price;
        priceRoom.reportValidity();
      }
    }});

  window.addEventListener('load', () => {
    resetCapacity();
    capacity.appendChild(capacityOptions[2]);
    priceRoom.value = '';
    priceRoom.min = 1000;
  });

  priceRoom.addEventListener('keyup', function(){
    this.value = this.value.replace(/[^\d]/g, '');
  });

  roomNumber.addEventListener('change', () => {
    if (roomNumberOptions[0].selected) {
      resetCapacity();
      capacity.appendChild(capacityOptions[2]);
    }
    else if (roomNumberOptions[1].selected) {
      resetCapacity();
      capacity.append(capacityOptions[1], capacityOptions[2]);
      capacityOptions[1].selected = true;
    }
    else if (roomNumberOptions[2].selected) {
      resetCapacity();
      capacity.append(capacityOptions[1],capacityOptions[2], capacityOptions[0]);
      capacityOptions[0].selected = true;
    }
    else if (roomNumberOptions[3].selected) {
      resetCapacity();
      capacity.append(capacityOptions[3]);
    }
  });

  checkIn.addEventListener('change', () => {
    checkOut.value = checkIn.value;
  });

  checkOut.addEventListener('change', () => {
    checkIn.value = checkOut.value;
  });
};

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

export {initForm, form, priceRoom, roomTypeValues, deactivateForm, activateForm};
