// function SetUsername(username) {

//     //complex DB calls
//     this.username = username
//     console.log("Called")
// }

// function createUser(username, email, password) {

//     SetUsername.call(this, username);
    
//     this.email = email
//     this.password = password
// }


// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);


function SetUsername(username) {

    //complex DB calla
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password) {
    
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai","chai@fb.com","123");
console.log(chai);
