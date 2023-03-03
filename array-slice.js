const numbers = [3, 2, 5, 8, 4, 12, 25, 21, 45, 87];
const numberSlice = numbers.slice(4, 8); // slice give me the value before end index original array will not change
// console.log(numberSlice);
// console.log(numbers);
//splice remove element from original array it's work for deleting element
const numbersSplice = numbers.splice(4, 2);
// console.log(numbersSplice);
// console.log(numbers);

const numberSlice2 = numbers.splice(4, 3, 55, 56);
console.log(numbers);