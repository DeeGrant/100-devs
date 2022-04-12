//Create an a class and extend it - Can be anything you would like it to be! 

class Property{
    constructor(location, value){
        this.location = location
        this._value = value
    }
    get value(){
        return this._value
    }
    locate(){
        console.log(`The property is located at ${this.location}.`)
    }
    price(){
        console.log(`Price: $${this.value}.`)
    }
}

class Home extends Property{
    constructor(location, value, rooms, bathrooms){
        super(location, value)
        this.rooms = rooms
        this.bathrooms = bathrooms
    }
    layout(){
        console.log(`The home has ${this.rooms} rooms and ${this.bathrooms} bathrooms.`)
    }
}

let home = new Home('Southside', 150000, 3, 2)

home.locate()
home.price()
home.layout()

home.value = 320000 // doesn't work

console.log(home.value)

home._value = 123 // 'can' do this, but shouldn't.
console.log(home.value)