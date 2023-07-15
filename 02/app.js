document.addEventListener('DOMContentLoaded', init)


function init() {

    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'))
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'))

    closeErrorEl()

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
        try { setRandomPosition(this, error) }
        catch (err) {
            displayError(err)
        }
    })
}

function displayError(err) {
    const errorEl = document.querySelector('.alert')
    changeElDisplay(errorEl)
    const messageEl = errorEl.querySelector('.alert__message')
    messageEl.textContent = err.name + ': ' + err.message
}

function changeElDisplay(el) {
    el.classList.toggle('alert--hidden')
}

function closeErrorEl() {
    const errorEl = getErrorEl()
    errorEl.addEventListener('click', clickHandle)
}

function getErrorEl() {
    return document.querySelector('.alert')
}

function clickHandle(e) {
    const errorEl = getErrorEl()

    if (e.target.tagName !== 'DIV' && e.target.tagName !== 'P') {
        changeElDisplay(errorEl)
    }
}