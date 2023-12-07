const student = {
    Id : '211-35-3153',
    Name : 'Emon Islam Shanto',
    Department : 'SWE',
    Shift : 'Day',
    Result : 1100
}

const laptop = {
    Model : 'MKL4551',
    Brand : 'DCL',
    Weight : '250gm',
    Storag : '250GB',
    Price : 150000
}

console.log(student);
console.log(laptop);
console.log(laptop.Price);

student.Department = 'CSE';

console.log(student);