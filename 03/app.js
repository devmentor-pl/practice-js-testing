export default function randomNumber(min, max) {
  validateNumbers(min, max);

  const areSameValues = min === max;
  if (areSameValues) return min;
}

function validateNumbers(...args) {
  args.forEach((arg) => {
    const isNumberType = typeof arg === "number" && !isNaN(arg);
    if (!isNumberType) throw new Error("arg is not type number");
  });
}
