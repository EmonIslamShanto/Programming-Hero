function odd_even(number){
    if(number % 2 == 0){
        var statement = 'It is an even number';
    }
    else{
        var statement = 'It is an odd number';
    }
    return statement;
}

var number = 36;
var status = odd_even(number);

console.log(status);
