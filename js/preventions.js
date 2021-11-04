const ERROR_MESSAGE_HIDE_DELAY = 5000;

const initButtonRemove = (item) => {
  document.querySelector('.error__button')
    .addEventListener('click', () => {
      item.remove();
    });
};

const initCloseMessage = (item) => {
  window.addEventListener('click', () => {
    item.remove();
  });

  window.addEventListener('keydown', (close) => {
    if(close.key === 'Escape'){
      item.remove();
    }
  });
};

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const showErrorMessage = () => {
  const errorAlert = errorTemplate.cloneNode(true);
  const errorMessage =  errorAlert.querySelector('.error__message');
  errorMessage.style.height = '100px';
  errorMessage.style.zIndex = 1001;
  errorMessage.style.padding = '30px';
  errorMessage.style.fontSize = '30px';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.fontWeight = 'bold';
  errorMessage.style.backgroundColor = '#918686';
  errorMessage.style.backgroundColor = '#918686';
  errorMessage.textContent = 'Ошибка в размещении обьявления';

  document.body.append(errorAlert);

  initButtonRemove(errorAlert);
  initCloseMessage(errorAlert);
};

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const showSuccessMessage = () => {
  const successAlert = successTemplate.cloneNode(true);
  const successMessage = successAlert.querySelector('.success__message');
  successMessage.style.zIndex = 1000;
  successMessage.style.padding = '20px 5px';
  successMessage.style.fontSize = '30px';
  successMessage.style.textAlign = 'center';
  successMessage.style.backgroundColor = '#918686';
  successMessage.innerHTML = 'Ваше объявление<br>успешно размещено!';

  document.body.append(successAlert);

  initCloseMessage(successAlert);

  setTimeout(() => {
    successAlert.remove();
  }, ERROR_MESSAGE_HIDE_DELAY);
};

const showServerErrorMessage = () => {
  const errorMessage = document.createElement('div');
  errorMessage.style.zIndex = 1000;
  errorMessage.style.position = 'absolute';
  errorMessage.style.left = 0;
  errorMessage.style.top = 0;
  errorMessage.style.right = 0;
  errorMessage.style.margin = '0px';
  errorMessage.style.padding = '20px 10px';
  errorMessage.style.fontSize = '50px';
  errorMessage.style.fontWeight = 'bold';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.color = '#fffcfc';
  errorMessage.style.backgroundColor = '#5e5858';
  errorMessage.textContent = 'Не удалось получить данные с сервера';

  document.body.append(errorMessage);
  setTimeout(() => {
    errorMessage.remove();
  }, ERROR_MESSAGE_HIDE_DELAY);
};
export {showServerErrorMessage, showErrorMessage, showSuccessMessage};
