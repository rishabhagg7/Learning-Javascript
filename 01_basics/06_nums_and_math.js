const score = 100
console.log(score);
const balance = new Number(650)
console.log(balance);

console.log(balance.toString())
console.log(balance.toString.length)

console.log(balance.toFixed(2))

const num = 23.9543
console.log(num.toPrecision(3))
console.log(num.toPrecision(4))

const hundred = 10000000
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));


/****************** Maths ******************/
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.4));
console.log(Math.max(4,5));
console.log(Math.min(5,6,32,2.2));
console.log(Math.random());

const min = 10
const max = 20
console.log((Math.random()*(max-min+1)) + min)
console.log(Math.floor((Math.random()*(max-min+1)) + min))
