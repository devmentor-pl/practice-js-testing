document.addEventListener('DOMContentLoaded', init);

const alertSection = document.querySelector('.alert');
const alertContainer = document.querySelector('.alert__container');
const messageSection = document.querySelector('.alert__message');

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

}

function setRandomPosition(element,error = null) {
    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';
    if(error){ // troche tego nie ogarniam, chciałam wyrzucic ten kod aby wyrzucanie bledy było tylko na dole w try ... catch, ale bez tego, to nie dziala 
        throw error;
    }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
    try{
        setRandomPosition(this,error);
    }
    catch(e){
        alertSection.classList.remove('alert--hidden');
        messageSection.innerText = error;
    }
    });
}

alertSection.addEventListener('click', e => {
    e.stopPropagation();
    if(e.target === e.currentTarget){
    alertSection.classList.add('alert--hidden');
    }
});


