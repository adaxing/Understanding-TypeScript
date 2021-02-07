function add(num1: number, num2: number) {
    return num1+num2;
}



function printResult(num: number) {
    console.log('Result: '+num);
}

function addAndHandle(n1: number, n2:number, cb: (num: number) => void) {
    const result = n1+n2;
    cb(result);
}

printResult(add(2,13));


let combineValues: (a:number, b:number) => number;

combineValues = add;

// combineValues = printResult;

console.log(combineValues(8,8));

addAndHandle(10,20, (res) => {
    console.log(res);
})