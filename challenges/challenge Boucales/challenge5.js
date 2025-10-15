const prompt = require("prompt-sync")();

let number = parseInt(prompt("Entre number: "))

for(let i= 0; i<number; i++){
    if(i%2==0){
            console.log(`resulte: ${i}`);

    }
}