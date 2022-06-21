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
        try {
            throw error
        }
        catch(err) {
            console.log(err)
            const errName = err.name
            const errNameMessage = err.message
            const errMessage = errName + ': ' + errNameMessage
            console.log(errMessage)

            const alertEl = document.querySelector('.alert');
            alertEl.classList.remove('alert--hidden')
            const alertMessage = alertEl.querySelector('.alert__message')
            alertMessage.innerText = errMessage

            setTimeout(() => {
                alertEl.classList.add('alert--hidden')
            }, 2000)
        }
    }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        setRandomPosition(this, error)
    })
}
