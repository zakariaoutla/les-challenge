const prompt = require("prompt-sync")();

// Déclaration d'un tableau Livers
let livres = [
    { id_livre: 1, titre: "Le Petit Prince", auteur: "Saint-Exupéry", annee: 1943, disponible: true },
    { id_livre: 2, titre: "tranger", auteur: "Camus", annee: 1942, disponible: false }
];





// Cette fonction permet d'ajouter un nouveau livre
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


// Cette fonction permet d'ajouter plusieur livres
function plusieursliver() {
    let livre = Number(prompt("Ecrivez combien de livers vous souhaitez ajouter: "))

    for (let i = 0; i < livre; i++) {
        ajouteunliver()
    }
}


// Cette fonction affiche les livres
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


// Cette fonction Trier les livres par titre (ascendant/descendant)
function trierParTitre(livres, ordre) {
    for (let i = 0; i < livres.length - 1; i++) {
        for (let j = i + 1; j < livres.length; j++) {
            const titre1 = livres[i].titre.toLowerCase();
            const titre2 = livres[j].titre.toLowerCase();

            if (
                (ordre === "asc" && titre1 > titre2) ||
                (ordre === "desc" && titre1 < titre2)
            ) {
                const temp = livres[i];
                livres[i] = livres[j];
                livres[j] = temp;
            }
        }
    }
}

function orderTrierpartitre() {
    const choix = prompt("Choix ordre (1 - Ascendant / 2 - Descendant): ");

    if (choix === "1") {
        trierParTitre(livres, "asc");
    } else if (choix === "2") {
        trierParTitre(livres, "desc");
    } else {
        console.log("Choix invalide");
        return;
    }

    console.log("Liste des livres triés :");
    for (let livre of livres) {
        console.log(
            `ID: ${livre.id_livre}, Titre: ${livre.titre}, Auteur: ${livre.auteur}, Année: ${livre.annee}, Disponible: ${livre.disponible ? "Oui" : "Non"}`
        );
    }
}


// Cette fonction Trier les livres par année de publication
function trierParAnne(livres, ordre) {
    for (let i = 0; i < livres.length - 1; i++) {
        for (let j = i + 1; j < livres.length; j++) {
            const anne1 = livres[i].annee;
            const anne2 = livres[j].annee;

            if (
                (ordre === "asc" && anne1 > anne2) ||
                (ordre === "desc" && anne1 < anne2)
            ) {
                const temp = livres[i];
                livres[i] = livres[j];
                livres[j] = temp;
            }
        }
    }
}

function orderTrierparanne() {
    const choix = prompt("Choix ordre (1 - Ascendant / 2 - Descendant): ");

    if (choix === "1") {
        trierParAnne(livres, "asc");
    } else if (choix === "2") {
        trierParAnne(livres, "desc");
    } else {
        console.log("Choix invalide");
        return;
    }

    console.log("Liste des livres triés :");
    for (let livre of livres) {
        console.log(
            `ID: ${livre.id_livre}, Titre: ${livre.titre}, Auteur: ${livre.auteur}, Année: ${livre.annee}, Disponible: ${livre.disponible ? "Oui" : "Non"}`
        );
    }
}


// Cette fonction Afficher uniquement les livres disponibles
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

// Cette fonction Rechercher un livre par ID_livre
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


// Cette fonction Menu principal
function menu() {
    console.log("====Menu principal====");
    console.log("1. Introduire un livre");
    console.log("2. Ajouter plusieurs livres");
    console.log("3. Opérations sur les livres");
    console.log("4. Gestion des abonnés");
    console.log("0. Quitter");

    let choix = Number(prompt("Entre choix : "))
    return choix
}


// Cette fonction Menu Opérations sur les livres
function menuliver() {
    let choix;
    do {
        console.log("===== Opérations sur les livres =====");
        console.log("1. Afficher tous les livres");
        console.log("2. Trier les livres par titre (asc/desc)");
        console.log("3. Trier les livres par année de publication");
        console.log("4. Afficher uniquement les livres disponibles");
        console.log("5. Rechercher un livre par ID");
        console.log("6. Retour au menu principal");

        choix = Number(prompt("Entre choix : "));

        switch (choix) {
            case 1:
                showliver();
                break;

            case 2:
                orderTrierpartitre()
                break;

            case 3:
                orderTrierparanne()
                break;
            case 4:
                uniquement();
                break;
            case 5:
                rechercher();
                break;
            case 6:
                console.log("Retour au menu principal");
                break;
            default:
                console.log("Choix invalide");
        }

    } while (choix !== 6);

}

//Gestion des abonnés
// Déclaration d'un tableau abonnes
let abonnes = [
    { id: 1, nom: "outla", prenom: "zakaria", email: "zakariaoutla@mail.com" }
];


function gestionabonnes() {
    let choix;
    do {
        console.log("===== Gestion des abonnés =====");
        console.log("1. Ajouter un abonné");
        console.log("2. Afficher tous les abonnés.");
        console.log("3. Retour au menu principal");

        choix = Number(prompt("Entre choix : "))

        switch (choix) {
            case 1:
                ajouteabonnes()
                break
            case 2:
                   showabonne()
                break
            case 3:
                console.log("Retour au menu principal");
                break
            default:
                console.log("Choix invalide")
                break

        }

    } while (choix == !3)
}
// Cette fonction permet d'ajouter un nouveau abonnes
function ajouteabonnes() {

    let id = Number(prompt(`Entrez le id du abonne: `))
    let nom = prompt(`Entrez le nom du abonne: `);
    let prenom = prompt(`Entrez prenom du abonne: `);
    let email = prompt(`Entrez email du abonne: `);
    console.log("abonne ajoutée avec succès !");
    abonnes.push(
        {
            id: id,
            nom: nom,
            prenom: prenom,
            email: email,
        }

    )
}

function showabonne() {
    if (abonnes.length === 0) {
        console.log("aucun livers");

    } else {
        for (let i = 0; i < abonnes.length; i++) {
            console.log(`${i + 1}: ${abonnes[i].id}`);
            console.log(`nom: ${abonnes[i].nom}`);
            console.log(`prenom: ${abonnes[i].prenom}`);
            console.log(`email: ${abonnes[i].email}`);

        }
    }
}




// Cette fonction run application

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
            case 4:
                gestionabonnes()
                break

            case 0:
                console.log("Quitter");
                break

            default:
                console.log("Choix invalide")
                break;
        }

    } while (choix !== 0);

}

run()





