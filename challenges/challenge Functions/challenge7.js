let tab = [3,5,7,3,12,7,6,4]

function moyenne(tab){
    let somme = 0
    for(let i=0; i<tab.length; i++){
        somme+=tab[i]
    }
    console.log(`la somme: ${somme}`);
    
    return `la moyen: ${somme%tab.length}` 
    
}

let resulte = moyenne(tab)
console.log(resulte);
