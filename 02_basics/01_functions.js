// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");


function SayMyName() {

console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

}

// SayMyName()

// function addTwoNumbers(number1, number2){
//    console.log(number1+number2);
// }

// addTwoNumbers(3, 5)


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result;
    return number1+number2;
}
 
const result = addTwoNumbers(3, 5)
// console.log("Result  :",result);

function loginUserMessage(username) {
    if(username === undefined) {
    console.log("please enter a username");
    return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vedant"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
   return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "vedant",
    price: 199
}

function handledObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handledObject(user)
handledObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(myNewArray) {
    return myNewArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]))
