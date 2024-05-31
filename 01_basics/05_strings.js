const name = "rishabh"
const age = 22
console.log(name + age + "years")
console.log(`Hello my name is ${name} and I am ${age} years old`);

const courseName = new String('software engineering')
console.log(courseName);
console.log(courseName[0]);
console.log(courseName.__proto__);
console.log(courseName.length);
console.log(courseName.toUpperCase());
console.log(courseName.charAt(1))
console.log(courseName.indexOf('e'));


const newString = courseName.substring(0,4);
console.log(newString);

const anotherString = courseName.slice(0,4);
console.log(anotherString)

const yetAnotherString = courseName.slice(-20,4)
console.log(yetAnotherString)

const yetAnotherAnotherString = "    Rishabh     "
console.log(yetAnotherAnotherString);

const trimmedString = yetAnotherAnotherString.trim()
console.log(trimmedString)

console.log(trimmedString.replace('b','bb'));
console.log(trimmedString.includes('abh'));

const tempString = "Rishabh-DTU-CSE"
console.log(tempString.split('-'));