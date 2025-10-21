const prompt = require("prompt-sync")();

let tab = []

function addition(a, b) {
    return a + b
}

function soustraction(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}

function division(a, b) {
    if (b == 0) {
        console.log("erreur de diviser par zéro");

    } else {
       return a / b
    }

}
function puissance(a, b) {
    return Math.pow(a,b)
}

function racinecarree(a) {
    return Math.sqrt(a)
}


function factorielle(a) {
    if (a < 0) {
        return `number negatif`
    }
    let res = 1
    for (let i = 1; i <= a; i++) {
        res *= i
    }
    return res
}



function showinfo(tab) {
    console.log(`=====Historique=====`);
    if (tab.length == 0) {
        console.log("aucune historique ");
    } else {
        for (let i = 0; i < tab.length; i++) {
            console.log(`${i + 1}: ${tab[i]}`);

        }
    }
    console.log("============================");
    
}

while (true) {
    console.log(`=====Choise opérateur=====`);
    console.log("1. Addition (+)");
    console.log("2. Soustraction (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division (/)");
    console.log("5. Puissance");
    console.log("6. Racine carrée");
    console.log("7. Factorielle");
    console.log("8.voir historique ");
    console.log("9. se déconnecter");

    let choise = prompt("Entre opérateur: ")


    if (choise === "9") {
        console.log("au revoir");
        break
    }

    let a, b, result

    if (["6", "7"].includes(choise)) {
        a = parseInt(prompt("Entre Number : "))
    } else if (choise !== "8") {
        a = parseFloat(prompt("Entre number 1: "))
        b = parseFloat(prompt("Entre number 2: "))

    }

    switch (choise) {
        case "1":
            result = addition(a, b)
            tab.push(`${a}+${b} = ${result}`)
            console.log("===== Resulte======");
            console.log(`${a}+${b} = ${result}`);
            console.log("====================");
            break;
        case "2":
            result = soustraction(a, b)
            tab.push(`${a}-${b} = ${result}`)
            console.log("===== Resulte======");
            console.log(`${a}-${b} = ${result}`);
            console.log("====================");
            break;
        case "3":
            result = multiplication(a, b)
            tab.push(`${a}*${b} = ${result}`)
            console.log("===== Resulte======");
            console.log(`${a}*${b} = ${result}`);
            console.log("====================");
            break;
        case "4":
            result = division(a, b)
            tab.push(`${a}/${b} = ${result}`)
            console.log("===== Resulte======");
            console.log(`${a}/${b} = ${result}`);
            console.log("====================");
            break;
        case "5":
            result = puissance(a, b)
            tab.push(`${a}^${b} = ${result}`)
            console.log("===== Resulte======");
            console.log(`${a}^${b} = ${result}`);
            console.log("====================");
            break;
        case "6":
            result = racinecarree(a)
            tab.push(`√${a} = ${result}`)
            console.log("===== Resulte======");
            console.log(`√${a} = ${result}`);
            console.log("====================");
            break;
        case "7":
            result = factorielle(a)
            tab.push(`${a} = ${result}`)
            console.log("===== Resulte======");
            console.log(`${a} = ${result}`);
            console.log("====================");
            break;
        case "8":
            showinfo(tab)
            break;
        default:
            console.log("Invalid chois");
    }
}




console.log("5. Supprimer une tâche");
        console.log("6. Marquer une tâche comme terminée");
        console.log("7. Afficher tâches terminées / en attente");



