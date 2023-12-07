function maxInArray(numbers){
    let max = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}

function lowInArray(numbers){
    let low = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < low){
            low = numbers[i];
        }
    }
    return low;
}
const height = [167, 152, 123, 172, 165];
const tallest = maxInArray(height);
console.log(tallest);
const lowest = lowInArray(height);
console.log(lowest);