function checkStatus(email){
    if(email){
        console.log("got user email");
    }else{
        console.log("email is empty");
    }
}

checkStatus("abc@gmail.com")
checkStatus("")
checkStatus([])


/*

falsy values:

false, 0 , -0, BigInt 0n, "", null, undefined, NaN

*/

/*

truthy values:

"0", 'false', " ", [], {}, function(){}

*/

const myArr = []
if(myArr.length === 0){
    console.log("arr is empty");
}

const myObj = {}
if(Object.keys(myObj).length === 0){
    console.log("this is an empty object");
}

//  Nullish Coalescing Operator (??) : null , undefined

let val1;
val1 = 5 ?? 10
console.log(val1);
val1 = null ?? 10
console.log(val1);
val1 = undefined ?? 15
console.log(val1);
val1 = null ?? 10 ?? 20
console.log(val1);
val1 = null ?? undefined 
console.log(val1);
val1 = null ?? undefined ?? 20
console.log(val1);
val1 = undefined ?? null 
console.log(val1);
val1 = NaN ?? undefined
console.log(val1); 

// Terniary Operator
const iceTeaPrice = 80
iceTeaPrice < 80 ? console.log("less than 80") : iceTeaPrice > 80 ? console.log("greater than 80") : console.log("equal to 80");