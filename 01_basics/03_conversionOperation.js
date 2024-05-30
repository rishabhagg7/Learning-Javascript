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


/************* Operations ***************/
let value = 3
let negativeValue = -value

console.log(negativeValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " rishabh"
let str3 = str1 + str2
console.log(str3);


console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(1+"2"+2);
console.log(1+2+"2");
console.log(3+4*5%3);

console.log(true);
console.log(+true);
// console.log(true+); //error
console.log(+"");

let num1,num2,num3
num1 = num2 = num3 = 2 + 2
console.table([num1,num2,num3])

let gameCounter = 100
++gameCounter
console.log(gameCounter);