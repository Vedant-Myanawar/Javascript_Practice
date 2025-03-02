// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//     }

//     get email() {
//         return this._email.toUpperCase();
//     }

//     set email(value) {
//         this._email = value;
//     }

//     get password() {
//         return `${this._password}vedant`
//     }

//     set password(value) {
//         this._password = value;
//     }
// }

// const vedant = new User("vmyanawar@gmail.com","abc");
// console.log(vedant.password);
// console.log(vedant.email);

class User{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
       this._email = value;
    }

    get password() {
       return this._password.toUpperCase();
    }

    set password(value) {
       this._password = value;
    }
}

const vedant = new User("vmyanawar@gmail.com","abc");
console.log(vedant.email);
console.log(vedant.password);










































































