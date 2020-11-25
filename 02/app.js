//Nie potrafię przechwycić błędu
document.addEventListener('DOMContentLoaded', init);

function init() {

    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');


    setRandomPosition(clickEl);
    setRandomPosition(enterEl);


    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'))
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));


}


function setRandomPosition(element, error) {

    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';

    if (error) {
        throw error;
    }

}

function initEventWithError(element, eventName, error) {

    element.addEventListener(eventName, function () {
        try {
            setRandomPosition(this, error)
        } catch (err) {
            showError(err);
        }

    })

}

function showError(err) {
    const alertSection = document.querySelector('.alert');
    const alertMessageText = document.querySelector('.alert__message');

    if (alertSection.classList.contains('alert--hidden')) {
        alertSection.className = 'alert';
    }

    alertMessageText.textContent = err.message;
    alertSection.addEventListener('click', e => {
        if (e.target.className === 'alert') {
            alertSection.classList.add('alert--hidden')
        }
    })
}