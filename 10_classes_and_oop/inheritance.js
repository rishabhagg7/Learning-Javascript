class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const teacher = new Teacher("abc","abc@gmail.com","123")
console.log(teacher);
teacher.addCourse()

const user = new User("xyz")
console.log(user);
user.logMe()

teacher.logMe()

console.log(user === User);
console.log(user instanceof User);
console.log(teacher === Teacher);
console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);