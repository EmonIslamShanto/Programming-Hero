function totalcost(Ticket){
    let sum = 0;
    if(Ticket <= 100){
        sum = Ticket * 100;
    }
    else if(Ticket <= 200){
        sum = Ticket * 100;
        sum = sum + (Ticket - 100) * 90;
    }
    else{
        sum = 100 * 100;
        sum = sum + 100 * 90;
        sum = sum + (Ticket - 200) * 70;
    }
    return sum;
}

const totalPrice = totalcost(250);
console.log(totalPrice);