let tab = [1, 2, 4, 7, 8, 7, 2]

function supprimerDoublons(tab) {
    let resulte = []

    for (let i = 0; i < tab.length; i++) {
        let exist = false


        for (let l = 0; l < resulte.length; l++) {
            if (tab[i] === tab[l]) {
                exist = true
                break
            }
            

        }
        if (!exist) {
        resulte.push(tab[i])
    }
    }
    return resulte
    

}

console.log(supprimerDoublons(tab));
