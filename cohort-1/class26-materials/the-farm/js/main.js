
class Animal {
    constructor(name) {
        this._name = name;
    }
    get name(){
        return this._name
    }
    speak() {
        console.log(`${this._name} makes a sound`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }
    get breed() {
        return this._breed
    }
    speak() {
        super.speak();
        console.log(`and barks!`)
    }

}

let fido = new Dog('Fido', 'Shepard')
fido.speak()

class Cat extends Animal {
    get breed() {
        return this._breed;
    }
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }
    speak() {
        console.log(`${this.name} purrs!`)
    }
}

let fifi = new Cat('Fifi', 'Ragdoll')
console.log(fifi.breed)
fifi.speak()

// reduce repetition
class DomesticatedAnimal extends Animal {
    get breed() {
        return this._breed;
    }
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }
}

class Cow extends DomesticatedAnimal {
    get producingMilk() {
        return this._producingMilk;
    }
    constructor(name, breed, producingMilk) {
        super(name, breed);
        this._producingMilk = producingMilk;
    }
    speak() {
        super.speak();
        console.log('and mooooos!')
    }
}

let betsy = new Cow('Betsy', 'Brangus', true)
betsy.speak()
console.log(betsy.breed)

console.log('------------------------------------------')
let farm = [fido,fifi,betsy]

for( animal of farm ){
    animal.speak()
}
