function megaFriends(friends) {
    if (Array.isArray(friends) == false) { // this method is checking is the friends parameter is array or not 
        return 'please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['sajed', 'sayam', 'sharjil', 'alif'];

const myBigBuddy = megaFriends(123);
console.log(myBigBuddy);

// use of indexof() this is check is this value is exist or not

if (friends.indexOf('se') != -1) { // here if sajed is not 
    console.log('sajed is here ');
}
else {
    console.log("not here");
}
if (friends.includes(toLocaleLowerCase('SAJED'))) {
    console.log('ache');
}
