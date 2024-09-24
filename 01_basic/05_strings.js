const name = "hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


// string object given length proprty and methods
// go console of browser to check
const gameName = new String('hiteshhc')
const newString = gameName.substring(0,4)
console.table([
    gameName[0],
    gameName.__proto__,
    gameName.length,
    gameName.toUpperCase(),
    gameName.charAt(2), // find position of char of 2
    gameName.indexOf('t'), // find position of t
    gameName.substring(0,4),
    gameName.slice(-8,4) // u can give -negative value
])


const newStringOne = "  hitesh  "


console.table[
    newStringOne.trim() // remove starting and ending space new lines
]

const url ="https://hitesh.com/hitesh%20choudhary"
console.table([url.replace('%20','-'),url.includes('sundar')])


