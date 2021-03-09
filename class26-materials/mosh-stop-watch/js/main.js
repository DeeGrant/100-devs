class Stopwatch {
    constructor() {
        this._startTime = 0
        this._running = false
        this._duration = 0
    }
    get duration() {
        return this._duration
    }
    reset() {
        console.log('stopwatch reset!')
        this._startTime = 0
        this._running = false
        this._duration = 0
    }
    start() {
        console.log('stopwatch started!')
        if (!this._running) {
            this._startTime = Date.now()
            this._running = true
        } else {
            throw 'The stopwatch has already started.'
        }
    }
    stop() {
        if (this._running) {
            this._duration += (Date.now() - this._startTime)
            this._running = false
        } else {
            throw 'The stopwatch is already stopped.'
        }
        console.log(this._duration)
    }
}

let sw = new Stopwatch()

document.getElementById('start').addEventListener('click', () => sw.start())
document.getElementById('stop').addEventListener('click', () => sw.stop())
document.getElementById('reset').addEventListener('click', () => sw.reset())
