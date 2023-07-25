export default function randomNumber(min, max) {
  validateNumbers(min, max);

  const areSameValues = min === max;
  if (areSameValues) return min;

  const isMinOutOfRage = min > max;
  if (isMinOutOfRage) throw new Error("min arg must be bigger than max");
}

function validateNumbers(...args) {
  args.forEach((arg) => {
    const isNumberType = typeof arg === "number" && !isNaN(arg);
    if (!isNumberType) throw new Error("arg is not type number");
  });
}
