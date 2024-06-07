function setUsername(username){
    // complex db calls
    this.username = username
}

function User(username,email,password){
    // setUsername(username)
    // we need to hold reference
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

let userOne = new User("rishabh7","rishabh@jpmc.com","321")
console.log(userOne); //username is not set