const SHOW_TIME = 5000;

const closeButton = (item) => {
  document.querySelector('.error__button')
    .addEventListener('click', () => {
      item.remove();
    });
};

const closeMessage = (item) => {
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
  const errorMessage = errorTemplate.cloneNode(true);
  errorMessage.querySelector('.error__message').style.height = '100px';
  errorMessage.querySelector('.error__message').style.zIndex = 100;
  errorMessage.querySelector('.error__message').style.position = 'absolute';
  errorMessage.querySelector('.error__message').style.left = 0;
  errorMessage.querySelector('.error__message').style.top = '160px';
  errorMessage.querySelector('.error__message').style.right = 0;
  errorMessage.querySelector('.error__message').style.padding = '30px';
  errorMessage.querySelector('.error__message').style.fontSize = '30px';
  errorMessage.querySelector('.error__message').style.textAlign = 'center';
  errorMessage.querySelector('.error__message').style.fontWeight = 'bold';
  errorMessage.querySelector('.error__message').style.backgroundColor = '#918686';
  errorMessage.querySelector('.error__button').style.margin = '80px 0px 0px 0px';
  errorMessage.querySelector('.error__button').style.width = '280px';
  errorMessage.querySelector('.error__button').style.height = '100px';
  errorMessage.querySelector('.error__button').style.backgroundColor = '#918686';
  errorMessage.querySelector('.error__message').textContent = 'Ошибка в размещении обьявления';

  document.body.append(errorMessage);

  closeButton(errorMessage);
  closeMessage(errorMessage);
};

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  successMessage.querySelector('.success__message').style.zIndex = 100;
  successMessage.querySelector('.success__message').style.position = 'absolute';
  successMessage.querySelector('.success__message').style.left = 0;
  successMessage.querySelector('.success__message').style.top = 0;
  successMessage.querySelector('.success__message').style.right = 0;
  successMessage.querySelector('.success__message').style.padding = '20px 5px';
  successMessage.querySelector('.success__message').style.fontSize = '30px';
  successMessage.querySelector('.success__message').style.textAlign = 'center';
  successMessage.querySelector('.success__message').style.backgroundColor = '#918686';
  successMessage.querySelector('.success__message').innerHTML = 'Ваше объявление<br>успешно размещено!';

  document.body.append(successMessage);

  closeMessage(successMessage);

  setTimeout(() => {
    successMessage.remove();
  }, SHOW_TIME);
};

const showErrorServerMessage = () => {
  const errorMessage = document.createElement('div');
  errorMessage.style.zIndex = 1000;
  errorMessage.style.position = 'absolute';
  errorMessage.style.left = 0;
  errorMessage.style.top = 0;
  errorMessage.style.right = 0;
  errorMessage.style.margin = '0px';
  errorMessage.style.padding = '15px 10px';
  errorMessage.style.fontSize = '50px';
  errorMessage.style.fontWeight = 'bold';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.color = '#fffcfc';
  errorMessage.style.backgroundColor = '#5e5858';
  errorMessage.textContent = 'Не удалось получить данные с сервера';

  document.body.append(errorMessage);
  setTimeout(() => {
    errorMessage.remove();
  }, SHOW_TIME);
};
export {showErrorServerMessage, showErrorMessage, showSuccessMessage};
