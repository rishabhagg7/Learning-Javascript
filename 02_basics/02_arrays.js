const arr1 = [1,2,"abc",true]
const arr2 = [4,5,6,"def",[7,8]]
const arr3 = arr1.concat(arr2)
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr1);


// spread
const arr4 = ['a','b','c']
const arr5 = ['d','e','f']
const arr6 = [...arr4,...arr5]
console.log(arr4);
console.log(arr5);
console.log(arr6);


const arr7 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr8 = arr7.flat(Infinity)
console.log(arr7);
console.log(arr8);

console.log(Array.isArray("Rishabh"));
console.log(Array.from("Rishabh"));
console.log(Array.from({name:"Rishabh"}));
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));