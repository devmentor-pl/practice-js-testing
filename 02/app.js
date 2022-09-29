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

            showErrorMsg(error)
        }
    })
}

function showErrorMsg(err) {
    const errorEl = document.querySelector('.alert')
    const errorMsg = document.querySelector('.alert__message')
    const errorContainer = errorEl.querySelector('.alert__container')

    errorEl.classList.remove('alert--hidden')

    errorMsg.innerText = err.message

    errorEl.onclick = function () {
        errorEl.classList.add('alert--hidden')
    }


}


