// for loops keep running while the condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🦾`);
// }
//
// Looping arrays, breaking and continuing - 
const jonas = [
    "Jonas",
    "Shmidt",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];
const types = [];


for (let i = 0; i < jonas.length; i++) {
    // reading from jonas array:
    console.log(jonas[i], typeof jonas[1]);

    // one way of filling types array
    //     types[i] = typeof jonas[i];
    types.push(typeof jonas[1]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break :
// continue
console.log("--ONLY STRINGS--");
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue;

    console.log(jonas[i], typeof jonas[1]);

}

// break :
console.log("--BREAK WITH NUMBER--");
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") break;

    console.log(jonas[i], typeof jonas[1]);

}
