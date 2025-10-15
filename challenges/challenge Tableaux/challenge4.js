const number = [];

for (let i = 0; i < 7; i++) {
  let input = prompt(`Entre number ${i + 1} :`);
  let nombre = parseInt(input, 10);

  while (isNaN(nombre)) {
    input = prompt(`Entre number ${i + 1} :`);
    nombre = parseInt(input, 10);
  }

  number.push(nombre);
}

const grand = Math.max(...number);
const petit = Math.min(...number);

console.log(`Le grand number est : ${grand}`);
console.log(`Le petit number est : ${petit}`);
