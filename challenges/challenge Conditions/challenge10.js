const prompt = require("prompt-sync")();
const user = prompt("Entre Nom d’utilisateur: ")
const mdp = prompt("Entre mode passe: ")

if(user== "Admin" && mdp== 1234){
    console.log("Bienvenue Admin");
    
}else if(mdp!=1234){
    console.log("Mot de passe incorrect");
    
}else{
    console.log("Utilisateur introuvable");
    
}