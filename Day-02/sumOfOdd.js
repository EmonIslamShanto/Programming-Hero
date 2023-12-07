function findOddSum(num){
    var sum = 0;

    for(var i = 0; i < num.length; i++){
        if(num[i] % 2 === 1){
            sum = sum + num[i];
        }
    }
    return sum;
}

var number = [15, 25, 75, 48, 65, 36];
var result = findOddSum(number);

console.log(result);