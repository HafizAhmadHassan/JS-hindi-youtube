let score = "33"



// we never know value coming is string or number
// const {score} =req.body

console.log(typeof score)
console.log(typeof(score))


let valueInNumber = Number(score)
console.table([typeof valueInNumber,valueInNumber])

// value will be nan
score = "33abc"
valueInNumber = Number(score)
console.table([typeof valueInNumber,valueInNumber])


// value null convert to 0
score = null
valueInNumber = Number(score)
console.table([typeof valueInNumber,valueInNumber])


// value null convert to 0
score = undefined
valueInNumber = Number(score)
console.table([typeof valueInNumber,valueInNumber])



// value null convert to 0
score = false
valueInNumber = Number(score)
console.table([typeof valueInNumber,valueInNumber])


//
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.table([typeof booleanIsLoggedIn,booleanIsLoggedIn])



//
let isLoggedIn2 = "hitesh"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)

console.table([typeof booleanIsLoggedIn2,booleanIsLoggedIn2])



//
let someNumber = 33
let stringNumber = String(someNumber)

console.table([typeof stringNumber,stringNumber])



// *****************+ operations ******************

let value = 3
let negValue = -value

console.table([2+2,2**3,2/3,2%3])

console.table(["2"+2])

console.table([+true,+""])


let c=101
console.table([c++,++c])

/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 101    │
│ 1       │ 103    │
└─────────┴────────┘
*/


// ********** pre vs post increment ***********


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"