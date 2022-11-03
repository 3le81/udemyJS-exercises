// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = "Jay";
// console.log(friends);

// we can even create an array like a function with the `new` word before:
// const years = new Array(1991, 1984, 2008, 2020);
// 
// const firstName = "Elena";
// const elena = [firstName, "Pi", 2037 - 1981, "learner", friends];
// console.log(elena);
// 

// EXERCISE ARRAYS :
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
// end



