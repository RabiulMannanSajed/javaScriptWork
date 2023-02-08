// const a = "hello world";
// console.log(a);


// const first = '2';
// const second = true;
// if (first === second) {
//     console.log("condition is true");
// } else {
//     console.log("condition is false");
// }
function work(x, y = 4) {
    return x + y;
}
console.log(work(32));