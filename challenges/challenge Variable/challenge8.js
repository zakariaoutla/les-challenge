const prompt = require("prompt-sync")();
let number = prompt("Entrez un nombre entier à 3 chiffres :")
let c = /^\d{3}$/.test(number)
console.log(c+ number.split().reverse().join())
