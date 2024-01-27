export default function randomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Podane argumenty nie są liczbami');
      }
    
      if (min > max) {
        throw new Error('Przedział jest nieprawidłowy');
      }
    
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    