// #Primitive datatypes

// 7 Types : String , number , Boolean, null , undefined
//   Symbol, bigint

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 332338773479858n


// Reference type (non-primitive)
// Array , objects , funstion

// const heros = ["Shaktiman","naagraj","doga"]
// let myObj = {
//     name : "vedant",
//     age : 21
// }

// const myFunction = function(){
//     console.log("Hello world")
// }

// console.log(typeof bigNumber);
// console.log(typeof myFunction);

// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// //stack (primitive), heap(Non-primitive)

// let myYoutubeName = "vedantmyanawar"

// let anotherName = myYoutubeName
// anotherName = "chaiaurcode"

// console.log(anotherName); // Store to the Stack


let userOne = {
    email: "usr@gmail.com",
    upi: "userybl@1234"
} // store to Heap

let userTwo = userOne

userTwo.email = "vedant@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
