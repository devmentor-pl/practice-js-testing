document.addEventListener("DOMContentLoaded", init);

function init() {
  const clickEl = document.querySelector(".error--click");
  const enterEl = document.querySelector(".error--enter");
  const hiddenAlert = document.querySelector(".alert");

  setRandomPosition(clickEl);
  setRandomPosition(enterEl);

  initEventWithError(
    clickEl,
    "click",
    new RangeError("Błąd zakresu!"),
    hiddenAlert
  );
  initEventWithError(
    enterEl,
    "mouseenter",
    new TypeError("Błąd typu!"),
    hiddenAlert
  );

  hiddenAlert.addEventListener("click", () => {
    hiddenAlert.classList.add("alert--hidden");
  });
}

function setRandomPosition(element, error = null) {
  element.style.top = Math.random() * 600 + "px";
  element.style.left = Math.random() * 800 + "px";

  if (error) {
    throw error;
  }
}

function initEventWithError(element, eventName, error, hiddenEl) {
  element.addEventListener(eventName, function () {
    try {
      setRandomPosition(this, error);
    } catch (e) {
      addMessageToHTML(e.message, hiddenEl);
    }
  });
}

function addMessageToHTML(message, hiddenEl) {
  const alert = document.querySelector(".alert__message");
  alert.innerText = message;

  hiddenEl.classList.remove("alert--hidden");
}
