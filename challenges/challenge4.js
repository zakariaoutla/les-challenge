const prompt = require("prompt-sync")();
let num1 = parseFloat(prompt("Entre number 1: "))
let num2 = parseFloat(prompt("Entre number 2: "))
console.log("la somme : "+(num1+num2));
console.log("la multication : "+(num1*num2));
console.log("la soustraction : "+(num1-num2));
console.log("la division : "+(num1/num2));
console.log("le pourcentage : "+(num1%num2)+"%");
