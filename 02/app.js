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
    throw error;
  }
}

function initEventWithError(element, eventName, error) {
  element.addEventListener(eventName, function () {
    try {
      setRandomPosition(this, error);
    } catch (err) {
      displayError(err.message);
    }
  });
}

function displayError(errorMessage) {
  const alertEl = document.querySelector('.alert__message');
  const alertSectionEl = alertEl.parentNode.parentNode;
  alertSectionEl.classList.remove('alert--hidden');
  alertEl.textContent = errorMessage;
  closeErrorMessage(alertSectionEl);
}
function closeErrorMessage(alertSectionEl) {
  alertSectionEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('alert')) {
      alertSectionEl.classList.add('alert--hidden');
    }
  });
}
