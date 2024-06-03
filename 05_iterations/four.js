const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(key);
}


// map is not iterable
// const map = new Map();
// map.set('IN',"India") 
// map.set('US',"United States of America")
// map.set('FR',"France")
// map.set('IN',"India")
// for(const key in map){
//     console.log(key);
// }