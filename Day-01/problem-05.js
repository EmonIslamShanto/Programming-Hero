// find array index, replace, remove.
var fruits = ['apple', 'banana', 'orange']
var index = fruits.indexOf('banana');

console.log(index);

fruits[index] = 'mango';

console.log(fruits);

fruits.pop();

console.log(fruits);

fruits.push('watermelon');

console.log(fruits);