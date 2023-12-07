function convertToKM(value){
    const KMValue = value * 1.60934;
    const Value = KMValue.toFixed(2);
    return Value;
}

const mileValue = 54.65;
const KMValue = convertToKM(mileValue);

console.log(KMValue);