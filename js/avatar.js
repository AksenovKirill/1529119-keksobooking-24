import {form} from './form.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'svg'];

const avatar = form.querySelector('#avatar');
const image = form.querySelector('#images');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const previewImage = document.querySelector('.ad-form__photo');

const initPreviewImage = () => {
  avatar.addEventListener('change', () => {
    const fileAvatar = avatar.files[0];
    const fileNameAvatar = fileAvatar.name.toLowerCase();
    const matches = FILE_TYPES.some((type) => fileNameAvatar.endsWith(type));
    if(matches) {
      previewAvatar.src = URL.createObjectURL(fileAvatar);
    }
  });
  image.addEventListener('change', () => {
    const fileImage = image.files[0];
    const fileNameImage = fileImage.name.toLowerCase();
    const matches = FILE_TYPES.some((type) => fileNameImage.endsWith(type));
    if(matches) {
      const boxForLoading = document.createElement('img');
      boxForLoading.style.width = '70px';
      boxForLoading.style.height = '70px';
      boxForLoading.alt = 'Фото жилья';
      boxForLoading.src = URL.createObjectURL(fileImage);
      previewImage.appendChild(boxForLoading);
    }
  });};

export {initPreviewImage, previewAvatar, previewImage};

