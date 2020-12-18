//--- Easy
//create a variable and assign it a number
let num = 50
//minus 10 from that number
num -= 10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input
let inputVal = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
inputVal += 25
//alert that number
alert(inputVal)
//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector('h1')
console.log(h1)
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', sum)

function sum() {
    inputVal = document.querySelector('#danceDanceRevolution').value
    inputVal += 25
    console.log(Number(inputVal))
    console.log(num + Number(inputVal))
}
