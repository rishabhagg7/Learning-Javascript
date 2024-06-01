// object literals

const mySym = Symbol("key1");

const JsUser = {
    name:"Rishabh",
    "full name":"Rishabh Aggarwal", //cannot be access from dot operator
    age:22,
    location:"Delhi",
    email:"abc@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Thursday","Monday"],
    [mySym]:"myKey1" //symbol declared using [] brackets
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);
console.log(JsUser);

JsUser.email = "def@gmail.com"
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

Object.freeze(JsUser) //values cannot be change
JsUser.email = "gef@gmail.com" //no error
console.log(JsUser.email);
