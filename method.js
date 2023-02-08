/*
const student = {
    id: 101,
    money: 5000,
    name: 'sajed',
    major: 'cse',
    subject: ['english', 'DLD', 'oop'],
    bastFriend: {
        name: 'rayek',
        major: 'BBA',
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treat: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
}


student.takeExam();
const remainig = student.treat(900);
const remainig2 = student.treat(900);
console.log(remainig);
console.log(remainig2);
*/



// const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };

// const keys = Object.keys(bottle);
// const values = Object.values(bottle);
// console.log(keys);
// console.log(values);
// delete bottle.price;
// console.log(bottle);


// const entries = Object.entries(bottle);
// console.log(bottle);

// for(const [key,value] in Object.entries(bottle)){
//     cond
// }

// const first = { a: 1, b: 2 };
// const second = { a: 1, b: 2 };
// if (JSON.stringify(first) === JSON.stringify(second)) {
//     console.log("object are equle");
// }
// else {
//     console.log('object are not equle');
// }
/*
function add(num1, num2) {
    if (num1 == undefined || num2 == undefined) {
        num1 = 0;
        num2 = 0;
    }

    // num1 = num1 || 0;
    // num2 = num2 || 0;
    const total = num1 + num2;

    return total;
}
const result = add(12, 12);
console.log(result);
*/

// function fullName (first,last = 'chodori'){
// const n
// }

const add = function (num1, num2) {
    return num1 + num2;

}
const sum = add(10, 10);
console.log(sum);

//arrow function
const add2 = (num1, num2) => num1 + num2;
const sum2 = add2(10, 10);
console.log('arrow function' + " " + sum2);










