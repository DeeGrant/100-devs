//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
let age = 25

if (age < 16) {
    console.log('they can not drive')
} else if (age < 18) {
    console.log("them they can't hate from outside the club, because they can't even get in")
} else if (age < 21) {
    console.log("them they can not drink")
} else if (age < 25) {
    console.log("them they can not rent cars affordably")
} else if (age < 30) {
    console.log("them they can not rent fancy cars affordably")
} else {
    console.log("tell them there is nothing left to look forward too")
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
let input = document.querySelector('input')
let p = document.querySelector('p')

document.querySelector('h1').addEventListener('click', function () {
    let msg
    let age = Number(input.value)

    if (age < 16) {
        msg = 'they can not drive'
    } else if (age < 18) {
        msg = "them they can't hate from outside the club, because they can't even get in"
    } else if (age < 21) {
        msg = "them they can not drink"
    } else if (age < 25) {
        msg = "them they can not rent cars affordably"
    } else if (age < 30) {
        msg = "them they can not rent fancy cars affordably"
    } else {
        msg = "tell them there is nothing left to look forward too"
    }

    p.innerText = msg
})
