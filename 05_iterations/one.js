//for
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log('5 is the best number');
    }
    console.log(element);
}

console.log();

for(let i = 0; i <= 10; i++){
    for(let j = 0; j <= 10; j++){
        console.log(i + '*' + j + ' = ' + i*j);
    }
}

console.log();

let myArray = ["batman","spiderman","batman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//break and continue
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected");
        break;
    }
    console.log(`value of i is ${index}`);
}

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected");
        continue;
    }
    console.log(`value of i is ${index}`);
}