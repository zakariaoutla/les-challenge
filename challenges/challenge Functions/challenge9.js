let tab1 = [2,7,5,4,8]
let tab2 = [4,5,8,2,1]

function  fusionner(tab1, tab2){
    let resulte = []
    for(let i = 0; i<tab1.length; i++){
        resulte.push(tab1[i])
    }
    for(let l = 0; l<tab2.length; l++){
        resulte.push(tab2[l])
    }
    return resulte
}

let resultat = fusionner(tab1, tab2)

console.log(resultat);
