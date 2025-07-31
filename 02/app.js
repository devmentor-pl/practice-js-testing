document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');
    const alertEl = document.querySelector('.alert')

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

    alertEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('alert')) alertEl.classList.add('alert--hidden')
    })

}

function setRandomPosition(element, error = null) {

    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';

    if (error) {
        throw error
    }

}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function () {
        try {
            setRandomPosition(this, error);
        } catch (error) {
            const alertParagraphEl = document.querySelector('.alert__message');
            const alertEl = alertParagraphEl.parentElement.parentElement
            alertParagraphEl.innerText = error
            alertEl.classList.remove('alert--hidden')
        }
    })
}

