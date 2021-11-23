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
    
    try{
    
        if(error) {
            throw error;
        }
    }
    catch(e) {
        const alert = document.querySelector('.alert__message');
        const message = e.message;
        const window  = alert.parentElement.parentElement;
        window.style.display = 'block';
        alert.innerText = message;

        closeAlert(window);
    }
}

function closeAlert(window) {
    window.addEventListener('click', () => {

        const window = document.querySelector('.alert');
        window.style.display = 'none';
    })
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        setRandomPosition(this, error);
    })
}
