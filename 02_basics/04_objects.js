// object: singleton, created using constructor

const userOne = new Object() //constructor
console.log(userOne);
const userTwo = {} //literal
console.log(userTwo);

userOne.id = "abc124"
userOne.name = "David"
userOne.isLoggedIn = true
console.log(userOne);

const anotherUser = {
    userFullName: {
        firstName: "Rishabh",
        lastName: "Aggarwal"
    }
}
console.log(anotherUser.userFullName.firstName);


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj3 = {obj1,obj2} //2 objects in 1 object
console.log(obj3);
const obj4 = Object.assign(obj1,obj2) //copy obj2 keys in obj1 and also saves it in obj4
console.log(obj1);
console.log(obj4);

const obj5 = {4: "e", 5: "f"}
const obj6 = Object.assign({},obj2,obj5) //no changes in existing objects and obj6 has key-pair of both objects
console.log(obj6);

const obj7 = {...obj1,...obj2,...obj5} //spread
console.log(obj7);

const users = [
    {
        id:1,
        name:"guru"
    },
    {
        id:2,
        name:"puru"
    },
    {
        id:3,
        name:"turu"
    }
]

console.log(users[0].name);

console.log(userOne);
console.log(Object.keys(userOne));
console.log(Object.values(userOne));
console.log(Object.entries(userOne));
console.log(userOne.hasOwnProperty("isLoggedIn"));

const course = {
    name:"dsa and cp",
    price:999,
    courseInstructor:"Abdul Bari"
}

// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor:instructor} = course
console.log(instructor);

const navBar = ({company}) => { //destructuring

}
navBar(company = "micro")
