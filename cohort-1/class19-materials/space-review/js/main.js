//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4]
alert(arr.reduce((a, b) => a+b))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareArr(arr) {
    return arr.map(a => Math.pow(a, 2))
}
console.log(squareArr(arr))

//Create a function that takes string
//Print the reverse of that string to the console
function reverse_string(str) {
    return [...str].reverse().join('')
}
console.log(reverse_string("what's up?"))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
let is_palindrome = word => word === reverse_string(word)
alert(is_palindrome('tacocat'))
alert(is_palindrome('moon'))
