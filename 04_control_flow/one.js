//if
const isUserLoggedIn = true
if(2 == "2"){
    console.log("equal value");
    if(2 === "2"){
        console.log("type with value is equal");
    }else{
        console.log("type with value is not equal");
    }
}else{
    console.log("not equal");
}

if("3" != 2){
    console.log("not equal value");
    if(2 !== 2){
        console.log("type with value is not equal");
    }else{
        console.log("type with value is equal");
    }
}else{
    console.log("equal value");
}


const temperature = 41
if(temperature < 50){
    console.log("temperature is less than 50");
    if(temperature === 41){
        console.log("temperature is equal to 41");
    }else{
        console.log("temperature is not equal to 41");
    }
}

const balance = 800
if(balance > 100) console.log("withdrawing money");

if(balance < 500)
    console.log("less than 500");
else if(balance < 750)
    console.log("less than 750");
else if(balance < 900)
    console.log("less than 900");
else 
    console.log("greater than 900");

const hasDebitCard = true
if(isUserLoggedIn && hasDebitCard && balance > 500){
    console.log("allowed to buy clothes");
}

const loggedInFromGoogle = true
const loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Welcome, user logged in");
}