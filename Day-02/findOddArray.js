function findOddSum(num){
    var sum = 0;
    var oddArray = [];

    for(var i = 0; i < num.length; i++){
        if(num[i] % 2 === 1){
            var element = num[i];
            oddArray.push(element);
            sum = sum + num[i];
        }
    }
    console.log(sum);
    return oddArray;
}

var number = [15, 25, 75, 48, 65, 36];
var result = findOddSum(number);

console.log(result);