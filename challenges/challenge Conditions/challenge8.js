const prompt = require("prompt-sync")();

let clour = prompt("Entre clour: ")

if(clour == "rouge"){
    console.log("Arrêt");
    
}else if(clour == "jaune"){
    console.log("Préparez-vous");
    
}else if (clour == "vert"){
    console.log("Allez");
    
}else{
    console.log("Invalid colour");
    
}