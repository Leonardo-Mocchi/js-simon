/* Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const guideline = document.getElementById("guideline")
const memorize = document.getElementById("memorize")

id = "memorize"

// funzione che genera 5 numeri diversi (1-99)
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
        let num = Math.floor(Math.random() * 99) + 1
        console.log(num);

        if (checkNums.indexOf(num) == -1) {
            checkNums.push(num)
        }
    }
    // the first for-loop is used to 
    /* add a random number only if it's not already present to avoid duplicates */


    /* added a for loop because there was a tiny chance of error, now it's tinier, but not 0*/
    for (let i = 0; i < 10; i++) {
        //if statement with for-loop
        if (checkNums.length < 5) {
            for (let i = 0; i < (5 - checkNums.length); i++) {
                let num2 = Math.floor(Math.random() * 99) + 1
                console.log("Extra num generated is: " + num2);

                if (checkNums.indexOf(num2) == -1) {
                    checkNums.push(num2)
                }
            }
            // an if statement with a for-loop that is used to:
            /* compensate the first for-loop that leaves the array lacking numbers if 2 were generated as equals */
        }
    }
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

const page_display = document.getElementById("display_timeout")
const user_inputs_display = document.getElementById("input_timeout")

function numsOff_inputOn() {
    page_display.style.display = 'none';
    user_inputs_display.style.display = 'block';
}
function numsOn_inputOff() {
    page_display.style.display = 'block';
    user_inputs_display.style.display = 'none';
}

function numsOn_inputOn() {
    page_display.style.display = 'block';
    user_inputs_display.style.display = 'block';
}

numsOn_inputOff()

let display_timer = setTimeout(numsOff_inputOn, 30000);


// faccio spuntare 5 input per l'utente
/* id="user_input" */

const userInputs = document.getElementById("user_input")
const submitDisplay = document.getElementById("button_here")

displayInputs()

function displayInputs() {
    for (let i = 0; i < 5; i++) {
        userInputs.innerHTML += `<input type="number" required>`
    }
    userInputs.innerHTML += `<button id="submit_guess" type="submit" class="btn btn-dark my-2"> Submit </button>`
}

// verifico che siano uguali ai 5 generati

let userNumsPick = []
let correctNums = []

const singleInputs = userInputs.children
const submitBtn = document.getElementById("submit_guess")

function pushValues() {
    for (let i = 0; i < 5; i++) {
        userNumsPick.push(Number(singleInputs[i].value))
        console.log(singleInputs[i].value);
    }
    console.log(userNumsPick);
}


function verify(userNum, generated) {
    for (let i = 0; i < 5; i++) {
        if (generated.indexOf(userNum[i]) !== -1) {
            correctNums.push(userNum[i])
        }
    }
    console.log("The correct numbers are: " + correctNums);
}

submitBtn.addEventListener("click", function (event) {

    event.preventDefault()

    pushValues()

    console.log(pushValues);

    verify(userNumsPick, randNums)

    memorize.innerText = "These were the correct numbers"
    guideline.innerText = "These were your choices"
    numsOn_inputOn()

    for (let i = 0; i < 5; i++) {
        singleInputs[i].readOnly = true;
    }

    console.log("You got " + correctNums.length + " numbers right");
})
