const user = {
    username:"rishabh7",
    loginCount:8,
    signedIn:true,
    getUserDetails: function(){
        // console.log("got user details from DB");
        // console.log(username); //error
        console.log(this.username);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(typeof this);


function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this //it is also done implicitly, return not required
}

const userOne = new User("rishabh712",12,true)
const userTwo = new User("sam123",3,false)
console.log(userTwo);
console.log(userOne);
console.log(userOne.constructor);
// new keyword is required to get a new instance otherwise old values will get over write
