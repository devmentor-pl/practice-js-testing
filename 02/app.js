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
        throw error
    }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        try {
            setRandomPosition(this, error);
        } catch (err) {
            popAlert(err)
        }
    })
}

function popAlert(err) {
    const alertBox = document.querySelector('.alert');
    const alertMsg = alertBox.querySelector('.alert__message');
    alertMsg.innerText = err.message;
    alertBox.classList.remove('alert--hidden');
    alertBox.addEventListener('click', e => {
        if (e.target === e.currentTarget) {
            alertBox.classList.add('alert--hidden');
        }
        }) 
}
