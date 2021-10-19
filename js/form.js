const form = document.querySelector('.ad-form');
const roomType = form.querySelector('#type');
const priceRoom = form.querySelector('#price');
const capacity = form.querySelector('#capacity');
const roomNumber = form.querySelector('#room_number');
const checkIn = form.querySelector('#timein');
const checkOut = form.querySelector('#timeout');

const roomTypeOptions = Array.from(roomType.options);
const capacityOptions = Array.from(capacity.options);
const roomNumberOptions = Array.from(capacity.options);
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

const disableCapacityOptions = () => {
  capacityOptions.forEach((element) => {
    element.disabled = true;
  });
};

const choiceCapacityOption = {
  oneRoom: () => {
    capacityOptions[2].disabled = false;
    capacityOptions.selected = '';
    capacityOptions[2].selected = true;
  },
  twoRooms: () => {
    capacityOptions[1].disabled = false;
    capacityOptions[2].disabled = false;
    capacityOptions.selected = '';
    capacityOptions[1].selected = true;
  },
  threeRooms: () => {
    capacityOptions[0].disabled = false;
    capacityOptions[1].disabled = false;
    capacityOptions[2].disabled = false;
    capacityOptions.selected = '';
    capacityOptions[0].selected = true;
  },
  oneHundredRooms: () => {
    capacityOptions[3].disabled = false;
    capacityOptions.selected = '';
    capacityOptions[3].selected = true;
  },
};

roomNumber.addEventListener('click', () => {
  disableCapacityOptions();
  if (roomNumberOptions[0].selected) {
    choiceCapacityOption.oneRoom();
  }
  else if (roomNumberOptions[1].selected) {
    choiceCapacityOption.twoRooms();
  }
  else if (roomNumberOptions[2].selected) {
    choiceCapacityOption.threeRooms();
  }
  else if (roomNumberOptions[3].selected) {
    choiceCapacityOption.oneHundredRooms();
  }
});

const disableTimeOutOptions = () => {
  checkOutOptions.forEach((element) => {
    element.disabled = true;
  });
};

const choiceTimeOption = {
  firstOption: () => {
    checkOutOptions[0].disabled = false;
    checkOutOptions[0].selected = '';
    checkOutOptions[0].selected = true;
  },
  secondOption: () => {
    checkOutOptions[1].disabled = false;
    checkOutOptions[1].selected = '';
    checkOutOptions[1].selected = true;
  },
  thirdOption: () => {
    checkOutOptions[2].disabled = false;
    checkOutOptions[2].selected = '';
    checkOutOptions[2].selected = true;
  },
};

checkIn.addEventListener('click', () => {
  disableTimeOutOptions();
  if(checkInOptions[0].selected) {
    choiceTimeOption.firstOption();
  }
  else if (checkInOptions[1].selected) {
    choiceTimeOption.secondOption();
  }
  else if (checkInOptions[2].selected) {
    choiceTimeOption.thirdOption();
  }
});


export {selectRoomType, form, roomOptions, priceRoom};
