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
        } catch (e) {
            handleError(e);
        }
    })
}

function handleError(error) {
    openAlertModal();
    showErrorInfo(error);
    handleAlertModalClose();
}

function openAlertModal() {
    const alertModal = document.querySelector('.alert');
    alertModal.classList.remove('alert--hidden');
}

function showErrorInfo(error) {
    const alertModalContent = document.querySelector('.alert__message');
    alertModalContent.textContent = `Przechwycono błąd - ${error.name}, wiadomość: ${error.message}`;
}

function handleAlertModalClose() {
    const alertModal = document.querySelector('.alert');
    alertModal.addEventListener('click', e => {
        isElementClass(e.target, 'alert') ? closeAlertModal() : null;
    })
}

function isElementClass(element, className) {
    return element.classList.contains(className);
}

function closeAlertModal() {
    const alertModal = document.querySelector('.alert');
    alertModal.classList.add('alert--hidden');
}
