//1 задание

if (!Array.prototype.groupBy) {
    Array.prototype.groupBy = function (keyFunction: Function = (val: number) => val) {
        const groups: Object = {};
        this.forEach((item) => {
            const key: number = keyFunction(item);
            if (groups[key] === undefined || !groups[key]) {
                groups[key] = [];
            }
            groups[key].push(item);
        });
        return groups;
    };
}

const numbers = [1, 2, 3, 2, 4, 1, 5, 1, 6];

const groupedByValue = numbers.groupBy((val) => val);
console.log(groupedByValue);

const groupedByMod3 = numbers.groupBy((val) => val % 3);
console.log(groupedByMod3);


//2 задание

let a = new Promise<void>((resolve, reject): void => {
    let b: number = 0;
    resolve(b);
}).then(() => {
    console.log("Значение b: 0");
}).catch((error) => {
    console.error("Ошибка:", error);
    throw new Error("Проброшенная ошибка");
}).catch((error) => {
    console.error("Проброшенная ошибка:", error);
});

console.log("Значение a:", a);


//3 задание

if (!Function.prototype.delay) {
    Function.prototype.delay = function (ms) {
        const originalFunction = this;
        return function (...args): void {
            setTimeout((): void => {
                originalFunction.apply(this, args);
            }, ms);
        }();
    };
}

function fireAlert(): void {
    alert("alert!");
}

fireAlert.delay(300);


//4 задание
function myFunction() {
    return myFunction;
}

const A = myFunction();
const B = myFunction();

console.log(A === B);


//5 задание
interface TestB {
    c: () => void;
    value?: number;
}
interface TestA {
    testB?: TestB;
}

let testA: TestA = {};
testA.testB = {
    c: function (): void {
        this.value = 3;
    }
};

testA.testB.c();

console.log(testA.testB.value);