// TODO clean up
// TODO add 'New Game' button

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

        // TODO move out of constructor
        // initialize spaces
        for (let i = 0; i < 9; i++) {
            let id = 'space' + i
            this[id] = document.getElementById(id)
            this[id].addEventListener('click', (e) => {
                // the gameplay
                let id = e.currentTarget.id

                if (this[id].innerText === '' && this._gameContinues) {
                    console.log(id)
                    this[id].innerText = this.XorO()

                    this.nextTurn()
                } else if (this._gameContinues) {
                    alert('That space is already taken. Choose a different space.')
                }
            })
        }
    }

    XorO() {
        let ret = this._isXsTurn ? 'X' : 'O'
        console.log(ret)
        return ret
    }

    nextTurn() {
        this.checkForWinner()
        if (this._gameContinues) {
            this._isXsTurn = !this._isXsTurn
            this._turn = this._turn + 1
            console.log(this._turn)
        }
    }

    checkForWinner() {
        if (this._gameContinues && this._turn > 4) {
            if (this.calculateWinner()) {
                document.querySelector('h2').innerText = `${this.XorO()} won!`
                this.endGame()
            } else if (this._turn === 9) {
                document.querySelector('h2').innerText = `It's a tie!`
                this.endGame()
            }
        }
    }

    calculateWinner() {
        return this._winConditions.some(winArr => {
            const one = this[`space${winArr[0]}`].innerText
            const two = this[`space${winArr[1]}`].innerText
            const three = this[`space${winArr[2]}`].innerText
            return one !== '' && one === two && two === three
        })
    }

    endGame(){
        this._gameContinues = false
    }
}

function initPage() {
    let board = new Board()
    console.log(board)
}

initPage()
