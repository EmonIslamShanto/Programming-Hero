function oilPrice(disel, petrol, octen){
    const diselPrice = 114;
    const petrolPrice = 130;
    const octenPrice = 135;
    const totalPrice = disel * diselPrice + petrol * petrolPrice + octen * octenPrice;
    return totalPrice;
}

const Disel = 30;
const Petrol = 20;
const Octen = 10;
const TotalPrice = oilPrice(Disel, Petrol, Octen);

console.log(TotalPrice);