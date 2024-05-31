// Primitive Datatype 

// 7 types:  String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const bigInt = 43438943984398534543n


// Referenced Datatypes (Non primitive)

// Arrays, Objects, Functions

const heros = ["thor","spiderman","perman"] //arrays

//objects
let obj = {
    name:"rishabh",
    age: 22
}

//function
const myfunction = function(){
    "Hello World"
}

// Stack memory(Primitive) and Heap memory(Non Primitive)
let myCollegeName = "Delhi Technological University"
let anotherCollegeName = myCollegeName
console.log(myCollegeName)
console.log(anotherCollegeName);
anotherCollegeName = "NSUT"
console.log(myCollegeName) //value does not change as it is allocated in stack
console.log(anotherCollegeName); 

let userOne = { // object got reference from heap
    id: "xyz123",
    age: 22
}

let userTwo = userOne
userTwo.age = 23 //value changed in heap
console.log(userOne.age);
console.log(userTwo.age)
