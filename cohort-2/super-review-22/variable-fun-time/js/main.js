//--- Easy
//create a variable and assign it a number
let num = 3
//minus 10 from that number
num -= 10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input
let text = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
text = Number(text) + 25
//alert that number
alert(text)

//--- Hard
//create a variable that holds the h1
const button = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
button.addEventListener('click', function () {
    console.log(num + text)
})