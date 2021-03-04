let board = {
    // space0:'', space1:'', space2:'', ... ?
    // spaces: ['', '', '', '', '', '', '', '', ''],
    isXsTurn: true,
    XorO() {
        let ret = this.isXsTurn ? 'X' : 'O'
        this.isXsTurn = !this.isXsTurn
        this.nextTurn()
        return ret
    },
    turnsLeft: 9, // number of turns. 0 -> 9 or 9 -> 0 ?
    nextTurn() {
        this.turnsLeft = this.turnsLeft - 1
        console.log(this.turnsLeft)
    },
    winConditions: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ],

    populateDomBoard() {

    },
    isGameFinished() {
        // calculate if there is win or draw

        // search win arrays for index of space just placed

        // output message
    }
}
// win condition object?
// let win = {win: [[0,1,2],[3,4,5],...]}

// start function
function initPage() {
    // initialize the needed stuff
    for (let i = 0; i < 9; i++) {
        let id = 'space' + i
        // event listener
        // document.getElementById(id).addEventListener('click', clickSpace())
        board[id] = document.getElementById(id)
        board[id].addEventListener('click', clickSpace)
    }

    console.log(board)

    board['space0'].innerText = 'X'
    board['space1'].innerText = 'O'

    // document.addEventListener('click', clickSpace)

}
// separate init game function? (eventually...)

initPage()

function clickSpace() {
    console.log(board.XorO())
    // console.log(obj)
}

function generateBoard() {
    
}

function populateDomBoard(board) {
    
}

// TODO
// convert object ot JSON
// load and save to localStorage
// restart game button
//
// Game series
// keep a running track of the score?
//
// Create a tic-tac-toe bot?
// difficulty levels?


// HTML & CSS
// Have entire game scale with browser size (all relative sizing)
