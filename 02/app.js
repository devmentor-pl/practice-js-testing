document.addEventListener('DOMContentLoaded', init);

function init(e) {
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
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
       try {
           setRandomPosition(this, error);
        }
       catch(e) {
           setErrorinErrorPanel(e);
           closeErrorPanel();
        }
    })
}

function setErrorinErrorPanel(error) {

    const alertPanel = document.querySelector('.alert')
    alertPanel.setAttribute('style' , 'display:flex')

    const alertMessage = alertPanel.querySelector('.alert__message');
    alertMessage.innerText = error;

}

function closeErrorPanel() {

    const alertPanel = document.querySelector('.alert');
    alertPanel.addEventListener('click' , (e) => {
        if(e.target === alertPanel) {
            alertPanel.setAttribute('style' , 'display:none');
    }});
}
