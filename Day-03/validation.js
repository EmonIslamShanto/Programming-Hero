function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter number only';
    }
    else{
        return num1 + num2;
    }
}

const result = add(25, "25");
console.log(result);