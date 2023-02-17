// event html function

function makeRed() {
    document.body.style.backgroundColor = 'red';
}


const blueBtn = document.getElementById('blue-btn');
//   here just write the function name don't call it  
blueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//make green bg here making this fnc in one line 
// in this fun if we don't use name that's call Anonymous fnc 
const greenBtn = document.getElementById('green-btn');
// greenBtn.onclick = function makeGreen() {
//     document.body.style.backgroundColor = 'green';
//     console.log(greenBtn);
// }
greenBtn.onclick = function () {
    document.body.style.backgroundColor = 'green';
}


//for gold btn  handel by using by add eventlistener

const glodenrod = document.getElementById('glodenrod-btn');
glodenrod.addEventListener('click', maleGlodenRod)  //addEventListener take 2 peramater 1st for type and is fnc name 

function maleGlodenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// addEventListener

const makehotPink = document.getElementById('hot-pink');
console.log(makehotPink);
makehotPink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
});

// Most usefule way

document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})

