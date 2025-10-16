let tab = [3,4,5,6,5,8]

function compterOccurrences(tab, valeur) {
    let compter = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === valeur) {
            compter++;
        }
    }
    return compter;
}

let resulte = compterOccurrences(tab, 5)

console.log(resulte);
