class Support {
    name;
    designation = 'Support wev dev';
    address = 'BD';
    // this is a constructor like java
    constructor(name) {
        this.name = name;
    }
    // Support(name) {
    //     this.name = name;
    // }
    startSession() {
        console.log('Start a support session a ')
    }
}
class StudentCare {
    name;
    designation = 'student Care web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(studentName, herAddress) {
        console.log('Build a routine for this person', studentName, 'who lives in ', herAddress);
    }
}
// const sadia = new StudentCare('sadia anjum', 'Dhaka');
const sadia = new StudentCare().buildARoutine('sadia anjum', 'Dhaka');
// sadia.buildARoutine('sadia anjum', 'Dhaka');
console.log(sadia);
// const sajed = new Support('Mannan');
// const rabiul = new Support('rabul');
// console.log(sajed);
// console.log(rabiul);
