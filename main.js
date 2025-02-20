/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA:
non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
Pensate prima in italiano, in inglese o nella lingua che preferite.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array" */


// funzione che genera 5 numeri (1-100)
let randNums = rand5NumGen1to100();

console.log(randNums);

function rand5NumGen1to100() {
    let checkNums = []
    for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * 99) + 1
        console.log(num);

        if (checkNums.indexOf(num) == -1) {
            checkNums.push(num)
        } else if (checkNums.indexOf(num) !== -1) {

        }
    }
    return checkNums
}

// proietto in pagina

const randShow = document.getElementById("rand_display")

displayInPage(randNums)

function displayInPage(array) {
    for (let i = 0; i < 5; i++) {
        randShow.innerHTML += `<p>${array[i]}</p>`
    }
}

// li faccio durare 30 secondi in pagina



// faccio spuntare 5 input per l'utente
/* id="user_input" */

// verifico che siano uguali ai 5 generati


// BONUS verifica da segnalare visivamente