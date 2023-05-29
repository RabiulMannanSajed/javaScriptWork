
// const rabiul = {
//     id: 101,
//     money: 5000,
//     name: 'Sajed',
//     treatdey: function (expense, boksis, tax) {
//         this.money = this.money - expense - boksis - tax;
//         console.log(this);
//         return this.money;
//     }
// }

// const rayek = {
//     name: 'Rayek', id: 102,
//     money: 5000,

// }

// const alif = {
//     name: 'Galu Alif',
//     id: 103,

//     money: 4000,
// }


// rabiul.treatdey.call(rayek, 200, 50, 30);
// rabiul.treatdey.call(alif, 200, 20, 30);


const sajed = {
    id: 101,
    money: 5000,
    name: 'sajed',
    treatDay: function (expense, tip, tax) {
        if (expense > this.money) {
            console.log(this.name, 'check the money value');
        }
        else {
            this.money = this.money - expense - tip - tax;
            console.log(this.name, this);
            return this.money;
        }

    }
}
const sayam = {
    id: 102,
    money: 7000,
    name: 'Sayem',

}
const Mannan = {
    id: 103,
    name: 'abdul mannan',
    money: 4000
}
sajed.treatDay(500)

// bind
/* const SayamTreatDay = sajed.treatDay.bind(sayam);
SayamTreatDay(8000);

const mannanTreatDan = sajed.treatDay.bind(Mannan);
mannanTreatDan(400) */

// Call 
/* sajed.treatDay.call(sayam, 500, 100, 50);
sajed.treatDay, call(Mannan, 500, 100, 50); */


