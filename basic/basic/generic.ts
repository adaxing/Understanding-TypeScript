// simple generic
function echo (data: any) {
    return data;
}
console.log(echo('Max').length);
console.log(echo(27).length); // undefined
console.log(echo({name: 'Max', age: 27}));

// better generic
function betterEcho<T>(data: T) {
    return data;
}
console.log(betterEcho('Max').length);
console.log(betterEcho(27).toString); // undefined
console.log(betterEcho({name: 'Max', age: 27}));

// built-in generics
const testResults: Array<number> = [1.23, 34];
testResults.push(-1);
console.log(testResults);

// array
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(['Apple', 'Banana']);

// generic types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>('Something'));

// generic class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '9';
simpleMath.multiplyValue = 4;
console.log(simpleMath.calculate());

// Exercise 
class MyMap<T> {
    private map: {[key: string]: T} = {};
    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('Apple', 10);
numberMap.setItem('Banana', 2);
console.log(numberMap.getItem('Apple'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
