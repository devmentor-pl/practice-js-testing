document.addEventListener('DOMContentLoaded', init);
const alertElement =  document.querySelector('.alert--hidden')
function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

    alertElement.addEventListener('click', function() {
        this.style.display = 'none';
    })

}

function setRandomPosition(element, error = null) {
    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';

    if(error) {
        throw error;
    }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        try{
        setRandomPosition(this, error);}
        catch(err){
            displayError(err.message)
        }
    })
}
function displayError(message){
    const alertMessage= document.querySelector('.alert__message');

    alertMessage.innerText = message 
    alertElement.style.display = 'flex'
}
