const form = document.querySelector('.ad-form');
const roomType = form.querySelector('#type');
const priceRoom = form.querySelector('#price');
const capacity = form.querySelector('#capacity');
const roomNumber = form.querySelector('#room_number');
const checkIn = form.querySelector('#timein');
const checkOut = form.querySelector('#timeout');
const capacityFragment = document.createDocumentFragment();
const checkOutFragment = document.createDocumentFragment();
const roomTypeOptions = Array.from(roomType.options);
const roomNumberOptions = Array.from(roomNumber.options);
const capacityOptions = Array.from(capacity.options);
const checkInOptions = Array.from(checkIn.options);
const checkOutOptions = Array.from(checkOut.options);
const prices = [0, 1000, 3000, 5000, 10000];

const roomTypeValues = [];
roomTypeOptions.forEach((option) => roomTypeValues.push(option.value));
const roomOptions  = roomTypeValues.reduce((acc, room, i) => Object.assign(acc, { [room]: prices[i] }), {});

const selectRoomType = () => {
  roomType.addEventListener('change', () => {
    for (const item in roomOptions) {
      if(roomType.value === item) {
        priceRoom.value = '';
        priceRoom.min = roomOptions[item];
        priceRoom.placeholder = roomOptions[item];
        priceRoom.reportValidity();
      }
    }
  });
};

const createCapacityFragment = () => {
  const capacitySelect = document.createElement('select');
  capacitySelect.classList.add('#capacity');
  capacitySelect.setAttribute('name', 'capacity');
  capacityFragment.appendChild(capacitySelect);
  capacity.innerHTML = '';
  capacity.appendChild(capacityFragment);
};

const createCheckOutFragment = () => {
  const checkOutSelect = document.createElement('select');
  checkOutSelect.classList.add('#timeout');
  checkOutSelect.setAttribute('name', 'timeout');
  checkOutSelect.setAttribute('title', 'Time to go out');
  checkOutFragment.appendChild(checkOutSelect);
  checkOut.innerHTML = '';
  checkOut.appendChild(checkOutFragment);
};

window.addEventListener('load', () => {
  createCapacityFragment();
  capacity.appendChild(capacityOptions[2]);
  createCheckOutFragment();
  checkOut.appendChild(checkOutOptions[0]);
  priceRoom.value = '';
  priceRoom.min = 1000;
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
  if (checkInOptions[0].selected) {
    createCheckOutFragment();
    checkOut.appendChild(checkOutOptions[0]);
  }
  if (checkInOptions[1].selected) {
    createCheckOutFragment();
    checkOut.appendChild(checkOutOptions[1]);
  }
  else if (checkInOptions[2].selected) {
    createCheckOutFragment();
    checkOut.appendChild(checkOutOptions[2]);
  }
});

export {selectRoomType, form, roomOptions, priceRoom};
