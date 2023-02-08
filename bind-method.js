
const rabiul = {
    id: 101,
    money: 5000,
    name: 'Sajed',
    treatdey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log(this);
        return this.money;
    }
}

const rayek = {
    name: 'Rayek', id: 102,
    money: 5000,

}

const alif = {
    name: 'Galu Alif',
    id: 103,

    money: 4000,
}


rabiul.treatdey.call(rayek, 200, 50, 30);
rabiul.treatdey.call(alif, 200, 20, 30);






