class Support {
    name;
    designation = 'Support wev dev';
    address = 'BD';
    constructor(name) {
        this.name = name;
    }
    startSession() {
        console.log('Start a support session a ')
    }
}
const sajed = new Support('Mannan');
const rabiul = new Support('rabul');
console.log(sajed);
console.log(rabiul);
