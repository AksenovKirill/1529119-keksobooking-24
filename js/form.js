import { getArrayForCicle } from './util.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const ALERT_BORDER_COLOR = '4px solid red';

const form = document.querySelector('.ad-form');
const roomNumber = form.querySelector('#room_number');
const roomNumberElements = roomNumber.querySelectorAll('option');
const capacity = form.querySelector('#capacity');
const capacityCollection = capacity.querySelectorAll('option');
const titleElement = form.querySelector('#title');
const roomTypeSelect = form.querySelector('#type');
const priceForRoom = form.querySelector('#price');
const priceOptions = roomTypeSelect.querySelectorAll('option');
const checkIn = form.querySelector('#timein');
const checkInOptions = checkIn.querySelectorAll('option');
const checkOut = form.querySelector('#timeout');
const checkOutOptions = checkOut.querySelectorAll('option');
const submitButton = document.querySelector('.ad-form__submit');

const optionRooms = [];
const capacityOptions = [];
const roomNumberElementValues = [];
const timeIn = [];
const timeOut = [];
const price = [0, 1000, 3000, 5000, 10000];

getArrayForCicle(capacityCollection, capacityOptions);
getArrayForCicle(roomNumberElements, roomNumberElementValues);
getArrayForCicle(checkInOptions, timeIn);
getArrayForCicle(checkOutOptions, timeOut);

const getValidateTitle = () => {
  titleElement.addEventListener('input', () => {
    const valueLength = titleElement.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
      titleElement.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } символов`);
    } else if (valueLength > MAX_TITLE_LENGTH) {
      titleElement.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } символы`);
    } else {
      titleElement.setCustomValidity('');
    }
    titleElement.reportValidity();
  });
};
getValidateTitle();

const getPriceValues = () => {
  priceOptions.forEach((elem) => {
    optionRooms.push(elem.value);
  });
};
getPriceValues();

const newPriceObject = optionRooms.reduce((acc, room, i) => Object.assign(acc, { [room]: price[i] }), {});

const selectRoomTypeOption = () => {
  roomTypeSelect.addEventListener('change', () => {
    for (const item in newPriceObject) {
      if(roomTypeSelect.value === item) {
        priceForRoom.value = '';
        priceForRoom.min = newPriceObject[item];
        priceForRoom.placeholder = newPriceObject[item];
        priceForRoom.reportValidity();
      }
      else if (priceForRoom.onclick) {
        priceForRoom.min = newPriceObject[item];
      }
      priceForRoom.setCustomValidity('');
      submitButton.addEventListener('click', () => {
        if (roomTypeSelect.selectedIndex <= priceForRoom.min) {
          priceForRoom.style.border = 'none';
        }
        else {
          priceForRoom.style.border = '4px solid red';
        }
      });
    }
  });};

selectRoomTypeOption();

const disableCapacityOptions = () => {
  capacityOptions.forEach((element) => {
    element.disabled = true;
  });
};

const choiceValidation = {
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

const getValidateGuest = roomNumber.addEventListener('click', () => {
  disableCapacityOptions();
  if (roomNumberElementValues[0].selected) {
    choiceValidation.oneRoom();
  }
  else if (roomNumberElementValues[1].selected) {
    choiceValidation.twoRooms();
  }
  else if (roomNumberElementValues[2].selected) {
    choiceValidation.threeRooms();
  }
  else if (roomNumberElementValues[3].selected) {
    choiceValidation.oneHundredRooms();
  }
});

const disableTimeOutOptions = () => {
  timeOut.forEach((element) => {
    element.disabled = true;
  });
};

const choiceTime = {
  firstOption: () => {
    timeOut[0].disabled = false;
    timeOut[0].selected = '';
    timeOut[0].selected = true;
  },
  secondOption: () => {
    timeOut[1].disabled = false;
    timeOut[1].selected = '';
    timeOut[1].selected = true;
  },
  thirdOption: () => {
    timeOut[2].disabled = false;
    timeOut[2].selected = '';
    timeOut[2].selected = true;
  },
};

const getChoiceTime = checkIn.addEventListener('click', () => {
  disableTimeOutOptions();
  if(timeIn[0].selected) {
    choiceTime.firstOption();
  }
  else if (timeIn[1].selected) {
    choiceTime.secondOption();
  }
  else if (timeIn[2].selected) {
    choiceTime.thirdOption();
  }
});


const showInvalidTitle = () => {
  submitButton.addEventListener('click', () => {
    if (titleElement.value.length < MIN_TITLE_LENGTH || titleElement.value.length > MAX_TITLE_LENGTH) {
      titleElement.style.border = ALERT_BORDER_COLOR;
    }
    else {
      titleElement.style.border = 'none';
    }
  });
};
showInvalidTitle();

const showInvalidPrice = () => {
  submitButton.addEventListener('click', () => {
    for (const item in newPriceObject) {
      if (newPriceObject[item] <= priceForRoom.min) {
        priceForRoom.style.border = 'none';
      }
      else {
        priceForRoom.style.border = ALERT_BORDER_COLOR;
      }
    }
  });
};
showInvalidPrice();
export {getValidateTitle, getValidateGuest, getChoiceTime};
