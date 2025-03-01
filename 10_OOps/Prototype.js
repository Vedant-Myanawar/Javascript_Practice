// let myName = "vedant        "
// let mychannel = "chai       "

// console.log(myName.trueLength);


// let myHeros = ["thor","spiderman"]

// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling",

//     getSpiderPower : function() {
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.vedant = function() {
//     console.log(`vedant is present in all objects`);
// }

// Array.prototype.heyvedant = function() {
//     console.log(`Vedant says hello`);
// }

// heroPower.vedant();
// myHeros.vedant();

// myHeros.heyvedant();


//// Inheritance

// const User = {
//     name: "chai",
//     email: "google@123.com"
// }

// const Teacher = {
//     makeVideo : true
// }

// const TeachingSupport = {
//     isAvailable : false
// }

// const TASupport = {
//     makeAssignment : "JS Assignment",
//     fullTime : True,

//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

//modern Syntax

// Object.setPrototypeOf(TeachingSupport,Teacher);


let anotherUserName = "ChaiAurCode    ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}


anotherUserName.trueLength();
"vedant".trueLength()