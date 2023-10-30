document.addEventListener('DOMContentLoaded', init);

function init() {
  const clickEl = document.querySelector('.error--click');
  const enterEl = document.querySelector('.error--enter');

  setRandomPosition(clickEl);
  setRandomPosition(enterEl);

  initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
  initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));
}

function setRandomPosition(element, error = null) {
  element.style.top = Math.random() * 600 + 'px';
  element.style.left = Math.random() * 800 + 'px';

  if (error) {
    displayError(error);
  }
}

function initEventWithError(element, eventName, error) {
  element.addEventListener(eventName, function () {
    try {
      setRandomPosition(this, error);
    } catch (error) {
      displayError(error);
    }
  });
}

function displayError(error) {
  const alert = document.querySelector('.alert');
  const alertMessage = alert.querySelector('.alert__message');
  alertMessage.textContent = error.message;
  alert.classList.remove('alert--hidden');

  alert.addEventListener('click', hideMessage);
}

function hideMessage(e) {
  const alert = document.querySelector('.alert');
  if (e.target === e.currentTarget) {
    alert.classList.add('alert--hidden');
  }
}
