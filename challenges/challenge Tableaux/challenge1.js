const prompt = require("prompt-sync")();


let stocknmr = []

for(let i=0; i<5; i++){
    let number = prompt(`Entre ${i+1} number : `)
    stocknmr.push(number)

}
stocknmr.reverse()

console.log(`resulte table : ${stocknmr}`);



