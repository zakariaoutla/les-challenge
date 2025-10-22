const prompt = require("prompt-sync")();


let livres = [
    { id_livre: 1, titre: "Le Petit Prince", auteur: "Saint-Exupéry", annee: 1943, disponible: true },
    { id_livre: 2, titre: "L'Étranger", auteur: "Camus", annee: 1942, disponible: false }
];

let abonnes = [
  { id: 1, nom: "outla", prenom: "zakaria", email: "zakariaoutla@mail.com" }
];


function menu() {
    console.log("====Menu principal====");
    console.log("1. Introduire un livre");
    console.log("2. Ajouter plusieurs livres");
    console.log("3. Opérations sur les livres");
    console.log("0. Quitter");

    let choix = Number(prompt("Entre choix : "))
    return choix
}



function ajouteunliver() {

    let id = Number(prompt(`Entrez le id du livre: `))
    let titre = prompt(`Entrez le titre du livre: `);
    let auteur = prompt(`Entrez l'auteur du livre: `);
    let annee = prompt(`Entrez annee du livre: `);
    let disponible = prompt(`Le livre est-il disponible ? (oui/non): `).toLowerCase();
    console.log("liver ajoutée avec succès !");
    livres.push(
        {
            id_livre: id,
            titre: titre,
            auteur: auteur,
            annee: annee,
            disponible: disponible
        }

    )
}

function plusieursliver() {
    let livre = Number(prompt("Ecrivez combien de livers vous souhaitez ajouter: "))

    for (let i = 0; i < livre; i++) {
        ajouteunliver()
    }
}



function showliver() {
    if (livres.length === 0) {
        console.log("aucun livers");

    } else {
        for (let i = 0; i < livres.length; i++) {
            console.log(`${i + 1}: ${livres[i].id_livre}`);
            console.log(`titre: ${livres[i].titre}`);
            console.log(`auteur: ${livres[i].auteur}`);
            console.log(`annee: ${livres[i].annee}`);
            console.log(`disponible: ${livres[i].disponible ? "oui" : "non"}`);

        }
    }
}

function rechercher() {
    let res = Number(prompt("Entre number Rechercher ID: "));
    let result = null;

    for (let i = 0; i < livres.length; i++) {
        if (livres[i].id_livre === res) {
            result = livres[i];
            break;
        }
    }

    if (result) {
        console.log("Le livre trouvé :", result);
    } else {
        console.log(`Le livre avec l'ID "${res}" n'a pas été trouvé.`);
    }
}


function uniquement() {
    let found = false;
    for (let i = 0; i < livres.length; i++) {
        if (livres[i].disponible === true) {
            console.log(livres[i].titre);
            console.log(livres[i].auteur);
            console.log(livres[i].annee);
            console.log(livres[i].disponible);
            found = true

        }
    }
    if (!found) {
        console.log("aucun livers");
    }
}

function menuliver() {
    let choixLivres;
    do {
        console.log("===== Opérations sur les livres =====");
        console.log("1. Afficher tous les livres");
        console.log("2. Trier les livres par titre (asc/desc)");
        console.log("3. Trier les livres par année de publication");
        console.log("4. Afficher uniquement les livres disponibles");
        console.log("5. Rechercher un livre par ID");
        console.log("6. Retour au menu principal");

        choixLivres = Number(prompt("Entre choix : "));

        switch (choixLivres) {
            case 1:
                console.log("--- Tous les livres ---");
                showliver();
                break;

            case 2:
                console.log("--- Trier les livres par titre ---");
                
                break;

            case 3:
                console.log("--- Trier les livres par année ---");
               
                break;

            case 4:
                console.log("--- Livres disponibles ---");
                uniquement();
                break;

            case 5:
                console.log("--- Rechercher un livre ---");
                rechercher();
                break;

            case 6:
                console.log("Retour au menu principal...");
                break;

            default:
                console.log("Choix invalide !");
        }

    } while (choixLivres !== 6);

}








function run() {
    let choix;
    do {
        choix = menu()

        switch (choix) {
            case 1:
                ajouteunliver()
                break;
            case 2:
                plusieursliver()
                break
            case 3:
                menuliver()
                break
            case 0:
                console.log("Quitter");

            default:
                break;
        }

    } while (choix !== 0);

}

run()





