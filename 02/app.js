document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

    initHideErrorEvent()
}

function setRandomPosition(element, error = null) {
    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';

    if(error) {
        throw error;
    }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        try {
            setRandomPosition(this, error);
        } catch(err) {
            showError(err)
        }
    })
}

function initHideErrorEvent() {
    const errEl = document.querySelector('.alert')
    
    errEl.addEventListener('click', e => {
        if(e.target.classList.contains('alert')) {
            e.target.classList.add('alert--hidden')
        }
    })
}

function showError(err) {
    const errMsg = err.message
    const errEl = document.querySelector('.alert')
    const msgEl = errEl.querySelector('p')

    msgEl.innerText = errMsg
    errEl.classList.remove('alert--hidden')
}