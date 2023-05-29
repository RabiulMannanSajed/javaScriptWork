const numbers = [42, 65];
const x = numbers[0];
const y = numbers[1];

const employee = {

    id: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'Dhaka',
        drink: 'kala pani'
    }
}

// const { designation, machine } = employee;
// console.log(designation);
// const { height, weight } = employee.specification;
// console.log(height, weight);

const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 1500, brand: 'omex', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 9000, brand: 'lal' };
const newProducts = [...products, newProduct];
// console.log(newProducts);

// remove item and create a new array 
const remainingProducts = newProducts.filter(product => product.name !== 'phone');

// console.log(remainingProducts);

// Ternary operator 

// this long part of if else  
const money = 80;
let food;
if (money > 100) {
    food = 'sultain dain jabo';
}
else {
    food = ' tong shop e tea drink korbo'
}
console.log(food);

const food1 = money > 100 ? 'sultain dain jabo' : ' tong shop e tea drink korbo';
console.log(food1);


