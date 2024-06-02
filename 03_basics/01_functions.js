function sayMyName(){
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("B")
    console.log("H")
}

// sayMyName()


// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1+number2;
}

const result = addTwoNumbers(3,5)
console.log("Result: ",result);


function loginUserMessage(username = "Dravid"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("rishabhagg"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())

function calculatePrice(...num1){ //rest operator
    return num1
}

console.log(calculatePrice(200,300,400));

function calculatePrice1(val1, val2, ...num1){ //rest operator
    return num1
}

console.log(calculatePrice1(200,300,400,1000));

const user = {
    username:"rishabh7",
    email:"code.rishabh712@gmail.com"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and email is ${anyObject.email}`);
}

handleObject(user)
handleObject({
    username:"sammy",
    email:"sam@gmail.com"
})

const newArray = [400,500,200,450]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100,200,300,400]));