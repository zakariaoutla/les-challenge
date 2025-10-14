const prompt = require("prompt-sync")();
let a = parseFloat(prompt("Entre number A: "))
let b = parseFloat(prompt("Entre number B: "))
let c = parseFloat(prompt("Entre number C: "))
let d = parseFloat(prompt("Entre number D: "))

let sommeresulte = a+b+c+d

console.log("la somme : " + sommeresulte)
let moyen = sommeresulte/4

console.log("la Moyen: " +moyen)