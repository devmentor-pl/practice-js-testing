document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');
    const errorElement = document.querySelector('.alert');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'), errorElement);
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'), errorElement);

    errorElement.addEventListener('click', () => {
        errorElement.classList.add('alert--hidden');
    })

}

function setRandomPosition(element, error = null) {
    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';

    if (error) {
        throw error;
    }
}

function initEventWithError(element, eventName, error, errorElement) {
    element.addEventListener(eventName, function () {
        try {
            setRandomPosition(this, error);
        } catch (error) {
            const errorMessageElement = document.querySelector('.alert__message');
            errorElement.classList.remove('alert--hidden');
            errorMessageElement.innerText = error.message;
        }
    })
}
