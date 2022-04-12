// *Variables*
// Create a variable and console log the value
const num = 0
console.log(num)

// Create a variable, add 10 to it, and alert the value
let addMe = 5
addMe += 10
alert(addMe)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(a, b, c, d) {
    alert(a-b-c-d)
}
subtract(5,4,1,1) // -1

// Create a function that divides one number by another and returns the remainder
function remainder(a, b) {
    return a % b
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a, b) {
    if (a + b > 50) {
        alert('Jumanji')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a, b, c) {
    let prod = a*b*c
    if (prod % 3 === 0) {
        alert('ZEBRA')
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function stuff(word, number) {
    for (let i = 0; i < number; i++) {
        console.log(word)
    }
}