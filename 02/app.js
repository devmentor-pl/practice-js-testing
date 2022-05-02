document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');
    const alertEl = document.querySelector('.alert');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

    alertEl.addEventListener('click', closeAlert);
}

function setRandomPosition(element, error = null) {
    try {
        element.style.top = Math.random() * 600 + 'px';
        element.style.left = Math.random() * 800 + 'px';
    
        if(error) {
            throw error;
        }
    } catch(e) {
        showAlert(e);
    }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        setRandomPosition(this, error);
    })
}

function showAlert(e) {
        const alertEl = document.querySelector('.alert--hidden');
        const alertMessage = alertEl.querySelector('.alert__message');
        alertEl.style.display = 'block';
        alertMessage.textContent = e.message;
    }
    
    function closeAlert(e) {
        const alertEl = e.target;
        if(alertEl.classList.contains('alert')) {
        alertEl.style.display = 'none';
    }
}