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
};

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function () {
        try {
            if (error) throw error;
            setRandomPosition(this, error);
        } catch (err) {
            displayError(err.message)
        }
    })
}

function displayError(errorMsg) {
    const errorContainer = document.querySelector('.alert--hidden');
    errorContainer.classList.remove('alert--hidden');
    errorContainer.children[0].firstElementChild.textContent = errorMsg;
    errorContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('alert')) {
            e.target.classList.add('alert--hidden');
        };
    });
};
