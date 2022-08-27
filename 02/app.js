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

    try {
    if(error) {
        throw error;
    }
    } catch (e) {
        if (e instanceof TypeError) {
        document.querySelector('.alert').classList.remove('alert--hidden')
        document.querySelector('.alert__message').innerText = 'Błąd typu!'
    } 
      else if (e instanceof RangeError) {
        document.querySelector('.alert').classList.remove('alert--hidden')
        document.querySelector('.alert__message').innerText = 'Błąd zakresu!'
    }} 
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        setRandomPosition(this, error);
    })
}