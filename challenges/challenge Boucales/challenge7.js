const prompt = require("prompt-sync")();



let somme = 1
let i= 0

while(i<10){
    let number = parseInt(prompt(`Entre ${i+1}: `))
    if(number>=0){
     somme+=number
    }else{
        console.log("number not valid");
        
    }
    i++
}
console.log(`la somme : ${somme}`);
