const prompt = require("prompt-sync")();

let number =[]


for(let i=0 ; i<8; i++){
    let num = parseInt(prompt(`Entre ${i+1} number : `))
    number.push(num)
}

let sernmr = parseInt(prompt("Search number: "))
let position = number.indexOf[sernmr]
if(position!==-1){
    console.log(`nomber : ${sernmr} et position : ${position+1}`);
}else{
    console.log(`nomber ne pas un list ${sernmr}`);
}