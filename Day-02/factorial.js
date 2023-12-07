function factorial(num){
    let fac = 1;
    for(var i = 1; i <= num; i++){
        fac = fac * i;
    }
    return fac;
}

function reverseFactorial(num){
    let Rfac = 1;
    let i = num;
    while(i >= 1){
        Rfac = Rfac * i;
        i--;
    }
    return Rfac;
}

let num = 13;
let result = factorial(num);
let result2 = reverseFactorial(num);


console.log(result);
console.log(result2);