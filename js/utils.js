const DEFAULT_DELAY = 500;
const ESC_ALL_BROWSERS = 'Escape';
const ESC_IE = 'Esc';

const isEscapeKey = (evt) => evt.key === ESC_ALL_BROWSERS || evt.key === ESC_IE;

const debounce =  (callback, timeoutDelay = DEFAULT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscapeKey, debounce};
