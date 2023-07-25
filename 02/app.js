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
  try {
    element.style.top = Math.random() * 600 + "px";
    element.style.left = Math.random() * 800 + "px";

    if (error) {
      throw error;
    }
  } catch (err) {
    printError(err.message);
  }
}

function initEventWithError(element, eventName, error) {
  element.addEventListener(eventName, function () {
    setRandomPosition(this, error);
  });
}

function printError(errMsg) {
  const alertSectionEl = document.querySelector(".alert");
  const alertMessageEl = alertSectionEl.querySelector(".alert__message");

  alertSectionEl.classList.remove("alert--hidden");
  alertMessageEl.innerText = errMsg;

  alertSectionEl.addEventListener("click", closePopup);
}

function closePopup(e) {
  if (e.target !== e.currentTarget) return;
  const sectionAlert = e.target;
  sectionAlert.classList.add("alert--hidden");
}
