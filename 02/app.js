document.addEventListener("DOMContentLoaded", init);

const alertWindow = document.querySelector(".alert");
const alertMessage = alertWindow.querySelector(".alert__message");

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

  try {
    if (error) {
      throw error;
    }
  } catch (e) {
    alertWindow.classList.remove("alert--hidden");

    if (e.name === "TypeError") {
      alertMessage.innerText = e.message;
      alertWindow.classList.add("error--enter");
    }

    if (e.name === "RangeError") {
      alertMessage.innerText = e.message;
      alertWindow.classList.add("error--click");
    }
  }
}

function initEventWithError(element, eventName, error) {
  element.addEventListener(eventName, function () {
    setRandomPosition(this, error);
  });
}

function clearErrorAlert(e) {
  if (e.target !== alertWindow.children[0] && e.target !== alertMessage) {
    alertWindow.classList.add("alert--hidden");
  }
}

alertWindow.addEventListener("click", clearErrorAlert);
