//Create a button that adds 1 to a botScore stored in localStorage
document.querySelector('button').addEventListener('click', botScore)
document.getElementById('no').addEventListener('click', noBotScore)
// localStorage.setItem('botScore', 0)

function botScore() {
    let botScore = localStorage.getItem('botScore')
    localStorage.setItem('botScore', ++botScore)
}

function noBotScore() {
    localStorage.removeItem('botScore')
}