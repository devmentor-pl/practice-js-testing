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
  element.addEventListener(eventName, function (e) {
    e.stopPropagation();
    try {
      setRandomPosition(this, error);
    } catch (e) {
      showError(e.message);
    }
  });
}

function showError(error) {
  const alertMessage = document.querySelector(".alert__message");
  alertMessage.innerText = error;
  alertMessage.parentElement.parentElement.classList.add("show");
}

document.addEventListener("click", () => {
  const alert = document.querySelector(".alert");

  if (alert.classList.contains("show")) {
    alert.classList.remove("show");
  }
});
