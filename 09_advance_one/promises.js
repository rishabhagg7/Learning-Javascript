const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, crypotography,network
    setTimeout(()=>{
        console.log('Async task is created');
        resolve()
    },1000)
})

// then has relation with resolve
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"rishabh7",
            email:"abc@gmai.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                username:"rishabh712",
                password:"1234"
            })
        }else{
            reject(`ERROR: Something went wrong`)
        }
    },1000)
})

// not permissiable 
/*const username =*/ 
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) =>{
    // this is called chaining
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => {
    console.log("Promised is either resolved or either rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({
                username:"javascript",
                password:"js"
            })
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);   
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);   
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()

// other method

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=>console.log(data))
.catch((error) => console.log(error))
