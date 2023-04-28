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

  try {
    if (error) {
      throw error;
    }
  } catch (e) {
    const alertEl = document.querySelector(".alert--hidden");
    alertEl.style.display = "block";
    const pEl = document.querySelector(".alert__message");
    pEl.textContent = e.message;
  }
}

function initEventWithError(element, eventName, error) {
  element.addEventListener(eventName, function () {
    setRandomPosition(this, error);
  });
}

document.body.addEventListener("click", (e) => {
  if (e.target.className.includes("alert--hidden")) {
    const alertEl = document.querySelector(".alert--hidden");
    alertEl.style.display = "none";
  }
});
