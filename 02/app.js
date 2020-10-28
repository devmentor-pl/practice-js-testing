document.addEventListener("DOMContentLoaded", init);

function init() {
  const clickEl = document.querySelector(".error--click");
  const enterEl = document.querySelector(".error--enter");

  handleAlertClick();

  setRandomPosition(clickEl);
  setRandomPosition(enterEl);

  initEventWithError(clickEl, "click", new RangeError("Błąd zakresu!"));
  initEventWithError(enterEl, "mouseenter", new TypeError("Błąd typu!"));
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
    } catch (e) {
      showAlert(e.message);
    }
  });
}

function showAlert(message) {
  const alertEl = document.querySelector(".alert");

  if (alertEl) {
    alertEl.classList.remove("alert--hidden");

    const alertMessageEl = document.querySelector(".alert__message");

    if (alertMessageEl) {
      alertMessageEl.innerText = message;
    }
  }
}

function handleAlertClick() {
  const alertEl = document.querySelector(".alert");

  if (alertEl) {
    alertEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("alert")) {
        e.target.classList.add("alert--hidden");
      }
    });
  }
}
