const user = {
    username: "rishabh7",
    price: 900,

    welcomeMessage: function(){
        // console.log(this); //prints object
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()
user.username = "sam9"
user.welcomeMessage()
console.log(this);


function coffee(){
    let username = "rishabh"
    console.log(this);
    // console.log(this.username); //undefined
}
// coffee()

const chai = function(){
    // console.log(this); 
    let username = "rishabh712"
    // console.log(this.username); //undefined
}

chai()

//arrow function
const milk = () => {
    let username = "rishabh7"
    // console.log(this); //empty object
    // console.log(this.username); //undefined
}
milk()

const addTwo = (num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(2,3));

const addThree = (num1,num2,num3) => num1+num2+num3 //no return required
console.log(addThree(1,2,3));

const subtractTwo = (num1,num2) => (num1-num2) //no return required
console.log(subtractTwo(5,2)); 
