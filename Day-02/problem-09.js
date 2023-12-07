function fullName(FirstPart, SecondPart){
    var fullName = FirstPart +' '+ SecondPart;
    return fullName;
}

var firstName = 'Emon';
var lastName = 'Islam';

var FullName = fullName(firstName,lastName);
console.log(FullName);