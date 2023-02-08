const personObject = {
    firstName: 'Rabiul',
    lastName: 'sajed',
    address: {
        country: 'Bangaldesh',
        village: 'CTG'
    },
};
const { address: { country, village } } = personObject;

console.log("My country name", country);
console.log("My Village name", village);