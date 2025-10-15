const prompt = require("prompt-sync")();

let start = parseInt(prompt('Entre hwo much start: '))

for(let i = 1; i>start; i++){
    console.log(`${i*start}*`);
    

}