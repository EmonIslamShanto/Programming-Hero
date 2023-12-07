function make_avg(numbers , length){
    var sum = 0;
    for(var i = 0; i < length; i++){
        sum = sum + numbers[i];
    }
    var avg = sum / length;
    return avg;
}

var numbers = [15, 25, 64, 24, 54];
var length = numbers.length;

var result = make_avg(numbers, length);

console.log(result);