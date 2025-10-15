const prompt = require("prompt-sync")();

let number = parseFloat(prompt("Entre number: "))

if(number>0){
    console.log("Number positif");
    
}else{
    console.log("number négatif");
    
}