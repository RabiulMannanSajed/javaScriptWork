

// console.log(numbers);
// console.log(...numbers);

// const maxInArray = Math.max(...numbers);
//console.log(maxInArray);


// /const max = Math.max(23, 55, 14);
// console.log(max);

// const numbers2 = [...numbers, 88];
// numbers.push(99);
// console.log(numbers);
// console.log(numbers2);


const numbers = [23, 45, 155, 8, 5, 89, 87];
// console.log(numbers); //this is give an array
// console.log(...numbers); //this is gives us element of this array but not an array this is done by those 3 dote

const max = Math.max(55, 88, 99);
console.log(max);
const maxInArray = Math.max(...numbers);
console.log(maxInArray);
console.log(...numbers);

function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

function sum(a, b = 2) {
    const sum = a + b;
    return sum;
}
const num = sum(1);
console.log(num);

const square = x => x + x;
console.log(square(2));


