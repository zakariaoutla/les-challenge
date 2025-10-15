const prompt = require("prompt-sync")();

let mdp = prompt("Entre mot de passe: ");  

if (mdp.length < 6) {
    console.log("Faible");
} else if (mdp.length >= 8) {
    console.log("Fort");
} else if (mdp.length >= 6) {
    console.log("Moyen");
} else {
    console.log("Mot de passe invalide");
}