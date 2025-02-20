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


// funzione che genera 5 numeri (1-99)
let randNums = rand5NumGen1to99();

console.log(randNums);


/**
 * Generates 5 numbers from 1 to 99
 * @returns an array of 5 numbers
 */
function rand5NumGen1to99() {
    let checkNums = []

    //first for-loop
    for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * 98) + 1
        console.log(num);

        if (checkNums.indexOf(num) == -1) {
            checkNums.push(num)
        }
    }
    // the first for-loop is used to 
    /* add a random number only if it's not already present to avoid duplicates */

    //if statement with for-loop
    if (checkNums.length < 5) {
        for (let i = 0; i < (5 - checkNums.length); i++) {
            let num2 = Math.floor(Math.random() * 98) + 1
            console.log(num2);

            if (checkNums.indexOf(num2) == -1) {
                checkNums.push(num2)
            }
        }
    }
    // an if statement with a for-loop that is used to:
    /* compensate the first for-loop that leaves the array lacking numbers if 2 were generated as equals */

    return checkNums
}

// proietto in pagina

const randShow = document.getElementById("rand_display")

displayInPage(randNums)

/**
 * Generates HTML-type text in the .html web page in order to display the 5 generated numbers form the rand5NumGen1to99() function
 * @param {*} array the input array is the result of the rand5NumGen1to99() function
 */
function displayInPage(array) {
    for (let i = 0; i < 5; i++) {
        randShow.innerHTML += `<p>${array[i]}</p>`
    }
}

// li faccio durare 30 secondi in pagina

/* id="input_timeout"  id="display_timeout" */

const page_display = document.getElementById("display_timeout")
const user_inputs_display = document.getElementById("input_timeout")

function numsOff_inputOn() {
    page_display.style.display = 'none';
    user_inputs_display.style.display = 'block';
}
function numsOn_inputOff() {
    page_display.style.display = 'inline';
    user_inputs_display.style.display = 'none';
}

numsOn_inputOff()

let display_timer = setTimeout(numsOff_inputOn, 3000);


// faccio spuntare 5 input per l'utente
/* id="user_input" */

const userInputs = document.getElementById("user_input")

displayInputs()

function displayInputs() {
    for (let i = 1; i <= 5; i++) {
        userInputs.innerHTML += `<input type="text" name="input${i}" id="input${i}" class="Required">`
    }
    userInputs.innerHTML += `<button id="submit_guess" type="submit" class="btn btn-primary"> Submit </button>`
}

// verifico che siano uguali ai 5 generati

let user_inputs = []

const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const input4 = document.getElementById("input4")
const input5 = document.getElementById("input5")

/* pushInputs() */

console.log(user_inputs);

for (let i = 1; i <= 5; i++) {
    user_inputs.push(input[i])
}

/* function pushInputs () {
    for (let i = 1; i <= 5; i++) {
        user_inputs.push(input[i].value)
    }
} */





// BONUS verifica da segnalare visivamente





//FOR EXTRA ITERATIONS

/* let randNums_bis;
function rand5NumGen1to99_bis() {
    randNums_bis = rand5NumGen1to99()
}

const timerGen = setTimeout(rand5NumGen1to99_bis, 2500);


function displayInPage_bis () {
    displayInPage(randNums_bis)
}
const timerDisplay = setTimeout(displayInPage_bis, 3000); */