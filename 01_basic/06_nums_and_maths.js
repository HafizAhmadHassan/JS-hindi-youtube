// special define number
const score =400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.table([
    balance.toFixed(2),
    balance.toString(),
    balance.toString().length,
    balance.toFixed(1)
]);


const otherNumber = 1234.8966
console.log(otherNumber.toPrecision(5));

const hundreds = 1000000

console.table([
    hundreds.toLocaleString(),
    hundreds.toLocaleString('en-IN')]);


    console.table
    ([
        Number.length,
        Number.EPSILON,
        Number.MAX_VALUE,
        Number.MIN_VALUE,
        Number.MAX_SAFE_INTEGER,
        Number.MIN_SAFE_INTEGER,
        Number.isInteger(),
        Number.isFinite()
    ]);
    