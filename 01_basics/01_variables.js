const accountId = 43434
let accountEmail = "rishabbhaggarwal@gmail.com"
var accountPassword = "123456" //scope problem
accountCity = "Delhi" //possible
let accountState

// accountId = 2  // not allowed
accountEmail = "code.rishabh712@gmail.com"
accountPassword = "987654"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var because of issue in log scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])