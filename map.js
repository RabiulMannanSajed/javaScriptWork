const numbers = [4, 5, 6, 7, 89,];

let outPut = [];

for (const number of numbers) {
    const result = number * 2;
    outPut.push(result);
}
// console.log(outPut);
// function doubleOld(number) {
//     return number * 2;
// }
// const result = doubleOld(4);
// console.log(result);

const doubleIt = number => number * 2;

outPut = numbers.map(num => num * 2);
console.log(outPut);

// console.log(outPut);
// const outPut = numbers.map(doubleIt);
// let outPut = numbers.map(number => number * 2)
// console.log(outPut);
// const products = [
//     { name: 'calculatior', price: 1050, color: 'blue' },
//     { name: 'mask', price: 5, color: 'black' },
//     { name: 'prizom', price: 50, color: 'transperent' },
//     { name: 'money bag', price: 150, color: 'gray' },

// ]
// const productName = products.map(product => product.name);
// // console.log(productPrice);
// console.log(productName);
// // products.forEach(product => console.log(product));


const friends = ['sarjil', 'rayek', 'alif', 'rukshat'];
const fLength = friends.map(friend => friend.length);
console.log(fLength);

// we mapping here on array of object
const products = [
    { name: 'water bottle', price: 50, brand: 'fit', color: 'yellow' },
    { name: 'sun glass', price: 1200, brand: 'rabon', color: 'Black' },
    { name: 'key board', price: 2000, brand: 'logitech', color: 'black' },
    { name: 'phone', price: 55000, brand: 'iphone', color: 'yellow' },
    { name: 'water-glass', price: 50, brand: 'canon', color: 'white' }
];
const productName = products.map(product => product.brand);
// console.log(productName);

// products.forEach(product => console.log(product)); //this return nothing 
// products.forEach(product => console.log(product.name));
//filter THIS return value as an array 
const cheap = products.filter(product => product.price <= 2500);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);

// filer and find find if match the first element is return you

//find 
const special = products.find(product => product.name.includes('n'));
console.log(special);