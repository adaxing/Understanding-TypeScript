// let message: string = 'Hiddd';
// let heading = document.createElement('h1');
// heading.textContent = message;
// document.body.appendChild(heading);

// number, string, boolean
// dynamic types in JS 
// case number add number, number concate string
 

function add(num1: number, num2: number, showResult: boolean, phrase: string) {
    const result = num1+num2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;

    }
}

let num1: number;
num1 = 5;
const num2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';
add(num1, num2, printResult, resultPhrase);
 