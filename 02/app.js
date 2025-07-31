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
    } catch (error) {
      const err = document.querySelector('.alert');
      const pEl = document.querySelector('.alert__message');
      err.classList.remove('alert--hidden');
      pEl.innerText = error.message;
      closeErrMessage(pEl);
    }
  });
}

function closeErrMessage(el) {
  const outsideEl = el.parentElement.parentElement;
  outsideEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('alert')) {
      outsideEl.classList.add('alert--hidden');
    }
  });
}
