document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

    const alertEl = document.querySelector('.alert');
    alertEl.addEventListener('click', noVisibilityAlert);

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
        } catch (e) {
            const alertEl = document.querySelector('.alert');
            const messageEl = document.querySelector('.alert__message');
            messageEl.innerText = e;
            alertEl.classList.remove('alert--hidden');
        }
    })
}

const noVisibilityAlert = (e) => {
    const className = e.target.className
    if (!className.includes('alert--hidden')) {
        e.target.classList.add('alert--hidden');
    }
}
