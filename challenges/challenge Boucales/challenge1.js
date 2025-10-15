const prompt = require("prompt-sync")();

let number = parseInt(prompt("Entre number: "))
for(let i= 0; i<=10 ; i++){
    console.log(`resulte ${number} * ${i} = ${number*i}`);
    
}