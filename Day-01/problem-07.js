// find highest number
var number = [13, 79, 45];
var max = 0;

for(var i = 0; i < number.length; i++)
{
    if(number[i]> max){
        max = number[i];
    }
}
console.log(max);