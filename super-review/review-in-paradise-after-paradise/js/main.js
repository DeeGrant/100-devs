// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first
// number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function greeting(arr) {
    let first = arr[0]
    let last = arr[arr.length - 1]
    alert(first < last ?
        'Hi' :
        first > last ?
            'Bye' :
            'We close in an hour'
    )
}

greeting([1, 2 , 3])
greeting([3, 2 , 1])
greeting([2, 2 , 2])