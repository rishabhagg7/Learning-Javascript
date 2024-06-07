class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password+"rishabh"
    }
    // with get we have define a set also
    set password(value){
        this._password = value
    }
}

const userOne = new User("abc@gmail.com","abc")
console.log(userOne.password);