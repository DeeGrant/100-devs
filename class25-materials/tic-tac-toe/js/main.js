class Space {
    get dom() {
        return this._dom;
    }
    set dom(value) {
        this._dom = value;
    }
    get id() {
        return this._id;
    }
    get val() {
        return this._val;
    }
    set val(value) {
        // check that value not empty string
        this._val = value;
        this._dom.innerText = value
    }

    constructor(dom, id, val) {
        this._dom = dom;
        this._id = id;
        this._val = val;
    }
    addClickEvent() {
        this._dom.addEventListener('click', () => clickSpace(this._id)) // still need 'isXsTurn' ...
    }
}

// make real class
class Board {
    constructor() {

    }
}

let board = {
    initBoard() {
        for (let i = 0; i < 9; i++) {
            let id = 'space' + i
            this[id] = document.getElementById(id)
            this[id].addEventListener('click', (e) => {
                let id = e.currentTarget.id
                console.log(id)
                let xo = this.XorO()
                console.log(xo)
                this[id].innerText = xo
            })
        }
    },
    _isXsTurn: true,
    XorO() {
        let ret = this._isXsTurn ? 'X' : 'O'
        this._isXsTurn = !this._isXsTurn
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
    isGameFinished() {
        // calculate if there is win or draw

        // search win arrays for index of space just placed

        // output message
    }
}

// start function
function initPage() {
    board.initBoard()
    console.log(board)

}
// separate init game function? (eventually...)

initPage()

