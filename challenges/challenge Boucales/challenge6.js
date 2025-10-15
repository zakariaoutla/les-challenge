const prompt = require("prompt-sync")();

let base = parseInt(prompt("Entre number base: "))
let exposant = parseInt(prompt("Entre number exposant: "))

let n = 1
let i = 0
while (i<exposant) {
    n= n*base
    i++
    
}
console.log(`resulte: ${n}`);
