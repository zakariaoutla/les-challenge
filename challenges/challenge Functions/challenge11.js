function tableMultiplication(n){
    let number = []

    for(let i = 0; i <= 10; i++){
        number.push(`${n * i}`)
    }
    return number
}

console.log(tableMultiplication(4));
