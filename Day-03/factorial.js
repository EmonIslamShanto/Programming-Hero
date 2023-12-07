function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i-1);
}

const num = 5;
const result = factorial(num);

console.log(result);