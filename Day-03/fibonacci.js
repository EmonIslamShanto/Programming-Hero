const fibo = [0, 1];
const n = 15;
for(var i = 2; i <= n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log(fibo);