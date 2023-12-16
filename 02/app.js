document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

}

function setRandomPosition(element) {
    try {
        element.style.top = Math.random() * 600 + 'px';
        element.style.left = Math.random() * 800 + 'px';
    } catch (error) {
        displayError(error);
    }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        try {
            setRandomPosition(this);
            throw error;
        } catch (caughtError) {
            displayError(caughtError);
        }
    });
}

function displayError(error) {
    const alertEl = document.querySelector('.alert');
    const alertMessageEl = document.querySelector('.alert__message');
    alertMessageEl.textContent = error.message;
    alertEl.classList.remove('alert--hidden');
}

document.querySelector('.alert').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.add('alert--hidden');
    }
});