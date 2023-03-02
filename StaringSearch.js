const products = [
    'dell hardcore i29 200gb laptop',
    'Acer laptop',
    'iphone 1TB camera flashlight phone',
    'black laptop whit back camera',
    'LG supernova Laptop',
    'Dell HTC low price phone',
    'keyboard'
];

const searching = 'dell';

//indexof 
const output = [];
for (const product of products) {
    if (product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);
for (const product of products) {
    if (product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);
for (const product of products) {
    if (product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())) {
        output.push(product);
    }
}
console.log(output);