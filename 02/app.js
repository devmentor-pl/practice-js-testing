document.addEventListener('DOMContentLoaded', init);

const alertElem = document.querySelector('.alert');
const alertMsg = alertElem.querySelector('p');
const alertContainer = alertElem.querySelector('.alert__container');
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
			alertElem.classList.remove('alert--hidden');
			alertMsg.textContent = e.name;
			closePopup();
		}
	});
}
function closePopup() {
	alertElem.addEventListener('click', function (e) {
		if (e.target !== alertContainer && e.target !== alertMsg) {
			alertElem.classList.add('alert--hidden');
		}
	});
}
