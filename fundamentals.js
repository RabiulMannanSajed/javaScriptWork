const student = {
    name: 'Sadia Anjum',
    age: 20,
    movies: ['love form first side', 'tumi kar'],

}
console.log(student.age);
console.log(student['age']);

// es6 part basic 

const array = [98, 100, 25, 52, 44, 88];
const SadiaInfo = {
    name: 'Sadia Anjum',
    age: 20,
    study: 'UIU',
    subject: 'CSE',
    movies: ['love form first side', 'tumi kar'],

}
//  this part is about template string 
const about = `her name is ${SadiaInfo.name} and age is ${SadiaInfo['age']}`;

console.log(about);

//  arrow function 
const get50 = () => 55;
const add64 = num => num + 65;
const isEven = x => x % 2 == 0;
const addthree = (x, y, z) => x + y + z; //multi peremater

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator 
const newArray = [...array];
array.push(99);
array.push(99);
array.push(99);
array.push(99);
console.log(array);
console.log(newArray);




