let score = true

console.log(typeof score);
console.log(typeof (score)) 

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber);
console.log(typeof NaN);


// "33" => 33
// "33abc" => NaN(Not an Number)
// true => 1; false => 0
// undefined => NaN
// null => 0

let isLoggedIn = "abc"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0=>false
// "" => false
// "abc" => true 

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);