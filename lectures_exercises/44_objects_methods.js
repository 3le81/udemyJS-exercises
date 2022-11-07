const jonas = {
    firstName: "Jonas",
    lastName: "Shmidt",
    birthYear: 1991,
    job: "teacher",
    friends: ["Monica", "Rachel", "Michael"],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};
console.log(jonas.getSummary());
// 






console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
//

// challenge : write "Jonas is a 46 years old teacher, and he has/ doesn't have a driver's license"



