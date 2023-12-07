function checkLeapYear(list){
    var Year = list;
    var LeapYear = [];
    for(var i = 0; i < Year.length; i++){
        if(Year[i] % 100 == 0){
            if(Year[i] % 400 == 0){
                LeapYear.push(Year[i]);
            }
        }
        else{
            if(Year[i] % 4 == 0){
                LeapYear.push(Year[i]);
            }
        }
    }

    return LeapYear;
    
}

var year = [1300, 1450, 2564, 4001, 1200];
var result = checkLeapYear(year);

console.log(result);