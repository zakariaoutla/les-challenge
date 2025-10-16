const number = [];

for (let i = 0; i < 7; i++) {
  let nombre = parseInt(prompt(`Entre number ${i + 1} :`));

  while (isNaN(nombre)) {
    nmr = parseInt(prompt(`Entre number ${i + 1} :`));
  }

  number.push(nmr);
}

const grand = Math.max(...number);
const petit = Math.min(...number);

console.log(`Le grand number est : ${grand}`);
console.log(`Le petit number est : ${petit}`);
