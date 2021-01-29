// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console
// multiple times using a method
let affirmation = "Be the tortoise. "
let affirm = () => console.log(affirmation.repeat(3))
affirm()

// Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
let letterArr = ['h', 'i', '!']
alert(letterArr.join(''))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
let lizard_spock = () => ['rock', 'paper', 'lizard', 'spock', 'scissors'][Math.floor(Math.random() * 5)]
console.log(lizard_spock())
console.log(lizard_spock())
console.log(lizard_spock())

// *Conditionals*
// Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game
// of rock paper scissors against a bot using the above function
const choices = {
    rock:{
        win: ['lizard', 'scissors']
    },
    paper:{
        win: ['rock', 'spock']
    },
    lizard:{
        win: ['paper', 'spock']
    },
    spock:{
        win: ['scissors', 'rock']
    },
    scissors:{
        win: ['paper', 'lizard']
    }
}

function play(playerChoice) {
    let progChoice = lizard_spock()
    let msg
    if (playerChoice === progChoice) {
        msg = 'You Tie!'
    } else if (choices[playerChoice].win.includes(progChoice)) {
        msg = 'You Won!'
    } else {
        msg = 'You Lost :('
    }
    console.log(`${msg} with ${playerChoice} to ${progChoice}`)
}
play('rock')
play('paper')
play('scissors')
play('spock')
play('lizard')

// solution inspired by
// https://stackoverflow.com/questions/53730900/more-efficient-choice-comparison-for-rock-paper-scissors