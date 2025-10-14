const prompt = require("prompt-sync")();
let vitesse = parseFloat(prompt("Entre vitesse: "))
let temps = parseFloat(prompt("Entre temps: "))
let distance = vitesse * temps

console.log("distance: "+ distance)