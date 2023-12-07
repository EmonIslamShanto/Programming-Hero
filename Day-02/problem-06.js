var signal = 'green';

if(signal == 'red'){
    console.log('If you try to cross the road, you maybe in danger.');
}
else if(signal == 'yellow'){
    console.log('You should stop.');
}
else if(signal == 'green'){
    console.log('You should cross the road.');
}
else{
    console.log('No activities');
}

switch(signal){
    case 'red' :
        console.log('If you try to cross the road, you maybe in danger.');
        break;
    case 'yellow' :
        console.log('You should stop.');
        break;
    case 'green' :
        console.log('You should cross the road.');
        break;
    default :
    console.log('No activities');
}