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
    

    try {
        element.style.top = Math.random() * 600 + 'px';
        element.style.left = Math.random() * 800 + 'px';

        if(error) {
            throw error;
        }

    } catch (error) {
        const alert = document.querySelector('.alert');
        alert.classList.remove('alert--hidden');
        alert.textContent = error;

        alert.addEventListener('click', closeAlert);
    }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        setRandomPosition(this, error);
    })
}

function closeAlert(e) {
    const alert = e.target;
    alert.classList.add('alert--hidden');
    alert.removeEventListener('click', closeAlert);
}
