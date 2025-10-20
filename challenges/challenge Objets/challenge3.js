let entreprise = {
    adresse:{
        rue:"46",
        ville:"Azilal",
        codePostal:"22000"

    },
    produits: {
        nom:"RTX 3090",
        prix:2000,
        quantite:10
    }
}

console.log(entreprise.adresse.ville);
console.log(`stock:${entreprise.produits.prix*entreprise.produits.quantite} `);


let  animal ={
    nom : "chien",
    type : "Berger",
    parler: function(){
        console.log(`thes name  ${animal.nom} and type ${animal.type}`);
        
    }
  }
animal.parler()


let employes = [
  { nom: "Zakaria", salaire: 2800 },
  { nom: "Sara", salaire: 3200 },
];

let employesAvecSalaireEleve = employes.filter(emp => emp.salaire > 3000);

console.log(employesAvecSalaireEleve);

