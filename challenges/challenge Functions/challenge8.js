let tab = [4,5,3,8,9,3,2]

function  doubler(tab){
    let resultet= []
    for(let i=0; i<tab.length; i++){
    
        resultet.push(tab[i]*2)
        

    }
    return resultet
}

let resulte = doubler(tab)
console.log(`resulte: ${resulte}`);



