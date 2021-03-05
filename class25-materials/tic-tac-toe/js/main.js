class Board {
    constructor() {
        this._gameContinues = true
        this._isXsTurn = true
        this._turn = 1
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

        this._initSpaces()
    }

    _initSpaces() {
        for (let i = 0; i < 9; i++) {
            let id = 'space' + i
            this[id] = document.getElementById(id)
            this[id].addEventListener('click', (e) => {
                // the gameplay
                let id = e.currentTarget.id
                if (this[id].innerText === '' && this._gameContinues) {
                    this[id].innerText = this._XorO()
                    this._nextTurn()
                } else if (this._gameContinues) {
                    alert('That space is already taken. Choose a different space.')
                }
            })
        }
    }

    startGame() {
        this._resetBoard()
    }

    _resetBoard() {
        document.querySelector('h2').innerText = ''
        for (let i = 0; i < 9; i++) {
            let id = 'space' + i
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
            const one = this[`space${winArr[0]}`].innerText
            const two = this[`space${winArr[1]}`].innerText
            const three = this[`space${winArr[2]}`].innerText
            return one !== '' && one === two && two === three
        })
    }

    _endGame(){
        this._gameContinues = false
    }
}

function initPage() {
    let board = new Board()
    board.startGame()
    document.querySelector('button').addEventListener('click', board.startGame.bind(board))
}

initPage()
