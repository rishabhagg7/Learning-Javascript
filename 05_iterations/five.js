const coding = ["js","rb","py","java","cpp"]

coding.forEach( function (val) {
    console.log(val);
})

const myArray = [1,2,3,4,5]
myArray.forEach((val)=>{
    console.log(val);
})

function printMe(val){
    console.log(val);
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName,item.languageFileName);
})