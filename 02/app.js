document.addEventListener('DOMContentLoaded', init);
const clickEl = document.querySelector('.error--click');

function init() {
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
        throw error
    }

}


function initEventWithError(element, eventName, error) {

        element.addEventListener(eventName, function() {
            
            try {
                setRandomPosition(this, error)
            }
            catch (error) {
                displaySection(error)
            }
        })
    

}
function displaySection(error) {
        const sectionAlert = document.querySelector(".alert--hidden");
        const pAlert = document.querySelector(".alert__message");
        const alertCon = document.querySelector(".alert__container");
        const bodyEl = document.querySelector("body");

        sectionAlert.style.display = 'block';
        pAlert.innerText = error.message;

        bodyEl.addEventListener("click", (e) => {
            sectionAlert.style.display = 'none';
            if (e.target === alertCon || e.target ===  pAlert || e.target ===  clickEl) {
                sectionAlert.style.display = 'block';
            }
        }) 
}