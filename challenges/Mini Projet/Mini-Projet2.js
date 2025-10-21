const prompt = require("prompt-sync")();

let todoList = {
    alltask: [],
    userInput: function () {
        let promptInput = prompt('enter the task : ');
        return promptInput;
    },

    addtask: function (description) {
        let task = {
            description: description,
            isDone: false
        }
        this.alltask.push(task)
    },

    showtask: function () {
        console.log("====== All task ======");
        if (this.alltask.length === 0) {
            console.log("aucune task");

        } else {
            for (let i = 0; i < this.alltask.length; i++) {
                console.log(`${i + 1}: ${this.alltask[i].description} [${this.alltask[i].isDone ? "terminées" : "en attente"}]`);
            }

        }

    },
    rechercher: function () {
        let rech = prompt("Rechercher une tâche : ").toLowerCase();
        let result = this.alltask.find(d => d.description.toLowerCase() === rech);

        if (result) {
            console.log("Tâche trouvée :", result);
        } else {
            console.log(`La tâche "${rech}" n'a pas été trouvée.`);
        }
    },

    modifier: function () {
        this.showtask();

        let oldtask = parseInt(prompt("Enter the task number you want to modify: ")) - 1;

        if (oldtask >= 0 && oldtask < this.alltask.length) {
            let newDescription = prompt("Enter the new description: ");
            this.alltask[oldtask].description = newDescription;
            console.log("Task updated successfully.");
        } else {
            console.log("Invalid task number.");
        }
    },
    marquerTerminee: function () {
        this.showtask();
        let marq = parseInt(prompt("Numéro de la tâche à marquer comme terminée : ")) - 1;

        if (marq >= 0 && marq < this.alltask.length) {
            this.alltask[marq].isDone = true;
            console.log("Tâche marquée comme terminée.");
        } else {
            console.log("Numéro de tâche invalide.");
        }
    },

    supprimer: function () {
        this.showtask();
        let supp = parseInt(prompt("Numéro de la tâche à supprimer : ")) - 1;

        if (supp >= 0 && supp < this.alltask.length) {
            this.alltask.splice(supp, 1);
            console.log("Tâche supprimée avec succès.");
        } else {
            console.log("Numéro de tâche invalide.");
        }
    },



    menu: function () {
        console.log("=== To-Do List ===");
        console.log("1. Afficher les tâches");
        console.log("2. Ajouter une tâche");
        console.log("3. Rechercher une tâche");
        console.log("4. Modifier une tâche");
        console.log("5. Supprimer une tâche");
        console.log("6. Marquer une tâche comme terminée");
        console.log("0. Quitter");
        let choix = Number(prompt("Entre un choix : "))
        return choix
    }
}

function run() {
    let choix;
    do {
        choix = todoList.menu()

        switch (choix) {
            case 1:
                todoList.showtask()
                break;
            case 2:
                let task = todoList.userInput()
                todoList.addtask(task)
                console.log("Tâche ajoutée avec succès !");
                break
            case 3:
                todoList.rechercher()
                break
            case 4:
                todoList.modifier()
                break
            case 5:
                todoList.supprimer()
                break
            case 6:
                todoList.marquerTerminee()
                break
            case 0:
                console.log("quiter");
                break

            default:
                console.log("Invalid choix");

                break;
        }



    } while (choix !== 0)

}

run()






