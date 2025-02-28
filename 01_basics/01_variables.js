const accountId = 144553
let accountEmail = "vedant@gmail.com"
var accountPasword = "12345"
accountCity = "jaipur"

// accountId = 2 // not allowed
accountEmail = "abc@gmail.com"
accountPassword = "121112121"
accountCity = "chandrapur"

console.log(accountId);
console.table([accountId, accountEmail, accountPasword, accountCity])

/*
prefer not to use var
because of issue in block scope and functional scope
let is a good practice 
*/