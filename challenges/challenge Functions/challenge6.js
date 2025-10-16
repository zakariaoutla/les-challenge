let tab = [2,4,6,8,4,10]

function produitTableau(tab){
    let n = 1
    for(let i = 0; i<tab.length; i++){
    n*=tab[i]
        
    }
    return n
}
console.log(produitTableau(tab));
