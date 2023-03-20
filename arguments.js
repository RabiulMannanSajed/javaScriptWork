
function addNumbers(num1, num2) {
    console.log(arguments);
    let result = 0; //let case this value is changeable 
    for (const number of arguments) {
        result = result + number;
    }
    return result;
}

const bigNumber = addNumbers(10, 21);
console.log(bigNumber);

// added String
function nameAdd() {
    let name = '';
    for (const add of arguments) {
        name = name + add + ' ';
    }
    return name;
}
const name = nameAdd('rabiul', 'mannan', 'sajed')
console.log(name);