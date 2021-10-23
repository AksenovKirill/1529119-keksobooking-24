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
const prices = [0, 1000, 3000, 5000, 10000];

const roomTypeValues = [];
roomTypeOptions.map((option, index) => roomTypeValues.push({ [option.value]: prices[index]  }));

const createCapacityFragment = () => {
  const capacitySelect = document.createElement('select');
  capacitySelect.classList.add('#capacity');
  capacitySelect.setAttribute('name', 'capacity');
  capacityFragment.appendChild(capacitySelect);
  capacity.innerHTML = '';
  capacity.appendChild(capacityFragment);
};

const initForm = () => {
  roomType.addEventListener('change', () => {
    for (const item in roomTypeValues) {
      for (const value in roomTypeValues[item]) {
        if(roomType.value === value) {
          priceRoom.value = '';
          priceRoom.min = roomTypeValues[item][value];
          priceRoom.placeholder = roomTypeValues[item][value];
          priceRoom.reportValidity();
        }
      }
    }});

  window.addEventListener('load', () => {
    createCapacityFragment();
    capacity.appendChild(capacityOptions[2]);
    priceRoom.value = '';
    priceRoom.min = 1000;
  });

  priceRoom.addEventListener('keyup', function(){
    this.value = this.value.replace(/[^\d]/g, '');
  });

  roomNumber.addEventListener('change', () => {
    if (roomNumberOptions[0].selected) {
      createCapacityFragment();
      capacity.appendChild(capacityOptions[2]);
    }
    else if (roomNumberOptions[1].selected) {
      createCapacityFragment();
      capacity.append(capacityOptions[1], capacityOptions[2]);
      capacityOptions[1].selected = true;
    }
    else if (roomNumberOptions[2].selected) {
      createCapacityFragment();
      capacity.append(capacityOptions[1],capacityOptions[2], capacityOptions[0]);
      capacityOptions[0].selected = true;
    }
    else if (roomNumberOptions[3].selected) {
      createCapacityFragment();
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

export {initForm, form, priceRoom, roomTypeValues};
