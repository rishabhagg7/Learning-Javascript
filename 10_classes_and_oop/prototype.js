// let myName = "    Rishabh       "
// console.log(myName);
// console.log(myName.length);
// console.log(myName.truelength); //we want original length
// // i.e
// console.log(myName.trim().length);


let myHero = ["thor","spiderman"]
let heroPower = {
    thor:"hammar",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.rishabh = function(){
    console.log('rishabh is present in all objects');
}
heroPower.rishabh()
myHero.rishabh()

Array.prototype.heyRishabh = function(){
    console.log("Rishabh says Hello");
}
myHero.heyRishabh()
// heroPower.heyRishabh()//no access

// inheritance
const User = {
    username: "Rishabh",
    email:"abc@gmail.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "    Sample username    "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUserName.truelength() 
