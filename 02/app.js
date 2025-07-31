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
    } catch (error) {
      const alertSection = document.querySelector(".alert");
      console.log(alertSection);

      const alertElement = alertSection.querySelector(".alert__message");
      alertSection.classList.remove("alert--hidden");

      if (error instanceof RangeError) {
        alertElement.textContent = "Błąd zakresu!";
        console.log("Błąd zakresu");
      } else if (error instanceof TypeError) {
        alertElement.textContent = "Błąd typu!";
        console.log("Błąd typu");
      }
    }
  });
}
