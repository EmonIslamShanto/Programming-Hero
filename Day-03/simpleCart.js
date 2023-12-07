const shoppingCart = [
    {name : 'shoe', price : 1200, quantity : 2},
    {name : 'shirt', price : 2200, quantity : 3},
    {name : 'pant', price : 3700, quantity : 5},
    {name : 'cap', price : 200, quantity : 4},
    {name : 'belt', price : 700, quantity : 6},
]

function findCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        sum = sum + products[i].price * products[i].quantity;
    }
    return sum;
}

const totalPrice = findCost(shoppingCart);
console.log(totalPrice);