console.log("Script is connected")

// const userName = prompt("What is your name?")
// alert(`Hi ${userName}!`)

// userName = "HIPPIEKICK"

// console.log("userName", userName)

//String
const myString = "I love coding!"
console.log(typeof myString)

//Number
console.log(100)
console.log(typeof 100)
console.log(typeof 100.5)

//BigInt
console.log(90099021892182901081n)
console.log(typeof 90099021892182901081n)

//Boolean
console.log(true)
console.log(typeof true)
console.log(typeof false)

//Undefined
console.log(undefined)
console.log(typeof undefined)

//null
console.log(null)
console.log(typeof null)

const firstName = "Matilda"
const lastName = "Brunemalm"
const role = "teacher"
let age = 34
const birthYear = 1990

const fullName = `${firstName} ${lastName}`

console.log(firstName, lastName)
console.log(fullName)

const presentation = `My name is ${fullName} and I'm a ${age} year old ${role}`

console.log("First presentation", presentation)
console.log("Second presentation", presentation.replace("teacher", "coder"))

// const askForUserName = () => {
//   console.log("Function askForUserName is running")
//   prompt("What is your username?")
// }

// askForUserName()