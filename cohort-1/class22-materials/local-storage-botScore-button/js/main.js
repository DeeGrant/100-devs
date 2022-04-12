//Create a button that adds 1 to a botScore stored in localStorage
document.querySelector('button').addEventListener('click', botScore)
document.getElementById('resetBotScore').addEventListener('click', resetBotScore)

let h2 = document.querySelector('h2')
function init() {
    let botScore = localStorage.getItem('botScore')
    h2.innerText = botScore ? botScore : 0
}
init()

function botScore() {
    let botScore = localStorage.getItem('botScore')
    localStorage.setItem('botScore', ++botScore)
    h2.innerText = botScore
}

function resetBotScore() {
    localStorage.removeItem('botScore')
    h2.innerText = 0
}