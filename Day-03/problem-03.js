function centimeterToMeter(cm){
    const meter = cm / 100;
    const Meter = meter.toFixed(2);
    return Meter;
}

const CM = 15;
const result = centimeterToMeter(CM);
console.log(result);