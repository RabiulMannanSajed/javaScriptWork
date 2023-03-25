const myfevdate = new Date('1971-12-16');
// console.log(myfevdate);

const anotherDate = new Date(1971, 3, 24, 11, 50, 40, 80);
// console.log(anotherDate);

if (myfevdate.getTime < anotherDate.getTime) {
    console.log('fev is earlier');
}

// 2 way to create date in js
// to overcome the date problem use moment.js 