if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); //error
// console.log(b); //error
console.log(c); //this is a problem 

let a = 200
var c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
}
console.log(a);
console.log(c); //problem

function one(){
    const username =  "rishabh7"
    function two(){
        const website = "abc.com"
        console.log(username); //can access
    }
    // console.log(website); // out of scope
    two()
}
one()

if(true){
    const username = "rishabh7"
    if(true){
        const website = " abc.com"
        console.log(username + website); //working fine
    }
    // console.log(website); //out of score
}
// console.log(username); //out of scope

console.log(addOne(5)); //no error

function addOne(num){
    return num+1
}

console.log(addOne(5));

// addTwo(5) //error

const addTwo = function(num){ //hoisting
    return num+2
}

console.log(addTwo(5));