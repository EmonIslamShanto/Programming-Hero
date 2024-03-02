function ganeratePin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return ganeratePin();
    }
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = ganeratePin();
    const displayField = document.getElementById('display-pin');
    displayField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === 'C'){
            const typedField = document.getElementById('typed-pin');
            typedField.value = '';
        }else if(digit === '<'){
            const typedField = document.getElementById('typed-pin');
            typedField.value = typedField.value.slice(0, -1);
        }
    }
    else{
        const typedField = document.getElementById('typed-pin');
        typedField.value = typedField.value + digit;
    }
});

document.getElementById('match-btn').addEventListener('click', function(){
    const displayPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if(displayPin === typedPin){
        const success = document.getElementById('success');
        success.style.display = 'block';
        const fail = document.getElementById('fail');
        fail.style.display = 'none';
    }
    else{
        const success = document.getElementById('success');
        success.style.display = 'none';
        const fail = document.getElementById('fail');
        fail.style.display = 'block';
    }
});