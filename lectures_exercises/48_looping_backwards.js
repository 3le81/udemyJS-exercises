const jonas = [
    "Jonas",
    "Shmidt",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];
// we are now looping backwards:
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// create loops inside loops:
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🦾`);
    }
}
