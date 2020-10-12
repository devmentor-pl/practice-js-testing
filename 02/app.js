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

    if (error) {
        throw error;
    }
}

function initEventWithError(element, eventName, error) {

    element.addEventListener(eventName, function () {
        try {
            setRandomPosition(this, error);
        } catch (err) {
            alertErrorToUser(err)
        }
    });
}

function alertErrorToUser(error) {
    const alertSection = document.querySelector('.alert');
    const par = alertSection.querySelector('p')
    par.innerText = error.message;
    alertSection.classList.remove('alert--hidden');

    hideAlert(alertSection);

};

function hideAlert(element) {
    element.addEventListener('click', () => {
        element.classList.add('alert--hidden')
    })
}
















// document.addEventListener('DOMContentLoaded', init);

// function init() {
//     const clickEl = document.querySelector('.error--click');
//     const enterEl = document.querySelector('.error--enter');

//     setRandomPosition(clickEl);
//     setRandomPosition(enterEl);

//     initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
//     initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

// }

// function setRandomPosition(element, error = null) {
//     element.style.top = Math.random() * 600 + 'px';
//     element.style.left = Math.random() * 800 + 'px';

//     if (error) {
//         throw error;
//     }
// }

// function initEventWithError(element, eventName, error) {

//         element.addEventListener(eventName, function () {

//             trysetRandomPosition(this, error);
//         })
// }