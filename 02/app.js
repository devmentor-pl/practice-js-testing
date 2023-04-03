document.addEventListener("DOMContentLoaded", init);

function init() {
	const clickEl = document.querySelector(".error--click");
	const enterEl = document.querySelector(".error--enter");

	setRandomPosition(clickEl);
	setRandomPosition(enterEl);

	initEventWithError(clickEl, "click", new RangeError("Błąd zakresu!"));
	initEventWithError(enterEl, "mouseenter", new TypeError("Błąd typu!"));

	removeAlert();
}

function setRandomPosition(element, error = null) {
	element.style.top = Math.random() * 600 + "px";
	element.style.left = Math.random() * 800 + "px";

	if (error) {
		throw error;
	}
}

function initEventWithError(element, eventName, error) {
	element.addEventListener(eventName, function () {
		try {
			setRandomPosition(this, error);
		} catch {
			const message = document.querySelector(".alert__message");
			message.innerText = error;
			document.querySelector(".alert--hidden").style.display = "block";
		}
	});
}

function removeAlert() {
	const alertWrapper = document.querySelector(".alert--hidden");
	const alertMessage = alertWrapper.querySelector(".alert__message");

	alertWrapper.addEventListener("click", e => {
		if (e.target !== alertMessage) {
			document.querySelector(".alert--hidden").style.display = "none";
		}
	});
}
