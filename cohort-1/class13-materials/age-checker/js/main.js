//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
let age = 23

if(age < 16) {
    console.log('You can not drive')
} else if(age < 18) {
    console.log('You can\'t hate from outside the club, because they can\'t even get in')
} else if(age < 21) {
    console.log('You can not drink')
} else if(age < 25) {
    console.log('You can not rent cars affordably')
} else if(age < 30) {
    console.log('You can not rent fancy cars affordably')
} else if(age >= 30) {
    console.log('there is nothing left to look forward too')
} else {
    console.log('You don\'t have an age.')
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
let h1 = document.querySelector('h1')
let p = document.querySelector('p')

h1.addEventListener('click', assessAge)

function assessAge() {
    age = document.querySelector('#danceDanceRevolution').value

    let pUpdate = ''
    if(age < 16) {
        pUpdate = 'You can not drive'
    } else if(age < 18) {
        pUpdate = 'You can\'t hate from outside the club, because they can\'t even get in'
    } else if(age < 21) {
        pUpdate = 'You can not drink'
    } else if(age < 25) {
        pUpdate = 'You can not rent cars affordably'
    } else if(age < 30) {
        pUpdate = 'You can not rent fancy cars affordably'
    } else if(age >= 30) {
        pUpdate = 'there is nothing left to look forward too'
    } else {
        pUpdate = 'You don\'t have an age.'
    }

    p.innerText = pUpdate
}
