document.addEventListener("DOMContentLoaded", init);

function init() {
  const clickEl = document.querySelector(".error--click");
  const enterEl = document.querySelector(".error--enter");

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
      showError(e);
    }
  });
}

function showError(e) {
  const alertHidden = document.querySelector(".alert");
  const alertPlace = document.querySelector(".alert__message");
  alertHidden.style.display = "flex";
  alertPlace.innerText = e;

  alertHidden.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      alertHidden.style.display = "none";
    }
  });
}
