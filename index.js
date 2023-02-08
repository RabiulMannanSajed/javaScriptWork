// var sajed = [15, 14, 16, 17];

// var sarjil = sajed[2];

// sajed[1] = 21;

// // indexOf usde to find the Number position
// var position = sajed.indexOf(15);

// console.log(position);

// push means in js it add in array in last //

// // sajed.push(15);
// // sajed.push(25);
// // console.log(sajed);
// var tealine = ['rabiul', 'mannan',];
// tealine.push('sajed');
// var part = tealine.slice(1, 3);
// console.log(part);
// console.log(tealine);




// var num = [15, 14, 18, 19, 16, 13];
// var friends = ['sharjil', 'alif', 'js', 'sajed', 'rabiul'];
// for (var i = 0; i >friends.length; i++) {
//     var element = friends[i];
//     console.log(element);
// }
// function doubleIt(num) {
//     var result = num * 2;
//     return result;
// }
// var first = doubleIt(5);
// var secound = doubleIt(10)
// var total = first + secound;
// console.log(total);

// function add(num1, num2) {
//     var result = num1 + num2;
//     return result;
// }
// var sum = add(15, 17);
// console.log(sum);

// Object
// var satudent = { id: 121, phone: 0123, name: "sajed" };
// var satudent2 = { id: 122, phone: 0124, name: "manna" };

// console.log(satudent);

// function inchToFeet(inch) {
//     var feet = inch / 12;
//     return feet;
// }

// var nanFeet = inchToFeet(156);
// console.log(nanFeet);

// var naniFeet = inchToFeet(288);
// console.log(naniFeet);

// 10! factiorial by for loop

// function factiorial(num) {
//     var facto = 1;
//     for (var i = 1; i <= num; i++) {
//         facto = facto * i;

//     }
//     return facto;
// }
// var number = 10
// var result = factiorial(number);
// console.log(result);


// factorial nth number  recursive //

// function factorial(n) {
//     if (n == 0) {
//         return 1;
//     }
//     else {
//         return factorial(n - 1) * n;
//     }
// }
// var num
// var result = factorial(10);
// console.log(result);


// fibonacci serise //

// function fibonacci(num) {
//     var fibo = [0, 1];
//     for (var i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// var result = fibonacci(10);
// console.log(result);


// fibonacci serise //

// function fibonacci(num) {
//     if (num == 0) {
//         return [0];
//     }
//     if (num == 1) {
//         return [0, 1];
//     }
//     else {
//         var fibo = fibonacci(num - 1);
//         var nextElement = fibo[num - 1] + fibo[num - 2];
//         fibo.push(nextElement);
//         return fibo;
//     }
// }
// var result = fibonacci(10);
// console.log(result);

// program to check if a number is prime or not



// function isPrime(n) {

//     for (i = 2; i < n; i++) {
//         console.log(i, n % i);
//         if (n % i == 0) {

//             return 'Your number is not a prime number';
//         }
//         return 'Your number is a prime number';
//     }
// }
// var result = isPrime(139);
// console.log(result);

// var a = 3;
// var b = 9;
// console.log("Before swap: a=", a, "b=", b);

// var swap = a;
// a = b;
// b = swap;

// console.log("After swap: a=", a, "b=", b);


//  rendom number

// var num = 2.4345;
// var result = Math.floor(num);
// var result1 = Math.ceil(num);
// var result2 = Math.round(num);
// var dice = Math.random() * 6;
// console.log(dice);
// console.log(result);
// console.log(result1);
// console.log(result2);

/*
sum of Array
function sumOfArray(numbers) {
    var sum = 0;
    for (i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numberOfArray = [1, 2, 3, 4];
var result = sumOfArray(numberOfArray);
console.log("Sum of this Array:", result);

*/

/* find a duplicate  element in a array

var name = [1, 2, 3, 2, 4, 3, 5, 6, 7, 5];
var uniqueNUmber = [];

for (var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueNUmber.indexOf(element);
    if (index == -1) {
        uniqueNUmber.push(element);

    }
}
console.log(uniqueNUmber);
*/

/*
var marks = [45, 65, 27, 89, 56];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("Higest marks is :", max);
*/
// speech count

// var speech = "I am sajed.I am from cox Bazar";
// function getStering(str) {
//     var element = "";
//     for (var i = 0; i < str.length; i++) {
//         var chr = str[i];
//         element = chr + element;
//     }
//     return element;
// }
// var result = getStering(speech);
// console.log(result);
// var speech2 = "Hi ane.why you love me?";
// var result2 = getStering(speech2);
// console.log(result2);

/*
var bottleCOlor = "yellow";

var waterQuentity = 1;
var isFull = false;

var items = ['bottle', 'mug', 'paper', 'pen'];

items.indexOf('LOgens');
items.push('mobile');
items.push('watch');
items.pop();
if (items .length >= 4) {
    console.log("You have to many stuff on your desk");
}
else if (items.length == 4) {
    console.log("You have four items");
}
else {
    console.log("WOW! you have a clean dask");
}*/


/*
function bringsingara(taka) {
    console.log("I give this mony for sumusa", taka);
    console.log('give me sumusa');
    var sumusaPrice = 10;
    var sumusaPabo = taka / sumusaPrice;
    return sumusaPabo;
}
var money = 250;
var sumusa = bringsingara(money);
console.log("sumusa pabo", sumusa);
*/

/*
const myNUmber = 1414;
const isMyNUmberEven = isEven(myNUmber);
console.log(isHerNumberEven);

const herNumber = 2000;
const isHerNumberEven = isEven(herNumber);
console.log(isHerNumberEven);

function checkLeapYear(year) {

    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}*/
/*
var year = 2001;
var leapYear = checkLeapYear(year);

console.log(leapYear);

var result = 1
for (var i = 1; i <= 7; i++) {
    var result = result * i;
    console.log(result);
}*/
/*
const number = [44, 56, 9, 7, 8, 9, 2];
var sum = 0;
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    sum = sum + element;

    // console.log("Index number:", i);
    // console.log(i, "number element", number[i]);
}

console.log(sum);
*/
/*
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const number = [44, 56, 9, 7, 8, 9, 2];
const result = arrayTotal(number);
console.log(result);
 */
/*
var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'a') {
        count++;
    }
}
console.log(count)
*/

// find a duplicate  element in a array
/*
var name = [1, 2, 3, 2, 4, 3, 5, 6, 7, 5];
var uniqueNUmber = [];

for (var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueNUmber.indexOf(element);
    if (index == -1) {
        uniqueNUmber.push(element);

    }
}
*/
// console.log(uniqueNUmber);
/*
var name = ['sajed', 'rabiul', 'mannan', 'sajed', 'sayem', 'mannan']

var newName = [];
function uniqueName()
for (const element of name) {
    console.log(element);
    if (newName.indexOf(element) == -1){
        newName.push(element);
    }
    return newName;
}
var result=
*/

/*
// Write foo, bar, foobar if divisible by 3 or 5 or both
for (let i = 1; i <= 50; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('foobar');
        continue
    }
    else if (i % 3 == 0) {
        console.log('foo');
        continue;
    }
    else if (i % 5 == 0) {
        console.log('bar');
        continue;
    }
    console.log(i);
}
*/
/*
var array = [1, 2, 3, 4, 6];
var arr = [array.length - 1];
var arr = 5;
console.log(arr);
*/


/*
//problem 1( ANA TO VORI)

function anaToVori(vori) {

    let ana = 16;
    let voris = vori / ana;

    return voris;
}
let valueOfVori = anaToVori(32);
console.log(valueOfVori);
*/
/*
//problem 4 (Tea,Sweet,Coffee)

function teaSweetCoffee(teas, sweets, coffees) {
    const teaPrice = 10;
    const SweetPrice = 10;
    const coffeePrice = 15;

    let teaOrder = 0;
    let sweetOrder = 0;
    let coffeeOrder = 0;
    let totalPrice = 0;


    //totalPrice = teaPrice + SweetPrice + coffeePrice;
    return totalPrice;

}
var total = teaSweetCoffee()
console.log(total);*/


// 1 to 100 cost par head = 5k;

// 101 to 200 cost par head = 4k;

// 201 to up cost par head = 3k;
/*
//Problem 3
function picnicBudget(theNumberOfPeople) {

    const costOfFirst100Members = 5000;

    const costOf101To200Members = 4000;

    const costOfMoreThan200Members = 3000;

    if (theNumberOfPeople >= 0) {

        if (theNumberOfPeople <= 100) {

            const billoffirst100Member = theNumberOfPeople * costOfFirst100Members;

            return billoffirst100Member;
        }
        else if (theNumberOfPeople <= 200) {

            const first100Member = 100 * costOfFirst100Members;

            const restMembers = theNumberOfPeople - 100;

            const billOf101To200Members = restMembers * costOf101To200Members;

            const totalCostOf101to200Member = first100Member + billOf101To200Members;

            return totalCostOf101to200Member;
        }
        else if (theNumberOfPeople > 200) {

            const first100Member = 100 * costOfFirst100Members;

            const memberOf101to200 = 100 * costOf101To200Members;

            const restMembers = theNumberOfPeople - 200;

            const billOfUpTo200Member = restMembers * costOfMoreThan200Members;

            const totalCostOfUpTO200Member = first100Member + memberOf101to200 + billOfUpTo200Member

            return totalCostOfUpTO200Member;
        }
    }
    else {

        return "Please check your value.";

    }

}

const totalBill = picnicBudget(201);
console.log(totalBill);
*/



// var array = ['sajed', 'rabiul', 'mannant'];

// var emptyArry = [];

// for (var i = 0; i <= array.length; i++) {

//     var elementLength = array[i].length;
//     emptyArry = elementLength;
//     // if (elementLength % 2 != 0) {
//     //     emptyArry = elementLength[i];
//     //     console.log(elementLength);
//     //     break;
//     // }

// }

// var array = ['sajed', 'rabiul', 'mannant'];
// var i = 2;
// var item = array[i].length;
// var itemName = array[i];
// console.log(itemName);
// console.log(item);


//
// //problem 1
// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i < array.length; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(array[i]);
// }



// const add = (num1, num2) => (num1 + num2);
// const result = add(2, 2);
// console.log(result);

// const getName = () => 'rabiul mannan';
// const name = getName();
// console.log(name);
// function getSum(a, b = 9) { return a + b; } console.log(getSum(2, 7));

// class Support {
//     name;
//     designation = 'Support Web Dev';
//     address = 'BD';
//     startSession() {
//         console.log('start a support session');
//     }
// }
// const amir = new Support();
// console.log(amir);
/*
const user = { id: 011, name: 'sajed', job: 'wev dweveloper' };
const srtingified = JSON.stringify(user);
// console.log(user);
// console.log(srtingified);

const shop = {
    name: ' Sajed store',
    address: 'Bazar gata',
    profit: 1500,
    products: ['laptop', 'Mobile', 'gun'],
    owner: {
        name: 'Rabiul Mannan Sajed',
        profession: 'web developer',
    },
    isExpensive: false,
}
const shopStringifide = JSON.stringify(shop);
//console.log(shop);
console.log(shopStringifide);
const convert = JSON.parse(shopStringifide);
console.log(convert);
*/
// How will you handle the error?

// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data)
//         .try {

//     } catch (error) {

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('sajed', 12);
console.log(peop);











