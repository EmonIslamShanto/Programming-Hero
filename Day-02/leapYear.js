function checkLeapYear(Year){
    if(Year % 100 == 0){
        if(Year % 400 == 0){
            console.log('Leap Year');
        }
        else{
            console.log('Not Leap Year');
        }
    }
    else{
        if(Year % 4 == 0){
            console.log('Leap Year');
        }
        else{
            console.log('Not Leap Year');
        }
    }
}

var year = 1304;
checkLeapYear(year);