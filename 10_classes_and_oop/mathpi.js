const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);


const tea = {
    name:"lemon tea",
    price:100,
    isAvailable:true,
    orderTea:function(){
        console.log("order not found");
    }
}

for(let [key,value] of Object.entries(tea)){
    if(typeof value !== 'function'){ 
        console.log(`${key}:${value}`);
    }
}

Object.defineProperty(tea,'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(tea,'name'));

for(let [key,value] of Object.entries(tea)){
    if(typeof value !== 'function'){ 
        console.log(`${key}:${value}`);
    }
}



