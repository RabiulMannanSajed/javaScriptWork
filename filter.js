// const numbers = [5, 4, 78, 9, 569, 52, 5, 8];
// const bigNumbers = numbers.filter(number => number > 20);
// const smallNUmbers = numbers.filter(number => number < 10)
// // console.log(bigNumbers);
// // console.log(smallNUmbers);
const products = [
    { name: 'calculatior', price: 1050, color: 'blue' },
    { name: 'mask', price: 5, color: 'black' },
    { name: 'prizom', price: 50, color: 'white' },
    { name: 'glass', price: 100, color: 'white' },
    { name: 'money bag', price: 150, color: 'gray' },

];
// const expensive = products.filter(product => product.price > 100);
// // console.log(expensive);

// const blacks = products.filter(product => product.color == 'white');
// // console.log(blacks);
const whiteItem = products.find(product => product.color == 'white')
console.log(whiteItem);
let ul = `<li>Programming<li>`;
ul += `<li>Hero<li>`;
console.log(ul);

let a = 5;
a += 1;
console.log(a);

