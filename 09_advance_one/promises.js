// const promiseOne = new Promise(function(resolve, reject)  {
  //Do an Async task
  // DB calls, cryptography, network

  
//   setTimeout(function(){
//     console.log('Async task is complete');
//     resolve()
//   },1000)
 
// })

// promiseOne.then(function () {
//     console.log("promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//      resolve({username: "Vedant", email: "vmyanawar@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
// console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     let error = true;
//     if(!error) {
//         resolve({username: "Vedant", password: "123"})
//     } else {
//         reject("ERROR: Something went wrong")
//     }
//     },1000)
// })

// promiseFour
// .then( (user) => {
//     console.log(user);
//     return user.username
// } )
// .then( (username) => {
//    console.log(username);
// })
// .catch(function(error) {
//    console.log(error);
// }).finally(function() {
//     console.log("The promise is either resolved or rejected")
// })



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     let error = true;
//     if(!error) {
//         resolve({username:"Vedant", password:"123"})
//     } else {
//         reject("ERROR: SOmething went wrong");
//     }
//     },1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();







// async function getAllUsers () {
//   try{
//     const response  = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data =  await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: error occurred", error);
//   }
// }
// getAllUsers();



fetch('https://jsonplaceholder.typicode.com/users')
.then((responce) => {
    return responce.json();
})
.then((data) => {
 console.log(data);
})
.catch((error) => { 
   console.log("E: error", error);
})
.finally(function(){
    console.log("It will always executed");
})






