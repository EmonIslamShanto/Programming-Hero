function findPositiveNumber(numbers){
    const positiveNumber = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] >= 0){
            positiveNumber.push(numbers[i]);
        }
        else{
            return positiveNumber;
        }
    }
    return positiveNumber;
}

const Numbers = [24, 12, 35, -12, -34, 24];
const result = findPositiveNumber(Numbers);

console.log(result);