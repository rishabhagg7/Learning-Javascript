let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString('en-IN'));
console.log(myDate.toLocaleDateString('en-IN'));
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2024,2,5)
console.log(myCreatedDate.toDateString());
myCreatedDate = new Date(2024,6,1,23,5)
console.log(myCreatedDate.toString());
myCreatedDate = new Date('2023-02-13')
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000)); //time in seconds

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth());
console.log(newDate.getDay());

let modifiedDate = newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(modifiedDate.toString());



