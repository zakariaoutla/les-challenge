const prompt = require("prompt-sync")();

let number = prompt("Entre 4 number: ")

let nmr = number.split('').reverse().join('')

console.log(`resulte: ${nmr}`);
