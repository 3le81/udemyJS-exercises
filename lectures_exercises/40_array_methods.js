// methods array : push();pop();unshift();shift();indexOf();

const friends = ["Michael", "Steven", "Peter"];

// add elements:
friends.push("Joe");
console.log(friends);
friends.unshift("John");
console.log(friends);

// remove elements:
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);
friends.shift();
console.log(friends);
// 
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));
// new method similar and newest of indexOf -ES6 method-:
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
friends.push(23);
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}

