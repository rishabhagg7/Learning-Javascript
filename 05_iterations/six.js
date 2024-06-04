const coding = ["js","rb","py","java","cpp"]

// for each do not return anything, hence undefined
const values = coding.forEach((item) => {
    console.log(item);
    return item
})

console.log(values);

const myArray = [1,2,3,4,5,6,7,8]
let newNums = myArray.filter( (num) => num > 4)
console.log(newNums);

let filteredArray = myArray.filter((num) => {
    return num > 4 //return keyword important
})
console.log(filteredArray); //empty array

filteredArray = []
// using for Each
myArray.forEach( (num) => {
    if(num > 4){
        filteredArray.push(num)
    }
})
console.log(filteredArray);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre == 'History')
console.log(userBooks);
userBooks = books.filter((book) => (book.publish >= 2000))
console.log(userBooks);
userBooks = books.filter((book) => {
    return book.publish >= 1995 && book.genre === 'History'
})
console.log(userBooks);