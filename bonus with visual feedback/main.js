/* Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


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
const submit = document.getElementById("submit")


displayInputs()

function displayInputs() {
    for (let i = 0; i < 5; i++) {
        userInputs.innerHTML += `<input type="number" required>`
    }
    submit.innerHTML = `<button id="submit_guess" type="submit" class="btn btn-dark my-2"> Submit </button>`
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
            generated[generated.indexOf(userNum[i])] = [i]
            correctNums.push(userNum[i])

            singleInputs[i].classList.add("bg-danger")
            singleInputs[i].classList.add("text-light")
            singleInputs[i].classList.add("order-0")
        } else {
            singleInputs[i].classList.add("bg-dark")
            singleInputs[i].classList.add("text-light")
            singleInputs[i].classList.add("order-5")
        }
    }
    console.log("The correct numbers are: " + correctNums);
}

// visual section
const guideline = document.getElementById("guideline")
const memorize = document.getElementById("memorize")
const feedback = document.getElementById("feedback")
const healthPoints = document.getElementById("health_points")

//event activator

submitBtn.addEventListener("click", function (event) {

    event.preventDefault()

    submitBtn.readOnly = true;

    pushValues()

    console.log(pushValues);

    verify(userNumsPick, randNums)



    memorize.innerText = ""
    guideline.innerText = ""
    numsOn_inputOn()
    memorize.innerText = "These were the correct numbers"
    guideline.innerText = "These were your choices"
    healthPoints.innerHTML = `HP bar <span id="hp_total"></span>/5`
    feedback.innerHTML = `YOU CORRECTLY PICKED <span id="hp_total2"></span> NUMBERS <br><br>`

    const healthPointsTotal = document.getElementById("hp_total")
    const healthPointsTotal_bis = document.getElementById("hp_total2")

    healthPointsTotal.innerText = correctNums.length
    healthPointsTotal_bis.innerText = correctNums.length

    if (correctNums.length === 0) {
        healthPointsTotal.classList.add("text-secondary")
        healthPointsTotal_bis.classList.add("text-secondary")

        feedback.innerHTML += ' <p class="fs-5 text-secondary"> You just clicked without reading, huh? </p>'
    } else if (correctNums.length > 0 && correctNums.length <= 2) {
        healthPointsTotal.classList.add("text-success")
        healthPointsTotal_bis.classList.add("text-success")

        feedback.innerHTML += '<p class="fs-4 text-success"> Hey at least you understood the assignment <i class="far fa-smile"></i> </p>'
    } else if (correctNums.length > 2 && correctNums.length <= 4) {
        healthPointsTotal.classList.add("text-primary")
        healthPointsTotal_bis.classList.add("text-primary")
        feedback.innerHTML += '<p class="fs-3 text-primary"> <i class="fa-solid fa-heart"></i> Nice! I see some skill <i class="fa-solid fa-heart"></i></p>'
    } else if (correctNums.length === 5) {
        healthPointsTotal.style.color = " #df73ff"
        healthPointsTotal_bis.style.color = " #df73ff"
        feedback.innerHTML += '<h1 class="fs-2" style="color: #df73ff;"> <i class="fa-solid fa-hat-wizard"></i> YOU\'RE A WIZARD HARRY! <i class="fa-solid fa-hat-wizard"></i> </h1>'
    }


    for (let i = 0; i < 5; i++) {
        singleInputs[i].readOnly = true;
    }

    console.log("You got " + correctNums.length + " numbers right");
})
