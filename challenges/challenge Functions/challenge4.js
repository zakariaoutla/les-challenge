let tab = [3, 7, 9, 5, 3, 4];

function inverserTableau(tab) {
    let resultat = [];
    for (let i = tab.length - 1; i >= 0; i--) {
        resultat.push(tab[i]);
    }
    return resultat;
}

let resulte = inverserTableau(tab);
console.log(`resulte : ${resulte}`);
