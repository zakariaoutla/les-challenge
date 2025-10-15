const prompt = require("prompt-sync")();
let age = parseFloat(prompt("Entre number: "))
if(age <= 18){
  console.log("Non éligible");
  
}else{
    console.log("Éligibl deux e au vote");
    
}