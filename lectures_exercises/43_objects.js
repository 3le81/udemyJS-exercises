// objects and DOT vs. Bracket notation :

const jonas = {
    firstName: "Jonas",
    lastName: "Shmidt",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Monica", "Rachel", "Michael"]
}
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);
// for inserting expressions we need to use the bracket notation and not the DOT
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Jonas?Choose between firstName, lastName, age, job, and friends");
// console.log(interestedIn);
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log("Wrong request!Choose between firstName, lastName, age, job, and friends");
// }
// add properties and values to the object:
jonas.location = "Portugal";
jonas["twitter"] = "@jonassshmidt";
console.log(jonas);

// challenge! Write this sentence: "-Jonas- has -3- friends and his best friend is called -Michael-":
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[2]} `);
