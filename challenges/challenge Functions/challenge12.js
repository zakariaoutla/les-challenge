let tabMots = ["auto", "car", "Ecole", "Enaa"];

function motsLongs(tabMots, longueur) {

  const resultat = [];

  for (let i = 0; i < tabMots.length; i++) {
    if (tabMots[i].length > longueur) {
      resultat.push(tabMots[i]);
    }
  }

  return resultat;
}

let resulte = motsLongs(tabMots, 5)

console.log(resulte);
