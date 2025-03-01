// const user = {
//     username : "vedant",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//     console.log("Got user details from database");
//     console.log(`Username: ${this.username}`);
//     console.log(this);
//     }

// }

// const user2 = {
//     username : "vedant",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//     // console.log("Got user details from database");
//     // console.log(`Username: ${this.username}`);
//     console.log(this);
//     }

// }


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greetings = function() {
        console.log(`Welcome ${this.username}`);
    } 


    // return this; //It is not necessary always..
}

const userOne = new User("vedant", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// console.log(userOne.isLoggedIn);
// console.log(userOne.loginCount);

console.log(userOne.constructor);
// console.log(userTwo);
