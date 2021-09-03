//Twoim zadaniem jest przechwycenie rzucanych błędów wykorzystując strukturę try ... catch. Wspomniane błędy pokazują się w zależności od obiektu po kliknięciu lub najechaniu na dany kwadrat.

//Zamiast informacji w konsoli powinieneś ją pokazać użytkownikowi poprzez element HTML o klasie .alert, który ma zostać pokazany. W jego wnętrzu ma się ukazać treść błędu.

//PS. Jako zadanie dodatkowe możesz umożliwić zamknięcie elementu .alert poprzez klinięcie w przeźroczyte tło.





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

const alert = document.querySelector('.alert--hidden');
const alertMessage = document.querySelector('.alert__message');


function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function () {

        try {

            setRandomPosition(this, error);
        }

        catch (e) {

            alert.classList.remove('alert--hidden');

            alertMessage.textContent = e.message;
        }
    })
}


const clickAlert = document.querySelector('.alert')

clickAlert.addEventListener('click', closeAlert);

function closeAlert(event) {

    const containerAlert = document.querySelector('.alert__container');

    if (event.target !== containerAlert && event.target !== alertMessage) {

        alert.classList.add('alert--hidden');

    }
}

