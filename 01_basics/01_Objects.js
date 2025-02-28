//singleton
// Object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"vedant",
    "fullname":"Vedant myanawar",
    [mySym]:"myKey1",
    age:18,
    location:"jaipur",
    email: "vmyanawar@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays:["Monday", "saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["fullname"])
// console.log(jsUser[mySym])

jsUser.email = "vedant@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "ved@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log('Hello js user, ${this.name}')
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo());




