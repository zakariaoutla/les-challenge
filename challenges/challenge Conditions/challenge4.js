const prompt = require("prompt-sync")();
let a = parseFloat(prompt("Entre number a: "))
let b = parseFloat(prompt("Entre number b: "))

if(a>b){
    console.log("a grand number");
    
}else if(b>a){
    console.log("b grand number");
    
}else{
    console.log("entre number valid");
    
}