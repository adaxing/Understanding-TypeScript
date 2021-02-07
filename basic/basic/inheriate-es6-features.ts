/* Typescript inherit ES6 features
// Exercise 1
const double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2
const greet = (name = 'Max') => {
    console.log(`Hi, ${name}`);
}
greet();
greet('Anna');

// Exercise 3 - Spread Operator
const numbers = [-1, 2, 44, 4];
console.log(Math.min(...numbers));

// Exercise 4 - Spread Operator
const newArray = [55, 20];
newArray.push(...numbers)
console.log(newArray);

// Exercise 5 - Destructuring Arrays
const testResults = [3.53, 5.33, 1.24];
const [r1, r2, r3] = testResults;
console.log([r1, r2, r3]);

// Exercise 6 - Destructuring Objects
const scientist = {firstName: 'Will', experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
*/


// Class methods and access modifiers
class Person {
    name: string;
    private type: string;
    protected age: number = 27;

    constructor(name: string, public username: string) {
        this.name = name;
    }
    
    printAge() {
        console.log(this.age);
        // this.setType('Old Guy');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}
const person1 = new Person('Max', 'max');
console.log(person1.name, person1.username);
person1.printAge();
// person1.setType('Cool!');

// Inheritance
class Max extends Person {
    name = 'Max';
    constructor(username: string) {
        super('Max', username);
        this.age = 31;
    }
}

const max = new Max('max');
console.log(max);

// Getters & Setters
// class Plant {
//     private _species: string = 'Default';

//     get species() {
//         return this._species;
//     }

//     set species(value: string) {
//         if (value.length > 3) {
//             this._species = value;
//         } else {
//             this._species = 'Default';
//         }
//     }
// }

// let plant = new Plant();
// console.log(plant.species);
// plant.species = 'AB';
// console.log('Input AB:', plant.species);
// plant.species = 'Green Plant';
// console.log('Input green species: ', plant.species);

// Static properties & mehtods
class Helpers {
    static PI: number = 3.14;
    static circu(diameter: number): number {
        return this.PI * diameter;
    } 
}
console.log(2 * Helpers.PI);
console.log(Helpers.circu(8));
 
// Abstract classes
abstract class Project {
    projectName: string = 'Default';
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);

// private constructors
class OnlyOne {
    private static instance: OnlyOne;
    private constructor(public name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
right.name = 'something else';

// Exercise 1- Class
class Car {
    name: string;
    acceleration: number = 0;
    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log('Toooooot!');
    }

    accelerate(speed: number) {
       this.acceleration = this.acceleration + speed; 
    }
} 

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

// Exercise 2 - Inheritance
class BaseObject {
    width = 0;
    length = 0;
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle(); 
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

// Exercise 3 - Getters & Setters
class Persons {
    private _firstName: string = '';

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = '';
        }
    }
 }

 const p1 = new Persons();
 console.log(p1.firstName);
 p1.firstName = 'Ma';
 console.log(p1.firstName);
 p1.firstName = 'Maximilian';
 console.log(p1.firstName);