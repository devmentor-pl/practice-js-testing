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

        if (error) {
            throw error;
        }
    } catch (error) {
        const alertHidden = document.querySelector('.alert--hidden')
        alertHidden.style.display = 'block'
        const alertMessage = alertHidden.querySelector('.alert__message')
        alertMessage.innerText = error

        alertHidden.addEventListener('click', (e) => {
            if (e.target.tagName === 'SECTION') {
                alertHidden.style.display = 'none'
            }
        })
    }


}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function () {
        setRandomPosition(this, error);
    })
}
