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

    if(error) {
        throw(error)
    }
}

function initEventWithError(element, eventName, error) {  
    element.addEventListener(eventName, function() {
        const alert = document.querySelector('.alert');
        const alertMsg = alert.querySelector('.alert__message');
        try {
            setRandomPosition(this, error)  
        } catch (error) {
            alert.classList.remove('alert--hidden');
            alertMsg.innerText = `${error}`;
            closeAlertModal(alert)
        }
           
    })
}

function closeAlertModal(alert) {
    alert.addEventListener('click', function (e) {
        if (e.target === e.currentTarget) {
              alert.classList.add('alert--hidden');
        };
    })
}
