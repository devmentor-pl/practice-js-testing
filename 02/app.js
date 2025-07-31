document.addEventListener('DOMContentLoaded', init);
const clickEl = document.querySelector('.error--click');
const enterEl = document.querySelector('.error--enter');

function init() {
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
        } catch {
            const alertBox = document.querySelector('.alert');
            document.querySelector('.alert__message').textContent = `Wystąpił błąd:${error.message}`;
            alertBox.classList.remove('alert--hidden');

            document.body.addEventListener('click', () => {
                alertBox.classList.add("alert--hidden");
            })
        }
    })
}