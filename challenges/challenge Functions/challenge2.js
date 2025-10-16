let tab = [1,3,4,6,20,3,2,9]

function  maxTableau(tab) {
    let max =[0]

for(let i=0; i<tab.length; i++){
    if(tab[i]>max){
        max = tab[i]
    }

}
return max
    
}

let resutle = maxTableau(tab)

console.log(`resulte max nomber : ${resutle}`);


