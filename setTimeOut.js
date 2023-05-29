// this part is for setTimeOut fnc 
/* 
setTimeout(() => {
    console.log("First massage");
}, 5000)
setTimeout(() => {
    console.log("this is the second message");
}, 4000)
setTimeout(() => {
    console.log("this is the third ");
}, 1000) */

// setInterval part 
/* console.log("First Interval");

/* setInterval(() => {
    console.log("third ");
}, 1500)  // it is repity give the result to widow 
console.log("second");
 */
// to stop the setinterval

function setTime() {
    console.log("I love bd ");
}

const timeId = setInterval(() => {

    if (setTime() >= 10) {
        clearInterval(timeId);
    }
})