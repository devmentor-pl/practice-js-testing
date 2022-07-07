document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

    closeAlertEvent();

}

function setRandomPosition(element, error = null) {
    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';

    if(error) {
        throw error;
    }
}

function showAlert(text) {
    const modalWnd = document.querySelector('.alert');
    const msgModal = modalWnd.querySelector('.alert__message');

    modalWnd.classList.remove('alert--hidden');
    msgModal.textContent = text;
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        try {
            setRandomPosition(this, error);
        } catch(e) {
            showAlert(e.message);
        }
    })
}

function closeAlertEvent() {
    const modalWnd = document.querySelector('.alert');
    modalWnd.addEventListener('click', e => {        
        if (e.target === e.currentTarget) {
             modalWnd.classList.add('alert--hidden');
        }
    })

}