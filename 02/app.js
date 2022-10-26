document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');


    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));
    hideAlert()

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
            function createAlert() {
                const alert = document.querySelector('.alert')
                const alertMessage = document.querySelector('.alert__message')
                alert.classList.remove('alert--hidden')
                alertMessage.innerText = error
            }
            createAlert()
        }
    })
}


function hideAlert() {
    const alert = document.querySelector('.alert')
    alert.addEventListener('click', () => {
        alert.classList.add('alert--hidden')
    })
}

