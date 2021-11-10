import { isEscapeKey } from './utils.js';

const successAlert = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorAlert = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const closeErrorButton = errorAlert.querySelector('.error__button');

const showSuccessMessage = () => {
  document.body.appendChild(successAlert);
  const keyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successAlert.remove();
      document.removeEventListener('keydown', keyDownHandler);
    }
  };

  document.addEventListener('keydown', keyDownHandler);

  successAlert.addEventListener('click', () => {
    successAlert.remove();
    document.removeEventListener('keydown', keyDownHandler);
  });
};

const showErrorMessage = () => {
  document.body.appendChild(errorAlert);
  const keyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorAlert.remove();
      document.removeEventListener('keydown', keyDownHandler);
    }
  };

  document.addEventListener('keydown', keyDownHandler);

  closeErrorButton.addEventListener('click', () => {
    errorAlert.remove();
    document.removeEventListener('keydown', keyDownHandler);
  });

  errorAlert.addEventListener('click', () => {
    errorAlert.remove();
    document.removeEventListener('keydown', keyDownHandler);
  });
};

const showServerErrorMessage = () => {
  const errorMessage = document.createElement('div');
  errorMessage.style.zIndex = '1000';
  errorMessage.style.position = 'absolute';
  errorMessage.style.left = '0';
  errorMessage.style.top = '0';
  errorMessage.style.right = '0';
  errorMessage.style.margin = '0px';
  errorMessage.style.padding = '20px 10px';
  errorMessage.style.fontSize = '50px';
  errorMessage.style.fontWeight = 'bold';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.color = '#fffcfc';
  errorMessage.style.backgroundColor = '#5e5858';
  errorMessage.textContent = 'Не удалось получить данные с сервера';

  document.body.append(errorMessage);
};

export {showServerErrorMessage, showErrorMessage, showSuccessMessage};
