
//problem 1

function anaToVori(givenana) {

    let ana = 16;
    if (givenana >= 0) {

        let voris = givenana / ana;
        return voris;
    }
    else {
        return "Enter valid value";
    }


}
let valueOfVori = anaToVori(64);
console.log(valueOfVori);



//problem 2

function pandaCost(orderedSingara, orderedSumucha, orderedGilapi) {

    const singaraPrice = 7;

    const sumuchaPrice = 10;

    const gilapiPrice = 15;

    let billOfSingara = 0;

    let billOfSumucha = 0;

    let billOfGilapi = 0;

    if (orderedSingara >= 0 && orderedSumucha >= 0 && orderedGilapi >= 0) {

        billOfSingara = singaraPrice * orderedSingara;

        billOfSumucha = sumuchaPrice * orderedSumucha;

        billOfGilapi = gilapiPrice * orderedGilapi;
    }
    else {
        return 'Sir! Please check your order list.';
    }

    let totalBill = billOfSingara + billOfSumucha + billOfGilapi;

    return totalBill;

}
let total = pandaCost(0, 1, 1);
console.log(total);


//Problem 3


function picnicBudget(theNumberOfPeople) {

    const costOfFirst100Members = 5000;

    const costOf101To200Members = 4000;

    const costOfMoreThan200Members = 3000;

    if (theNumberOfPeople >= 0) {

        if (theNumberOfPeople <= 100) {

            const billoffirst100Member = theNumberOfPeople * costOfFirst100Members;

            return billoffirst100Member;
        }
        else if (theNumberOfPeople <= 200) {

            const first100Member = 100 * costOfFirst100Members;

            const restMembers = theNumberOfPeople - 100;

            const billOf101To200Members = restMembers * costOf101To200Members;

            const totalCostOf101to200Member = first100Member + billOf101To200Members;

            return totalCostOf101to200Member;
        }
        else if (theNumberOfPeople > 200) {

            const first100Member = 100 * costOfFirst100Members;

            const memberOf101to200 = 100 * costOf101To200Members;

            const restMembers = theNumberOfPeople - 200;

            const billOfUpTo200Member = restMembers * costOfMoreThan200Members;

            const totalCostOfUpTO200Member = first100Member + memberOf101to200 + billOfUpTo200Member

            return totalCostOfUpTO200Member;
        }
    }
    else {

        return "Please check your value.";
    }

}

const totalBill = picnicBudget(202);
console.log(totalBill);


//Problem 4

function oddFriend(friendsName) {

    for (var element of friendsName) {
        var itemLength = element.length;
        if (itemLength % 2 != 0) {
            return element;

        }
    }
}
var array = ["Asif", "Sajed", "Rayek", "Alif", "Sarjil",];
var name = oddFriend(array);
console.log(name);
