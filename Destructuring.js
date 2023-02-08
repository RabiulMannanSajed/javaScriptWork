/*
const fish = {
    id: 1001,
    name: 'elish mach',
    price: '1500',
    phone: 26592659656,
    dress: 'selver',
}
const phone=fish.phone;
const price=fish.price;
const dress=fish.dress;
const id=fish.id;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);*/



const company = {
    name: 'spc',
    ceo: {
        id: 01,
        name: 'sajed',
        food: 'ruti',
    },
    web: {
        work: 'web site',
        emloyee: 22,
        framework: 'js',
        tech: {
            frist: 'html',
            second: 'css',
            third: 'java',
        }
    }
}
// const work = company.web.work;
// console.log(work);

const { work, framework } = company.web;

const { food } = company.ceo;
const { frist, second, third } = company.web.tech;
console.log(work, framework, food, frist, second, third);














