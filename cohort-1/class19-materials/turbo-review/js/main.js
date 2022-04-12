// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const sentence = "Why am I doing this?"
if (sentence.endsWith('?')){
    alert(sentence)
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print
// it to the console
let s = "Are you looking for a jr. dev position?"
// my answer
console.log(s.replace('jr. dev', 'software engineer'))
// correct answer
console.log(s.replaceAll('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function ro_sham_bo() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
}
console.log(ro_sham_bo())
console.log(ro_sham_bo())
console.log(ro_sham_bo())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper
// scissors against a bot using the above function
function play(playersChoice) {
    let oppositionChoice = ro_sham_bo()
    if (playersChoice === oppositionChoice) {
        return "Tie!"
    } else if (playersChoice === 'rock' && oppositionChoice === 'scissors'
            || playersChoice === 'scissors' && oppositionChoice === 'paper'
            || playersChoice === 'paper' && oppositionChoice === 'rock') {
        return "You Won!"
    } else {
        return "You Lost :("
    }
}
console.log(play('rock'))
console.log(play('paper'))
console.log(play('scissors'))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array.
// Print the results of each game to the console.

