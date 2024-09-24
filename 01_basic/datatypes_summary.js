// primitive data type : value coped not address

// 7 types : String Number , Boolean, null, undefined, 
// Symbol value unique
// if i want to make different buttons unique we weap them,
// BigInt

const score = 100
const scoreValue = 100.3 // float is  also number
const LoggedIn = false

const outsideTemp = null
let userEmail; // the value here would be undefined

const id= Symbol('123')
const anotherId = Symbol('123')

console.table([id,anotherId, typeof id == typeof anotherId, id == anotherId])

const bigNumber = 2343234234n

// reference or non premitive
// Array Objects adn Functions

const heros = ['Mohammad', 'Ali','Abu Bakar']

let myObj = { 
    myname : "hitesh",
    age: 22,
}

const myFunction =function(){

    console.log("Hello World")
}


console.table([typeof myFunction,myObj, heros,outsideTemp])


// ++++++++++++++++

// Stack (Primitive) , Heap ( Non-Primitive )
let myYoutubename= "hiteshchoudhrydotcom";

let anothername= myYoutubename;
anothername = "chai aur code";

console.table([myYoutubename, anothername])




let myObj1 = { 
    myname : "hitesh",
    age: 22,
}

let myObj2 = myObj1;

myObj2.myname ="hassan";

console.table([myObj1.myname, myObj2.myname]);
