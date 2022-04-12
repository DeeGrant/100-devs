//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
    brand;
    height;
    width;
    length;
    constructor(brand, height, width, length) {
        this.brand = brand;
        this.height = height;
        this.width = width;
        this.length = length;
    }
    getVolume(){
        console.log(`The ${this.brand} machine fills ${this.height * this.width + this.length} cubic units.`)
    }
    makeEspresso(){
        console.log(`The ${this.brand} machine serves a cup of espresso!`)
    }
    clean(){
        console.log(`The ${this.brand} machine is now clean.`)
    }
}

let myMachine = new EspressoMachine('Nespresso', 8, 6, 12)

myMachine.getVolume()
myMachine.makeEspresso()
myMachine.clean()