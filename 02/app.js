document.addEventListener('DOMContentLoaded', init);
const errorElement = document.querySelector('.alert');

function init() {
  const clickEl = document.querySelector('.error--click');
  const enterEl = document.querySelector('.error--enter');

  setRandomPosition(clickEl);
  setRandomPosition(enterEl);

  initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
  initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

  errorElement.addEventListener('click', function () {
    errorElement.classList.add('alert--hidden');
  });
}

function setRandomPosition(element, error = null) {
  element.style.top = Math.random() * 600 + 'px';
  element.style.left = Math.random() * 800 + 'px';

  if (error) {
    throw error;
  }
}

function initEventWithError(element, eventName, error) {
  element.addEventListener(eventName, function () {
    try {
      setRandomPosition(this, error);
    } catch (error) {
      handleError(error.message);
    }
  });
}

function handleError(message) {
  errorElement.classList.remove('alert--hidden');
  const errorMessageElement = errorElement.querySelector('.alert__message');
  errorMessageElement.textContent = message;
}
