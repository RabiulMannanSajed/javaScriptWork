
//  setInterval(() => {
//     console.log('third');
// }, 3)
let second = 0;
const timeInterValID = setInterval(() => {
    // second--;
    second++;
    console.log(second);
    if (second > 15) {

        clearInterval(timeInterValID);
    }
}, 100)
//console.log('who are u '); 

// let seconds = 0;
// setInterval(() => {
//     seconds++;
//     console.log(seconds);
// }, 1000)