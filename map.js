const numbers = [4, 5, 6, 7, 89,];

let outPut = [];

function doubleOld(number) {
    return number * 2;
}

const doubleIt = number => number * 2;



// for (const number of numbers) {
//     const result = number * 2;
//     outPut.push(result);
// }
// console.log(outPut);
// const outPut = numbers.map(doubleIt);
// let outPut = numbers.map(number => number * 2)
// console.log(outPut);
const products = [
    { name: 'calculatior', price: 1050, color: 'blue' },
    { name: 'mask', price: 5, color: 'black' },
    { name: 'prizom', price: 50, color: 'transperent' },
    { name: 'money bag', price: 150, color: 'gray' },

]
const productName = products.map(product => product.name);
// console.log(productName);
products.forEach(product => console.log(product));

