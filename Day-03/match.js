const products = [
    {id : 1, name : 'xaomi phone', price : 12000},
    {id : 2, name : 'samsung', price : 22000},
    {id : 3, name : 'iphone phone', price : 102000},
    {id : 4, name : 'onePlus', price : 100000},
    {id : 5, name : 'walton', price : 11000},
    {id : 6, name : 'motorola phone', price : 15500},
    {id : 7, name : 'Phone infinix', price : 15000}
]


function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const Search = 'Phone';
const result = matchProducts(products, Search);

console.log(result);

