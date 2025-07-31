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
    const alertEl = document.querySelector(".alert");
    const alertMsg = alertEl.querySelector(".alert__message");
    alertMsg.textContent = err.message;
    alertEl.classList.remove("alert--hidden");
    document.addEventListener("click", function (e) {
      if (e.target === alertEl) {
        alertEl.classList.add("alert--hidden");
      }
    });
  }
}

function initEventWithError(element, eventName, error) {
  element.addEventListener(eventName, function () {
    setRandomPosition(this, error);
  });
}
