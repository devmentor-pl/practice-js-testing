document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

    setInitialView();

}

function setRandomPosition(element, error = null) {
    try {
    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';

    if(error) {
        throw error;
    }
    }
    catch(e){
        const alertEl = document.querySelector('.alert__message');
        alertEl.innerText = e.message;
        const sectionEl = findSectionElement();
        sectionEl.style.display = 'block';
        /*console.log(alertEl.innerText);
        console.log('Szczegóły błędu:');
        console.log('Nazwa: ', e.name);
        console.log('Wiadomość: ', e.message);*/        
    }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function(e) {
        e.stopPropagation();
        setRandomPosition(this, error);
    })
}

function setInitialView() {
    const bodyEl = document.querySelector('body');
        bodyEl.addEventListener('click', () => {
            const sectionEl = findSectionElement();
            sectionEl.style.display = 'none';
    });
}

function findSectionElement() {
    const alertEl = document.querySelector('.alert__message');
    const divEl = alertEl.parentElement;
    const sectionEl = divEl.parentElement;
    return sectionEl;
}
