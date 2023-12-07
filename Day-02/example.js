function mod(num1, num2){
    console.log('Finding mode of', num1, num2);
    const getMod = num1 % num2;
    return getMod;
}

const number1 = 50;
const number2 = 20;
const result = mod(number1, number2);
console.log(result);
