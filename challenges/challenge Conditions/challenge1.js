const prompt = require("prompt-sync")();
let number = parseFloat(prompt("Entre number: "))
if (number% 2 == 0){
    console.log("number pair");
    
}else{
    console.log("number Impair");
    
}