// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor {
    get name() {
        return this._name
    }
    get role() {
        return this._role
    }
    constructor(name, role) {
        this._name = name;
        this._role = role;
    }
    sayHello() {
        console.log(`Hello, I'm ${this._name} and I am on the ${this._role} team at 100devs!`)
    }
}

class Developer extends Contractor {
    get tech() {
        return this._tech
    }
    constructor(name, role, tech) {
        super(name, role);
        this._tech = tech
    }
    sayHello() {
        super.sayHello();
        console.log(`I use ${this._tech}.`)
    }
}

class FrontEnd extends Developer {
    constructor(name, tech) {
        super(name, 'Front-end', tech);
    }
}

class BackEnd extends Developer {
    constructor(name, tech) {
        super(name, 'Back-end', tech);
    }
}

let bob = new Contractor('Bob', 'Accounting')
let joe = new Developer('Joe', 'Data', 'Hadoop')
let simba = new FrontEnd('Simba', 'React')
let machi = new BackEnd('Machi', 'Node')

let agency = [bob, joe, simba, machi]

for (person of agency) {
    person.sayHello()
}