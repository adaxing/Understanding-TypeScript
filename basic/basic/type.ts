// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userInput = 'Max';


// if (typeof userInput === 'string') {
//     userName = userInput;
// }

// function generateError(msg: string, code: number): never {
//     throw {message: msg, errorCode: code};
// }

// generateError('An error occurred', 500);


// string 
let myName: string = 'Max';
console.log('STRING: ', myName);

// number
let myAge: number = 27;
console.log('NUMBER: ', myAge);

// boolean
let hasHobbies: boolean = false;
console.log('BOOLEAN: ', hasHobbies);

// assign types
let myRealAge: number;
myRealAge = 27;
console.log('ASSIGN: ', myRealAge);

// array
let hobbies: any[] = ['cooking', 'sports'];
hobbies = [100];
console.log('ARRAY: ', hobbies);

// tuples
let address: [string, number] = ['sss', 22];
console.log('TUPLES: ', address);

// enum
enum Color {
    Gray, // 0
    Green = 100,  // 100
    Blue //
}
let myColor: Color = Color.Blue;
console.log('ENUM: ', myColor);

// any
let car: any = 'BMW';
console.log('ANY: ', car)
car = { brand: 'BMW', series: 3 };
console.log('ANY: ', car);

// function
function returnMyName(): string {
    return myName;
}
console.log('FUNCTION: ', returnMyName());

// void, return nothing
function sayHello(): void  {
    console.log('Hello!');
}
console.log('VOID: ', sayHello())

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log('FUNC ARGUMENT: ', multiply(2, 'Max'));
console.log('FUNC ARGUMENT: ', multiply(2, 10));

// function types, order is important
console.log('FUNC TYPE: ')
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(1,2));

// objects, name of field is important
let userData: { name: string, age: number} = {
    name: 'Max',
    age: 27
};
// userData = {
//     a: 'Hello',
//     b: 22
// };

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 2, 1],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// complex = {}

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 2, 1],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string;
myRealRealAge = 27;
// myRealRealAge = true;

// check types
console.log('CHECK TYPE: ')
let finalValue = 'A string';
if (typeof finalValue == 'number' ) {
    console.log(finalValue);
} 

// never, not return nothing, never return anything, return error
function neverReturns(): never {
    throw new Error('An error!');
}

// Nullable Types, clear value
// "strictNullChecks": true
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;

// exercise
type BankAccount = {money: number, deposit: (val: number) => void};
let bankAccount: BankAccount = {
    money: 2000,
    deposit: function(value: number): void {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(1000);
console.log(myself);
// ------------------ //

let anything: any;
anything = 12;