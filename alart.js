console.log("i am here ");

// alert('some one is coming');

const coming = () => {
    alert("some one is coming");

}
const picnicAsk = () => {
    const reponse = confirm("are you want to go picnic");

    console.log(reponse);
    if (reponse === true) {
        alert("please bks your fee ");

    }
    else {
        alert("tui mor!!");
    }
}
const askName = () => {
    const name = prompt('wht is your name');
    console.log(name);
}

// task2 take a number using prompt.add 200 (if prompt = 5 , ans will be 205) show the ans in alert
const addNumber = () => {
    const add = prompt('Give yor number');
    const addInParsFloat = parseFloat(add);
    const unchangingValue = 200;
    let addNumbers = unchangingValue + addInParsFloat;
    alert("Your value is :" + " " + addNumbers);
}
// task 3 show a link to user in console if he agger to see this link otherwise show a respectful message
const showLink = () => {
    const linkConfirm = confirm("DO you want to see the link in console?");
    if (linkConfirm === true) {
        console.log('https://youtu.be/WT54-syfquk');

    }
    else {
        console.log('you miss this hart melting sound of QURAN ');
    }

}

