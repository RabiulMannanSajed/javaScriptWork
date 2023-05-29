const bottle = { color: 'black', hold: 'water', price: 50, isCleaned: true };

//  here 'color' is key and 'black' is the value

const keys = Object.keys(bottle);
// console.log(keys);  // this method  return all obj property's key as array 

const values = Object.values(bottle); // this method  return all obj property's value as array 
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);

// to delete something form an object use this 
delete bottle.isCleaned;
// console.log(typeof (bottle));
// const typ = typeof (bottle)

for (const prop in bottle) {
    console.log(prop, bottle[prop]);
}

// Compare Object
const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };
const firstS = JSON.stringify(first);
const secondS = JSON.stringify(second);

// if (firstS === secondS) {
//     console.log('objcets are same');
// }
// else {
//     console.log('objects are not same');
// }


function compareObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        console.log('from if part');
        return true;
    }
    for (const prop in obj1) {
        if (obj1[prop] === obj2[prop]) {
            console.log('form for loop');
            return true;
        }
    }
    return false;
}
const isEqual = compareObject(first, second);
console.log(isEqual);