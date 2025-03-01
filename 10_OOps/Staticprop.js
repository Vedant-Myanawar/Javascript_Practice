class User {
    constructor(username) {
        this.username = username
    }

    logme() {
        console.log(`Username: ${this.username}`)
    }

    static createId() {
        return `123`
    }
}

// const vedant = new User("vedant");
// console.log(vedant.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logme();
console.log(iphone.createId());
