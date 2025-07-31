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
		} catch (error) {
			const alertBox = document.querySelector('.alert');
			showErrorAlert(alertBox, error);
			closeErrorAlert(alertBox);
		}
	});
}

function showErrorAlert(alertBox, error) {
	const alertText = document.querySelector('.alert__message');

	alertBox.classList.remove('alert--hidden');
	alertText.textContent = `Przechwycono błąd typu: ${error.name} o treści: ${error.message}`;
}

function closeErrorAlert(alertBox) {
	alertBox.addEventListener('click', (e) => {
		if (e.target.classList.contains('alert')) {
			e.target.classList.add('alert--hidden');
		}
	});
}
