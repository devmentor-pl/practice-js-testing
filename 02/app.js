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

    if(error) {
        throw error;
    }
    const alertElement = document.querySelector('.alert');

    document.addEventListener('click', (e) => {
        if (!alertElement.contains(e.target)){
            element.style.display = 'none'
        }
    })
    // nie dziala
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {

        try {
            setRandomPosition(this, error);

        } catch(err){
            const element = document.querySelector('.alert');
            const alertMessage = element.querySelector('.alert__message');
            element.style.display = 'block';
            alertMessage.textContent = `${err.message}`

        }
    })
}

