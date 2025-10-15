const prompt = require("prompt-sync")();

let annee = parseInt(prompt("Entrez une année : "));


if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
  console.log("année" + annee + "est bissextile.")
} else {
  console.log("année" + annee + "n'est pas bissextile.");
}
