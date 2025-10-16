let tab = [2,5,6,3,7]

function  sommeTableau(tab){
    let somme = 0
    for(let i=0; i<tab.length; i++){
        somme+=tab[i]
        
    }
    return somme

}
let resulte = sommeTableau(tab)
console.log(resulte);
