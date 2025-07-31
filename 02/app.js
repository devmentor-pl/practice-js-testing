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
}

function initEventWithError(element, eventName, error) {
    function initEventWithError(element, eventName, error) {
        let alertElement = document.querySelector('.alert--hidden');
    
        element.addEventListener(eventName, function(e) {
            e.stopPropagation();
            try {
                setRandomPosition(this, error);
            } catch (err) {
                alertElement.querySelector('.alert__message').innerText = err.message;
                alertElement.style.display = 'block';
            }
        });
    
        document.addEventListener('click', function hideAlert() {
            if (alertElement.style.display === 'block') {
                alertElement.style.display = 'none';
            }
        });
    }
}
