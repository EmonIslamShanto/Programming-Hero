function publicBusFare(TotalPerson){
    const numberOfPersonForPublicBus = (TotalPerson % 50) % 11;
    const cost = numberOfPersonForPublicBus * 250;
    return cost;
}

const NumberOfPerson = 365;
const totalcost = publicBusFare(NumberOfPerson);

console.log(totalcost);