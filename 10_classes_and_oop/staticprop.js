class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const rishabh = new User('rishabh712')
// console.log(rishabh.createId()); //error, cannot be accessed

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const teacher = new Teacher("abc","abc@gmail.con")
console.log(teacher);
teacher.logMe()
// teacher.createId()//error