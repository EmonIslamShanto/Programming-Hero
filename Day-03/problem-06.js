function radianToDegree(radian){
    let degree = radian * 180 / 3.1416;
    degree = degree.toFixed(2);
    return degree;
}

const Radian = 10;
const result = radianToDegree(Radian);

console.log(result);