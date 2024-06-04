const myNums = [1,2,3]
let myTotal = myNums.reduce( function (accumulator,currVal){
    console.log('accumulator:',accumulator," and ", 'value:',currVal);
    return accumulator + currVal
}, 0 )

console.log(myTotal);


myTotal = myNums.reduce( (accumulator,currVal) => (accumulator + currVal), 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);