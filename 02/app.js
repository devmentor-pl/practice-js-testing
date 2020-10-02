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
    const alertUser = alert(error.message);
}

// wiecej kodu nie pisalem bo nie wydaje mi się ze mozna z poziomu skryptu zamknac pop-upa.
// wiecej info tutaj: https://stackoverflow.com/questions/463368/javascript-close-alert-box 
// prosze o jakis feedback zebym się orientował (:


















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