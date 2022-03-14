//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(a, b) {
    alert(Number(a) - Number(b))
}
subtract(10,5) // 5

//create a function that divides three numbers and console logs the quotient
function divide(a, b, c) {
    console.log(a/b/c)
}
divide(10,2,5) // 1

//create a function that multiplys three numbers and returns the product
function multiply(a, b, c) {
    return a * b * c
}
let ret = multiply(1,2,3) // 6
console.log('mult ', ret)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum
// of the first two numbers by the third number
function remainder(a, b, c) {
    return (a + b) % c
}
let rem = remainder(8,8, 5) // 1
console.log('remain ', rem)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the
// sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of
// the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function keep100(a, b, c, d) {
    let prod = a * b
    if (prod > 100) {
        console.log(prod + c + d)
    } else if (prod < 100) {
        console.log(prod - c - d)
    } else {
        alert((a * b * c) % d)
    }
}
keep100(2,50, 1, 3) // alert 1
