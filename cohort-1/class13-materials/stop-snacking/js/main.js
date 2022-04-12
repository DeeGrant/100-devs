//Create a function that grabs the number of snacks from the input and tells you to stop that many times
function stopSnacking() {
    let stops = document.querySelector('#stops')
    stops.innerHTML = ''
    let inputVal = Number(document.querySelector('input').value)
    for (let i = 0; i < inputVal; i++) {
        stops.innerHTML += 'STOP! '
    }
}

document.querySelector('#help').addEventListener('click', stopSnacking)
