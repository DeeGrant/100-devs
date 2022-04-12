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
        if (this._val === '') {
            this._val = value;
            this._dom.innerText = value
        }
    }
    constructor(dom, id, val = '') {
        this._dom = dom;
        this._id = id;
        this._val = val;
    }

    addClickEvent() {
        // TODO
        this._dom.addEventListener('click', (e) => console.log(e.currentTarget.id))
    }
}

class Board {
    constructor( space0, space1, space2, space3, space4, space5, space6, space7, space8 ) {
        this._space0 = space0
        this._space1 = space1
        this._space2 = space2
        this._space3 = space3
        this._space4 = space4
        this._space5 = space5
        this._space6 = space6
        this._space7 = space7
        this._space8 = space8
        this._winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
    }
    fillSpace(spaceId, value) {
        this['_' + spaceId].val = value
    }


    _initSpaces() {
        for (let i = 0; i < 9; i++) {
            let id = '_space' + i

            let play = (e) => {
                let id = '_' + e.currentTarget.id
                // the gameplay
                console.log(this[id])
                console.log(this._gameContinues)
                if ((this[id].innerText !== 'X' || this[id].innerText !== 'O') && this._gameContinues) {
                    this[id].innerText = this._XorO()
                    this._nextTurn()
                } else if (this._gameContinues) {
                    alert('That space is already taken. Choose a different space.')
                }
            }

            this[id].removeEventListener('click', play)
            this[id].addEventListener('click', play)
        }
    }

    startGame() {
        this._initSpaces()
        this._resetBoard()
    }

    _resetBoard() {
        document.querySelector('h2').innerText = ''
        for (let i = 0; i < 9; i++) {
            let id = '_space' + i
            this[id].innerText = ''
        }

        this._gameContinues = true
        this._isXsTurn = true
        this._turn = 1
    }

    _XorO() {
        return this._isXsTurn ? 'X' : 'O'
    }

    _nextTurn() {
        this._checkForWinner()
        if (this._gameContinues) {
            this._isXsTurn = !this._isXsTurn
            this._turn = this._turn + 1
        }
    }

    _checkForWinner() {
        if (this._gameContinues && this._turn > 4) {
            if (this._winnerExists()) {
                document.querySelector('h2').innerText = `${this._XorO()} won!`
                this._endGame()
            } else if (this._turn === 9) {
                document.querySelector('h2').innerText = `It's a tie!`
                this._endGame()
            }
        }
    }

    _winnerExists() {
        return this._winConditions.some(winArr => {
            const one = this[`_space${winArr[0]}`].innerText
            const two = this[`_space${winArr[1]}`].innerText
            const three = this[`_space${winArr[2]}`].innerText
            return one !== '' && one === two && two === three
        })
    }

    _endGame(){
        this._gameContinues = false
    }
}

class Game {
    constructor(board, player1, player2) {
        this._board = board;
        this._player1 = player1;
        this._player2 = player2;

        this._gameContinues = true
        this._isXsTurn = true
        this._turn = 1
    }
    nextPlayer() {

    }
    currentPlayer(){
        return this._isXsTurn ? 'X' : 'O'
    }
    nextTurn(){
        _board.checkForWinner()
        if (this._gameContinues) {
            this.nextPlayer() // this._isXsTurn = !this._isXsTurn
            this._turn = this._turn + 1
        }
    }
    _endGame(){
        this._gameContinues = false
    }
}

function initPage() {
    let spaces = []
    // populate spaces
    for (let i = 0; i < 9; i++) {
        let id = 'space' + i
        // this[id] = document.getElementById(id)
        let space = document.getElementById(id)
        // space.addEventListener('click', (e) => console.log(e.currentTarget.id))

        // space.addEventListener('click', (e) => {
        //     // the gameplay
        //     console.log(this)
        //     let id = e.currentTarget.id
        //     if (this[id].innerText === '' && this._gameContinues) {
        //         this[id].innerText = this._XorO()
        //         this._nextTurn()
        //     } else if (this._gameContinues) {
        //         alert('That space is already taken. Choose a different space.')
        //     }
        // })
        spaces.push(space)
    }


    let board = new Board(...spaces)
    board.startGame()
    document.querySelector('button').addEventListener('click', board.startGame.bind(board))
}

initPage()
