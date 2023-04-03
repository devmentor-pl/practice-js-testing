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
			setErrorMsg(e.message);
			showError();
		}
	});
}

function showError() {
	const alertSection = document.querySelector('.alert');
	alertSection.classList.remove('alert--hidden');

	closeAlert(alertSection);
}

function setErrorMsg(errorMsg) {
	const alertMsg = document.querySelector('.alert__message');
	alertMsg.textContent = errorMsg;
}

function closeAlert(element) {
	element.addEventListener('click', (e) => {
		if (e.target.classList.contains('alert')) {
			element.classList.add('alert--hidden');
		}
	});
}
