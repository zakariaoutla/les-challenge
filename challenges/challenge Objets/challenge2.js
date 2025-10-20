let etudiant = {
    name: "Zakaria",
    age: 26,
    sePresenter: function () {
        console.log(`Bonjour, je m’appelle ${this.name} et j’ai ${this.age} ans.`);
    }
};

etudiant.sePresenter();


for (let key in etudiant) {
    console.log(`${key}: ${etudiant[key]}`);
}

let classe = {
    etude: [
        { name: "Zakaria", age: 26, city: "Azilal" },
        { name: "Sara", age: 22, city: "Beni Mellal" }
    ],

    afficherEtudiants: function () {
        for (let i = 0; i < this.etude.length; i++) {
            let etudiant = this.etude[i];
            console.log(`${i + 1}: ${etudiant.name}`);
        }
    }
};

classe.afficherEtudiants();






let livres = {
    liver: [
        { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: "1943" },
        { titre: "L'Étranger", auteur: "Albert Camus", annee: "1942" },
        { titre: "Les Misérables", auteur: "Victor Hugo", annee: "1862" },
    ],
    allTitre: function () {
        for (let i = 0; i < this.liver.length; i++) {
            let etudiant = this.liver[i].titre;
            console.log(`${i + 1}: ${etudiant}`);
        }
    }
}

livres.allTitre()

function trouverLivre(titre) {
  return livres.liver.find(l => l.titre === titre);
}


let live = trouverLivre("Le Petit Prince")
console.log(`liver :${live.titre}`);



