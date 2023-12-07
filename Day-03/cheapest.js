const phones = [
    {name : 'Samsung', camera : '32Gb', price : 36000, color : 'black'},
    {name : 'Walton', camera : '32Gb', price : 6000, color : 'black'},
    {name : 'Iphone', camera : '32Gb', price : 106000, color : 'black'},
    {name : 'xaomi', camera : '32Gb', price : 26000, color : 'black'},
    {name : 'Oppo', camera : '32Gb', price : 20000, color : 'black'},
    {name : 'Nokia', camera : '32Gb', price : 30000, color : 'black'},
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);