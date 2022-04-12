//Write your pseduo code first! 
document.querySelector('button').addEventListener('click', CtoF)
const span = document.querySelector('span')
const input = document.querySelector('#celcius')

function CtoF() {
    const celcius = Number(input.value)
    span.innerText = (celcius * 9 / 5 + 32).toString()
}

// 0 // 32
// 100 // 212
// -20 // -4