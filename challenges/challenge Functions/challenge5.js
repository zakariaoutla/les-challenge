let tab = [3,2, 7, 4,9,8,10, 16]
 function filtrerPairs(tab){
    let table =[]
    for(let i= 0; i<tab.length; i++){
        if(tab[i]%2==0){
            table.push(tab[i])             
        }
       
    }
    return table
 }

 let resulte = filtrerPairs(tab)

 console.log(resulte);
 