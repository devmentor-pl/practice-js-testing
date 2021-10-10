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

    if(error) {
        throw error;
    }
}
const alert = document.querySelector('.alert--hidden');
const alertMessage = document.querySelector('.alert__message');

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        try {
        setRandomPosition(this, error);
        } catch (e) {
            alert.classList.remove('alert--hidden');
            alertMessage.textContent = e.message;
        }
    })
}

const alertSec = document.querySelector('.alert')

alertSec.addEventListener('click', closeAlert);

function closeAlert(e) {
const alertContainer = document.querySelector('.alert__container');

    if(e.target !== alertContainer && e.target !== alertMessage) {
        alert.classList.add('alert--hidden');
    }
}