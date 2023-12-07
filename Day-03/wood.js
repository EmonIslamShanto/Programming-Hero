function woodCalculator(Cquantity, Tquantity, Bquantity){
    const pCw = 3;
    const pTw = 10;
    const pBw = 50;
    const TotalWood = pCw * Cquantity + pTw * Tquantity + pBw * Bquantity;
    return TotalWood;
}

const Cquantity = 5;
const Tquantity = 6;
const Bquantity = 10;

const TotalWood = woodCalculator(Cquantity, Tquantity, Bquantity);

console.log(TotalWood);