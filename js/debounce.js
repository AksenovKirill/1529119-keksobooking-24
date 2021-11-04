const DEFAULT_DELAY = 500;

function debounce (callback, timeoutDelay = DEFAULT_DELAY) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
export { debounce };
