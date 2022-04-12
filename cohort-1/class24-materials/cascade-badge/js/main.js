//Arrays
// Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses
// your list and prints it to the console.

function reversePokeList(arr) {
    console.log(arr.reverse())
}

reversePokeList(['Pikachu', 'Charmander', 'Weedle', 'Pigeon'])


// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of
// each element in a is strictly greater than the sum of the cubes of each element in b.

function powReduce(arr, power) {
    return arr.reduce((acc, num) => acc + Math.pow(num, power), 0)
}

function squareCubes(arrSqr, arrCube) {
    return powReduce(arrSqr, 2) > powReduce(arrCube, 3)
}

console.log(squareCubes([1, 1],[1, -1]))
console.log(squareCubes([1, 1],[1, 2]))


// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:

function multipleOfIndex(arr) {
    return arr.filter((num, index) => num % index === 0)
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])) // [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10])) // [68, -1, 1, -7, 10, 10] => [-1, 10]


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return
// your answer as a number.
function safeSum(arr) {
    return arr.reduce((acc, num) => acc + parseInt(num), 0)
    // return arr.reduce((acc, num) => +acc + +num) // Unary plus
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
}
console.log(safeSum(['1', 2, '2']))