function convertToFeet(value){
    const feetValue = value / 12;
    return feetValue;
}

const inchValue = 84;
const result = convertToFeet(inchValue);

console.log(result);