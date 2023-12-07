function make_avg(a, b, c){
    var total = a + b + c;
    var avg = total/3;
    return avg;
}

var num1 = 15;
var num2 = 35;
var num3 = 45;

var result = make_avg(num1, num2, num3);

console.log(result.toFixed(2));